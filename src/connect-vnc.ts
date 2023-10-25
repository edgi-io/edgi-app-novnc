/// <reference types="vite/client" />

import { UTaskContext, USyscall, UFilesystem, EdgiDialogData, OpenFlag, UInotifyWatcher, UPollWatcher, IN_CLOSE_WRITE, EdgiOpenWindowData } from '@edgi/sdk';

import css1 from './connect.css?inline';
const stylesheets: string[] = [css1];

const VNC_DEFAULT_HOST = '';
const VNC_DEFAULT_PORT = 5900;

const isValidHost = (h: string): boolean => !!h;
const isValidPort = (p: number): boolean => !!p && (p === (p >>> 0)) && p >= 1 && p <= 0xFFFF;
const escape = (s: string) => ('' + s).replace(/([\\"])/g, '\\$1');
const quote = (s: string) => ('' + s).match(/[^\w-=\.,:]/) ? `"${escape(s)}"` : '' + s;
type PresetsMap = Map<string, any>;

export default class ConnectVncBlock extends HTMLElement {
    protected edgi!: UTaskContext;
    protected syscall: USyscall|undefined;
    protected fs: UFilesystem|undefined;
    protected rootContainer: HTMLDivElement;
    protected toolbarContainer: HTMLDivElement;
    protected profileSelect: HTMLSelectElement;
    protected profileLoad: HTMLButtonElement;
    protected profileSave: HTMLButtonElement;
    protected loginContainer: HTMLFormElement;
    protected loginHost: HTMLInputElement;
    protected loginButton: HTMLButtonElement;
    protected loginAdvanced: HTMLButtonElement;
    protected advancedContainer: HTMLDivElement;
    protected miscContainer: HTMLDivElement;
    protected clipboardDebounceTimeout: number = 0;
    protected commandLineSpan: HTMLSpanElement;
    protected presets: PresetsMap = new Map();
    //protected configWatcher!: UInotifyWatcher;

    protected _validate = this.validateInputs.bind(this);

    constructor() {
      super();
      this.rootContainer = document.createElement('div');
      this.rootContainer.className = 'connect';
      this.toolbarContainer = document.createElement('div');
      this.toolbarContainer.className = 'toolbar';
      this.rootContainer.appendChild(this.toolbarContainer);
      const title = document.createElement('h3');
      title.innerText = 'Connect to VNC server';
      title.className = 'title';
      this.rootContainer.appendChild(title);
      this.loginContainer = document.createElement('form');
      this.loginContainer.className = 'login';
      this.loginContainer.onsubmit = this.onConnect.bind(this);
      this.rootContainer.appendChild(this.loginContainer);

      this.advancedContainer = document.createElement('div');
      this.advancedContainer.className = 'advanced';
      this.advancedContainer.style.display = 'none';
      this.rootContainer.appendChild(this.advancedContainer);

      this.miscContainer = document.createElement('div');
      this.miscContainer.className = 'misc';
      this.advancedContainer.appendChild(this.miscContainer);

      // Toolbar
      const toolbarLabel = document.createElement('label');
      toolbarLabel.innerText = 'Profile:';
      this.toolbarContainer.appendChild(toolbarLabel);
      this.profileSelect = document.createElement('select');
      this.profileSelect.onchange = this.onProfileSelect.bind(this);
      this.profileSelect.innerHTML = '<option value="" disabled selected style="font-style: italic">(none)</option>';
      this.profileSelect.title = 'select profile';
      this.toolbarContainer.appendChild(this.profileSelect);
      this.profileLoad = document.createElement('button');
      this.profileLoad.disabled = true;
      this.profileLoad.innerText = 'Load';
      this.profileLoad.title = 'load profile';
      this.profileLoad.onclick = this.onProfileLoad.bind(this);
      this.toolbarContainer.appendChild(this.profileLoad);
      this.profileSave = document.createElement('button');
      this.profileSave.disabled = true;
      this.profileSave.innerText = 'Save...'
      this.profileSave.title = 'save profile';
      this.profileSave.onclick = this.onProfileSave.bind(this);
      this.toolbarContainer.appendChild(this.profileSave);

      // Login form
      const loginHostLabel = document.createElement('label');
      loginHostLabel.innerText = 'Host\u00A0name:';
      this.loginContainer.appendChild(loginHostLabel);

      this.loginHost = document.createElement('input');
      this.loginHost.innerText = 'localhost';
      this.loginHost.onchange = this._validate;
      this.loginHost.onkeyup = this._validate;
      this.loginContainer.appendChild(this.loginHost);
      /*
      this.loginPort = document.createElement('input');
      this.loginPort.style.cssText = 'width: 40px';
      this.loginPort.value = '22';
      this.loginPort.onchange = this._validate;
      this.loginPort.onkeyup = this._validate;
      this.loginContainer.appendChild(this.loginPort);
      */
      this.loginContainer.appendChild(document.createElement('span'));

      this.loginButton = document.createElement('button');
      this.loginButton.onclick = this.onConnect.bind(this);
      this.loginButton.className = 'login-button';
      this.loginButton.innerText = 'Connect!';
      this.loginAdvanced = document.createElement('button');
      this.loginAdvanced.innerText = 'Advanced\u00A0>';
      this.loginAdvanced.onclick = this.onAdvanced.bind(this);
      this.loginContainer.appendChild(document.createElement('span'));
      this.loginContainer.appendChild(this.loginButton);
      this.loginContainer.appendChild(this.loginAdvanced);

      // Misc
      const commandLineLabel = document.createElement('label');
      commandLineLabel.innerText = 'Command line';
      this.commandLineSpan = document.createElement('span');
      this.miscContainer.appendChild(commandLineLabel);
      this.miscContainer.appendChild(this.commandLineSpan);
    }

    connectedCallback() {
      if (!this.edgi.task?.pid)
        throw new Error();
      this.syscall = this.edgi.syscall;
      this.fs = this.edgi.fs;
      //this.configWatcher = new UInotifyWatcher(this.syscall, new UPollWatcher(this.syscall));
      this.profileSave.disabled = false;
      const m = this.edgi.task.argv[0]?.match(/^vnc:\/\/(?:([\w%]*)(?::([\w%]+))?@)?([\.\-\w%]+|\[[:a-fA-F0-9]+\])(?::(\d+))?\/?(?:\?(.*))?$/);
      if (m) {
        let [_, _user, password, host, port, args] = m;
        if (host) {
          this.loginHost.value = port ? `${host}:${port}` : host;
        }
      }
      if (!this.hasChildNodes()) {
        //this.styleElements.forEach((s) => this.appendChild(s));
        this.appendChild(this.rootContainer);
        stylesheets.forEach(css => {
          const sheet = new CSSStyleSheet();
          (<any>sheet).replaceSync(css);
          (<any>this.getRootNode()).adoptedStyleSheets.push(sheet);
        });
      }
      this.initConfig();
      this.loadConfig();
      setTimeout(() => {
        this.updateFocus();
        this.validateInputs();
      }, 0);
    }

    updateFocus() {
      window.focus();
      if (!this.loginHost.value.length) {
        this.loginHost.focus();
      }
    }

    connectVnc(url: string) {
      const m = url.match(/^vnc:\/\/(?:([\w%]*)(?::([\w%]+))?@)?([\.\-\w%]+|\[[:a-fA-F0-9]+\])(?::(\d+))?\/?(?:\?(.*))?$/);
      if (!m) {
        console.error('connectVnc: invalid url:', url);
        return;
      }
      let [_, user, password, host, port, args] = m;
      const launchItem = {
        command: '@edgi-app/novnc/app',
        argv: [] as string[],
        env: {} as Record<string, string>,
      };
      if (host) {
        launchItem.argv.push('--host', host);
      }
      if (port) {
        launchItem.argv.push('--port', port);
      }
      if (user) {
        launchItem.argv.push('--user', user);
      }
      this.edgi.openWindow(launchItem);
    }

    setPresets(presets: PresetsMap) {
      this.presets = presets;
      this.profileSelect.innerHTML = '<option value="" selected style="font-style: italic">(select)</option>';
      for (let [name, directive] of presets.entries()) {
        const o = document.createElement('option');
        o.value = name;
        o.innerText = name;
        this.profileSelect.appendChild(o);
      }
      if (this.profileSelect.childElementCount === 1) {
        this.profileSelect.innerHTML += '<option value="" disabled selected style="font-style: italic">(none saved)</option>';
      }
    }

    setHost(host?: string) {
      host ||= VNC_DEFAULT_HOST;
      const [_, port] = this.getHostPort();
      this.setHostPort(host, port);
    }

    setPort(port?: number) {
      port ||= VNC_DEFAULT_PORT;
      const [host] = this.getHostPort();
      this.setHostPort(host, port);
    }

    setHostPort(host: string, port: number) {
      this.loginHost.value = port !== VNC_DEFAULT_PORT ? `${host}:${port}` : host;
    }

    getHostPort(): [string, number] {
      const [host, port_str] = this.loginHost.value.trim().split(':') as [string, string?];
      const port = port_str && Number.parseInt(port_str) || VNC_DEFAULT_PORT;
      return [host, port];
    }

    async initConfig() {
      try {
        await this.edgi.fs.mkdir('/home/.config')
      } catch(e) {}
      try {
        await this.edgi.fs.mkdir('/home/.config/novnc')
      } catch(e) {}
      await this.loadConfig();
      //await this.configWatcher.add('/home/.config/novnc/presets.toml', IN_CLOSE_WRITE, () => {
      //  this.loadConfig();
      //});
      //await this.loadConfig();
    }

    async loadConfig() {
      let configText = '{}';
      try {
        configText = await this.edgi.fs.readfile('/home/.config/novnc/profiles.json');
      } catch(e) {}
      let config: Record<string, any> = {};
      try {
        config = JSON.parse(configText);
      } catch(e) {}
      this.setPresets(new Map(Object.entries(config)));
    }
  
    validateInputs(): string|null {
      const profile = this.profileSelect.value;
      this.profileLoad.disabled = !this.fs || !profile;

      let invalid = false;
      const setValid = (el: HTMLElement, cond: boolean) => {
        el.classList[cond ? 'remove' : 'add']('error');
        invalid ||= !cond;
      }

      const [hostName, portNum] = this.getHostPort();
      setValid(this.loginHost, isValidHost(hostName) && isValidPort(portNum));

      this.loginButton.disabled = invalid;
      setValid(this.commandLineSpan, !invalid);

      const cmd = `vnc://${hostName}:${portNum}`;
      this.commandLineSpan.innerText = cmd;
      this.profileSave.disabled = invalid;
      return invalid ? null : cmd;
    }

    protected async onProfileSave() {
      if (!this.fs) return;
      const dlg: EdgiDialogData = {
        type: 'simple/prompt',
        title: 'VNC Connection Profile',
        message: 'Give this profile a name:',
        promptMatch: '^[\\w- ]+$',
        promptError: 'unsupported name',
      }
      const res = await this.edgi.showDialog(dlg);
      if (!res || !res.value) {
        return;
      }
      const [host, port] = this.getHostPort();
      let configText = '{}';
      try {
        configText = await this.edgi.fs.readfile('/home/.config/novnc/profiles.json');
      } catch(e) {}
      let config = {};
      try {
        config = JSON.parse(configText);
      } catch(e) {}
      config[res.value] = { host, port };
      configText = JSON.stringify(config);
      await this.edgi.fs.writefile('/home/.config/novnc/profiles.json', configText);
    }

    protected onProfileLoad() {
      const value = this.profileSelect.value;
      this.profileSelect.selectedIndex = 0;
      const preset = this.presets.get(value);
      if (!preset) {
        this.profileLoad.disabled = true;
        return;
      }
      let showAdvanced = false;
      this.setHost(preset.host);
      this.setPort(preset.port);
      if (showAdvanced) {
        this.onAdvanced();
      }
      this.validateInputs();
      this.updateFocus();
    }

    protected onProfileSelect() {
      this.profileLoad.disabled = !this.profileSelect.value;
    }

    protected onAdvanced() {
      this.advancedContainer.style.display = 'block';
      this.loginAdvanced.disabled = true;
    }

    protected onConnect() {
      const url = this.validateInputs();
      if (!url) {
        return;
      }
      this.connectVnc(url);
      setTimeout(() => {
        this.edgi.syscall.exit(0);
      }, 0);
      return false; // to form submit
    }
}
