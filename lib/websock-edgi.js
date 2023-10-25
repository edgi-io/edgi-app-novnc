"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Log = _interopRequireWildcard(require("./util/logging.js"));
var _sdk = require("@edgi/sdk");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * Websock: high-performance buffering wrapper
                                                                                                                                                                                                                                                                                                                                                                                               * Copyright (C) 2019 The noVNC Authors
                                                                                                                                                                                                                                                                                                                                                                                               * Licensed under MPL 2.0 (see LICENSE.txt)
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Websock is similar to the standard WebSocket / RTCDataChannel object
                                                                                                                                                                                                                                                                                                                                                                                               * but with extra buffer handling.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Websock has built-in receive queue buffering; the message event
                                                                                                                                                                                                                                                                                                                                                                                               * does not contain actual data but is simply a notification that
                                                                                                                                                                                                                                                                                                                                                                                               * there is new data available. Several rQ* methods are available to
                                                                                                                                                                                                                                                                                                                                                                                               * read binary data off of the receive queue.
                                                                                                                                                                                                                                                                                                                                                                                               */ //import { EdgiHandler } from "@edgi-sdk/block-module";
// this has performance issues in some versions Chromium, and
// doesn't gain a tremendous amount of performance increase in Firefox
// at the moment.  It may be valuable to turn it on in the future.
var MAX_RQ_GROW_SIZE = 40 * 1024 * 1024; // 40 MiB

// Constants pulled from RTCDataChannelState enum
// https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/readyState#RTCDataChannelState_enum
var DataChannel = {
  CONNECTING: "connecting",
  OPEN: "open",
  CLOSING: "closing",
  CLOSED: "closed"
};
var ReadyStates = {
  CONNECTING: [WebSocket.CONNECTING, DataChannel.CONNECTING],
  OPEN: [WebSocket.OPEN, DataChannel.OPEN],
  CLOSING: [WebSocket.CLOSING, DataChannel.CLOSING],
  CLOSED: [WebSocket.CLOSED, DataChannel.CLOSED]
};

// Properties a raw channel must have, WebSocket and RTCDataChannel are two examples
var rawChannelProps = ["send", "close", "binaryType", "onerror", "onmessage", "onopen", "protocol", "readyState"];
var EdgiSocket = /*#__PURE__*/_createClass(function EdgiSocket(uri, protocols, edgiTaskPromise) {
  var _this = this;
  _classCallCheck(this, EdgiSocket);
  _defineProperty(this, "connect", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _this$onopen;
    var argv, addr, ipRegex, _dbuf$results, _yield$_this$syscall$, _yield$_this$syscall$2, fd, a, s, _yield$_this$syscall$3, _yield$_this$syscall$4, buf, sbuf, dbuf, port, saddr;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _this.readyState = WebSocket.CONNECTING;
          if (window.edgi.syscall) {
            _context.next = 3;
            break;
          }
          throw new Error('Not running in Edgi');
        case 3:
          _this.syscall = window.edgi.syscall;
          argv = window.edgi.task.argv;
          _context.next = 7;
          return _this.syscall.socket(_sdk.AF.INET, _sdk.SOCK.STREAM, 0);
        case 7:
          _this.fd = _context.sent;
          addr = _this.host;
          ipRegex = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;
          if (addr.match(ipRegex)) {
            _context.next = 30;
            break;
          }
          _context.next = 13;
          return _this.syscall.socket(_sdk.AF.UNIX, _sdk.SOCK.DGRAM, 0);
        case 13:
          _yield$_this$syscall$ = _context.sent;
          _yield$_this$syscall$2 = _slicedToArray(_yield$_this$syscall$, 1);
          fd = _yield$_this$syscall$2[0];
          a = _sdk.UMarshal.marshalSockAddr({
            family: _sdk.AF.UNIX,
            path: '\0edgi-dns'
          });
          _context.next = 19;
          return _this.syscall.connect(fd, a);
        case 19:
          s = JSON.stringify({
            req: addr
          });
          _context.next = 22;
          return _this.syscall.sendto(fd, new TextEncoder().encode(s), 0, null);
        case 22:
          _context.next = 24;
          return _this.syscall.recvfrom(fd, 2048, 0, 0, 0);
        case 24:
          _yield$_this$syscall$3 = _context.sent;
          _yield$_this$syscall$4 = _slicedToArray(_yield$_this$syscall$3, 1);
          buf = _yield$_this$syscall$4[0];
          sbuf = new TextDecoder().decode(buf);
          dbuf = JSON.parse(sbuf);
          if ((_dbuf$results = dbuf.results) !== null && _dbuf$results !== void 0 && _dbuf$results.length) {
            addr = dbuf.results[0];
          }
        case 30:
          port = _this.port;
          saddr = _sdk.UMarshal.marshalSockAddr({
            family: _sdk.AF.INET,
            addr: addr,
            port: port
          });
          _context.next = 34;
          return _this.syscall.connect(_this.fd, saddr);
        case 34:
          _this.readyState = WebSocket.OPEN;
          (_this$onopen = _this.onopen) === null || _this$onopen === void 0 || _this$onopen.call(_this);
          _this.readloop();
        case 37:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  _defineProperty(this, "readloop", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var _this$onmessage, _yield$_this$syscall$5, _yield$_this$syscall$6, _len, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(_this.readyState === WebSocket.OPEN)) {
            _context2.next = 17;
            break;
          }
          _context2.prev = 1;
          _context2.next = 4;
          return _this.syscall.pread(_this.fd, _this.rbuffer.length, -1);
        case 4:
          _yield$_this$syscall$5 = _context2.sent;
          _yield$_this$syscall$6 = _slicedToArray(_yield$_this$syscall$5, 2);
          _len = _yield$_this$syscall$6[0];
          data = _yield$_this$syscall$6[1];
          (_this$onmessage = _this.onmessage) === null || _this$onmessage === void 0 || _this$onmessage.call(_this, {
            data: data
          });
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](1);
          console.error('socket readloop:', _context2.t0);
          _this.close();
        case 15:
          _context2.next = 0;
          break;
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 11]]);
  })));
  _defineProperty(this, "send", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
      var written, _yield$_this$syscall$7, _yield$_this$syscall$8, len;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(_this.readyState !== WebSocket.OPEN)) {
              _context3.next = 2;
              break;
            }
            throw new Error('socket not open');
          case 2:
            written = 0;
          case 3:
            if (!(written < data.length)) {
              _context3.next = 22;
              break;
            }
            _context3.prev = 4;
            _context3.next = 7;
            return _this.syscall.sendto(_this.fd, data, null, _sdk.MSG_NOSIGNAL);
          case 7:
            _yield$_this$syscall$7 = _context3.sent;
            _yield$_this$syscall$8 = _slicedToArray(_yield$_this$syscall$7, 1);
            len = _yield$_this$syscall$8[0];
            written += len;
            _context3.next = 20;
            break;
          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](4);
            if (!(_context3.t0 === -_sdk.ErrorCode.EPIPE)) {
              _context3.next = 19;
              break;
            }
            return _context3.abrupt("break", 22);
          case 19:
            throw _context3.t0;
          case 20:
            _context3.next = 3;
            break;
          case 22:
            return _context3.abrupt("return", written);
          case 23:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[4, 13]]);
    }));
    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }());
  _defineProperty(this, "close", function () {
    _this.readyState = WebSocket.CLOSING;
    _this.syscall.close(_this.fd).then(function () {
      var _this$onclose;
      _this.fd = undefined;
      _this.readyState = WebSocket.CLOSED;
      (_this$onclose = _this.onclose) === null || _this$onclose === void 0 || _this$onclose.call(_this, new Error());
    });
  });
  var m = uri.match(/^wss?:\/\/([^:]+):(\d+)/);
  this.host = m[1];
  this.port = Number.parseInt(m[2]);
  this.onmessage = undefined;
  this.onopen = undefined;
  this.onclose = undefined;
  this.onerror = undefined;
  this.binaryType = undefined;
  this.protocol = undefined;
  this.edgiTaskPromise = edgiTaskPromise;
  this.syscall = undefined;
  this.fd = undefined;
  this.rbuffer = new Uint8Array(1024 * 1024 * 4);
  this.connect();
});
var Websock = exports["default"] = /*#__PURE__*/function () {
  function Websock() {
    _classCallCheck(this, Websock);
    this._edgiTaskPromise = Promise.resolve(edgi.task);
    this._websocket = null; // WebSocket or RTCDataChannel object

    this._rQi = 0; // Receive queue index
    this._rQlen = 0; // Next write position in the receive queue
    this._rQbufferSize = 1024 * 1024 * 4; // Receive queue buffer size (4 MiB)
    // called in init: this._rQ = new Uint8Array(this._rQbufferSize);
    this._rQ = null; // Receive queue

    this._sQbufferSize = 1024 * 10; // 10 KiB
    // called in init: this._sQ = new Uint8Array(this._sQbufferSize);
    this._sQlen = 0;
    this._sQ = null; // Send queue

    this._eventHandlers = {
      message: function message() {},
      open: function open() {},
      close: function close() {},
      error: function error() {}
    };
  }

  // Getters and Setters
  _createClass(Websock, [{
    key: "readyState",
    get: function get() {
      var subState;
      if (this._websocket === null) {
        return "unused";
      }
      subState = this._websocket.readyState;
      if (ReadyStates.CONNECTING.includes(subState)) {
        return "connecting";
      } else if (ReadyStates.OPEN.includes(subState)) {
        return "open";
      } else if (ReadyStates.CLOSING.includes(subState)) {
        return "closing";
      } else if (ReadyStates.CLOSED.includes(subState)) {
        return "closed";
      }
      return "unknown";
    }
  }, {
    key: "sQ",
    get: function get() {
      return this._sQ;
    }
  }, {
    key: "rQ",
    get: function get() {
      return this._rQ;
    }
  }, {
    key: "rQi",
    get: function get() {
      return this._rQi;
    },
    set: function set(val) {
      this._rQi = val;
    }

    // Receive Queue
  }, {
    key: "rQlen",
    get: function get() {
      return this._rQlen - this._rQi;
    }
  }, {
    key: "rQpeek8",
    value: function rQpeek8() {
      return this._rQ[this._rQi];
    }
  }, {
    key: "rQskipBytes",
    value: function rQskipBytes(bytes) {
      this._rQi += bytes;
    }
  }, {
    key: "rQshift8",
    value: function rQshift8() {
      return this._rQshift(1);
    }
  }, {
    key: "rQshift16",
    value: function rQshift16() {
      return this._rQshift(2);
    }
  }, {
    key: "rQshift32",
    value: function rQshift32() {
      return this._rQshift(4);
    }

    // TODO(directxman12): test performance with these vs a DataView
  }, {
    key: "_rQshift",
    value: function _rQshift(bytes) {
      var res = 0;
      for (var _byte = bytes - 1; _byte >= 0; _byte--) {
        res += this._rQ[this._rQi++] << _byte * 8;
      }
      return res;
    }
  }, {
    key: "rQshiftStr",
    value: function rQshiftStr(len) {
      if (typeof len === 'undefined') {
        len = this.rQlen;
      }
      var str = "";
      // Handle large arrays in steps to avoid long strings on the stack
      for (var i = 0; i < len; i += 4096) {
        var part = this.rQshiftBytes(Math.min(4096, len - i));
        str += String.fromCharCode.apply(null, part);
      }
      return str;
    }
  }, {
    key: "rQshiftBytes",
    value: function rQshiftBytes(len) {
      if (typeof len === 'undefined') {
        len = this.rQlen;
      }
      this._rQi += len;
      return new Uint8Array(this._rQ.buffer, this._rQi - len, len);
    }
  }, {
    key: "rQshiftTo",
    value: function rQshiftTo(target, len) {
      if (len === undefined) {
        len = this.rQlen;
      }
      // TODO: make this just use set with views when using a ArrayBuffer to store the rQ
      target.set(new Uint8Array(this._rQ.buffer, this._rQi, len));
      this._rQi += len;
    }
  }, {
    key: "rQslice",
    value: function rQslice(start) {
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.rQlen;
      return new Uint8Array(this._rQ.buffer, this._rQi + start, end - start);
    }

    // Check to see if we must wait for 'num' bytes (default to FBU.bytes)
    // to be available in the receive queue. Return true if we need to
    // wait (and possibly print a debug message), otherwise false.
  }, {
    key: "rQwait",
    value: function rQwait(msg, num, goback) {
      if (this.rQlen < num) {
        if (goback) {
          if (this._rQi < goback) {
            throw new Error("rQwait cannot backup " + goback + " bytes");
          }
          this._rQi -= goback;
        }
        return true; // true means need more data
      }

      return false;
    }

    // Send Queue
  }, {
    key: "flush",
    value: function () {
      var _flush = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var n;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(this._sQlen > 0 && this.readyState === 'open')) {
                _context4.next = 6;
                break;
              }
              _context4.next = 3;
              return this._websocket.send(this._encodeMessage());
            case 3:
              n = _context4.sent;
              if (n > 0 && n < this._sQlen) {
                this._sQ.set(this._sQ.subarray(n));
              }
              this._sQlen -= n;
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function flush() {
        return _flush.apply(this, arguments);
      }
      return flush;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(arr) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              this._sQ.set(arr, this._sQlen);
              this._sQlen += arr.length;
              _context5.next = 4;
              return this.flush();
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function send(_x2) {
        return _send.apply(this, arguments);
      }
      return send;
    }()
  }, {
    key: "sendString",
    value: function () {
      var _sendString = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(str) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.send(str.split('').map(function (chr) {
                return chr.charCodeAt(0);
              }));
            case 2:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function sendString(_x3) {
        return _sendString.apply(this, arguments);
      }
      return sendString;
    }() // Event Handlers
  }, {
    key: "off",
    value: function off(evt) {
      this._eventHandlers[evt] = function () {};
    }
  }, {
    key: "on",
    value: function on(evt, handler) {
      this._eventHandlers[evt] = handler;
    }
  }, {
    key: "_allocateBuffers",
    value: function _allocateBuffers() {
      this._rQ = new Uint8Array(this._rQbufferSize);
      this._sQ = new Uint8Array(this._sQbufferSize);
    }
  }, {
    key: "init",
    value: function init() {
      this._allocateBuffers();
      this._rQi = 0;
      this._websocket = null;
    }
  }, {
    key: "open",
    value: function open(uri, protocols) {
      this.attach(new EdgiSocket(uri, protocols, this._edgiTaskPromise));
    }
  }, {
    key: "attach",
    value: function attach(rawChannel) {
      var _this2 = this;
      this.init();

      // Must get object and class methods to be compatible with the tests.
      var channelProps = [].concat(_toConsumableArray(Object.keys(rawChannel)), _toConsumableArray(Object.getOwnPropertyNames(Object.getPrototypeOf(rawChannel))));
      for (var i = 0; i < rawChannelProps.length; i++) {
        var prop = rawChannelProps[i];
        if (channelProps.indexOf(prop) < 0) {
          throw new Error('Raw channel missing property: ' + prop);
        }
      }
      this._websocket = rawChannel;
      this._websocket.binaryType = "arraybuffer";
      this._websocket.onmessage = this._recvMessage.bind(this);
      this._websocket.onopen = function () {
        Log.Debug('>> WebSock.onopen');
        if (_this2._websocket.protocol) {
          Log.Info("Server choose sub-protocol: " + _this2._websocket.protocol);
        }
        _this2._eventHandlers.open();
        Log.Debug("<< WebSock.onopen");
      };
      this._websocket.onclose = function (e) {
        Log.Debug(">> WebSock.onclose");
        _this2._eventHandlers.close(e);
        Log.Debug("<< WebSock.onclose");
      };
      this._websocket.onerror = function (e) {
        Log.Debug(">> WebSock.onerror: " + e);
        _this2._eventHandlers.error(e);
        Log.Debug("<< WebSock.onerror: " + e);
      };
    }
  }, {
    key: "close",
    value: function close() {
      if (this._websocket) {
        if (this.readyState === 'connecting' || this.readyState === 'open') {
          Log.Info("Closing WebSocket connection");
          this._websocket.close();
        }
        this._websocket.onmessage = function () {};
      }
    }

    // private methods
  }, {
    key: "_encodeMessage",
    value: function _encodeMessage() {
      // Put in a binary arraybuffer
      // according to the spec, you can send ArrayBufferViews with the send method
      return new Uint8Array(this._sQ.buffer, 0, this._sQlen);
    }

    // We want to move all the unread data to the start of the queue,
    // e.g. compacting.
    // The function also expands the receive que if needed, and for
    // performance reasons we combine these two actions to avoid
    // unneccessary copying.
  }, {
    key: "_expandCompactRQ",
    value: function _expandCompactRQ(minFit) {
      // if we're using less than 1/8th of the buffer even with the incoming bytes, compact in place
      // instead of resizing
      var requiredBufferSize = (this._rQlen - this._rQi + minFit) * 8;
      var resizeNeeded = this._rQbufferSize < requiredBufferSize;
      if (resizeNeeded) {
        // Make sure we always *at least* double the buffer size, and have at least space for 8x
        // the current amount of data
        this._rQbufferSize = Math.max(this._rQbufferSize * 2, requiredBufferSize);
      }

      // we don't want to grow unboundedly
      if (this._rQbufferSize > MAX_RQ_GROW_SIZE) {
        this._rQbufferSize = MAX_RQ_GROW_SIZE;
        if (this._rQbufferSize - this.rQlen < minFit) {
          throw new Error("Receive Queue buffer exceeded " + MAX_RQ_GROW_SIZE + " bytes, and the new message could not fit");
        }
      }
      if (resizeNeeded) {
        var oldRQbuffer = this._rQ.buffer;
        this._rQ = new Uint8Array(this._rQbufferSize);
        this._rQ.set(new Uint8Array(oldRQbuffer, this._rQi, this._rQlen - this._rQi));
      } else {
        this._rQ.copyWithin(0, this._rQi, this._rQlen);
      }
      this._rQlen = this._rQlen - this._rQi;
      this._rQi = 0;
    }

    // push arraybuffer values onto the end of the receive que
  }, {
    key: "_DecodeMessage",
    value: function _DecodeMessage(data) {
      var u8 = new Uint8Array(data);
      if (u8.length > this._rQbufferSize - this._rQlen) {
        this._expandCompactRQ(u8.length);
      }
      this._rQ.set(u8, this._rQlen);
      this._rQlen += u8.length;
    }
  }, {
    key: "_recvMessage",
    value: function _recvMessage(e) {
      this._DecodeMessage(e.data);
      if (this.rQlen > 0) {
        this._eventHandlers.message();
        if (this._rQlen == this._rQi) {
          // All data has now been processed, this means we
          // can reset the receive queue.
          this._rQlen = 0;
          this._rQi = 0;
        }
      } else {
        Log.Debug("Ignoring empty message");
      }
    }
  }]);
  return Websock;
}();