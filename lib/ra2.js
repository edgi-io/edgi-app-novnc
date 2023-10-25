"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RSACipher = exports.RA2Cipher = exports.AESEAXCipher = void 0;
var _base = _interopRequireDefault(require("./base64.js"));
var _strings = require("./util/strings.js");
var _eventtarget = _interopRequireDefault(require("./util/eventtarget.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AESEAXCipher = exports.AESEAXCipher = /*#__PURE__*/function () {
  function AESEAXCipher() {
    _classCallCheck(this, AESEAXCipher);
    this._rawKey = null;
    this._ctrKey = null;
    this._cbcKey = null;
    this._zeroBlock = new Uint8Array(16);
    this._prefixBlock0 = this._zeroBlock;
    this._prefixBlock1 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    this._prefixBlock2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]);
  }
  _createClass(AESEAXCipher, [{
    key: "_encryptBlock",
    value: function () {
      var _encryptBlock2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(block) {
        var encrypted;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return window.crypto.subtle.encrypt({
                name: "AES-CBC",
                iv: this._zeroBlock
              }, this._cbcKey, block);
            case 2:
              encrypted = _context.sent;
              return _context.abrupt("return", new Uint8Array(encrypted).slice(0, 16));
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function _encryptBlock(_x) {
        return _encryptBlock2.apply(this, arguments);
      }
      return _encryptBlock;
    }()
  }, {
    key: "_initCMAC",
    value: function () {
      var _initCMAC2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var k1, k2, v, i, lut;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this._encryptBlock(this._zeroBlock);
            case 2:
              k1 = _context2.sent;
              k2 = new Uint8Array(16);
              v = k1[0] >>> 6;
              for (i = 0; i < 15; i++) {
                k2[i] = k1[i + 1] >> 6 | k1[i] << 2;
                k1[i] = k1[i + 1] >> 7 | k1[i] << 1;
              }
              lut = [0x0, 0x87, 0x0e, 0x89];
              k2[14] ^= v >>> 1;
              k2[15] = k1[15] << 2 ^ lut[v];
              k1[15] = k1[15] << 1 ^ lut[v >> 1];
              this._k1 = k1;
              this._k2 = k2;
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function _initCMAC() {
        return _initCMAC2.apply(this, arguments);
      }
      return _initCMAC;
    }()
  }, {
    key: "_encryptCTR",
    value: function () {
      var _encryptCTR2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data, counter) {
        var encrypted;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return window.crypto.subtle.encrypt({
                "name": "AES-CTR",
                counter: counter,
                length: 128
              }, this._ctrKey, data);
            case 2:
              encrypted = _context3.sent;
              return _context3.abrupt("return", new Uint8Array(encrypted));
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function _encryptCTR(_x2, _x3) {
        return _encryptCTR2.apply(this, arguments);
      }
      return _encryptCTR;
    }()
  }, {
    key: "_decryptCTR",
    value: function () {
      var _decryptCTR2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data, counter) {
        var decrypted;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return window.crypto.subtle.decrypt({
                "name": "AES-CTR",
                counter: counter,
                length: 128
              }, this._ctrKey, data);
            case 2:
              decrypted = _context4.sent;
              return _context4.abrupt("return", new Uint8Array(decrypted));
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function _decryptCTR(_x4, _x5) {
        return _decryptCTR2.apply(this, arguments);
      }
      return _decryptCTR;
    }()
  }, {
    key: "_computeCMAC",
    value: function () {
      var _computeCMAC2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(data, prefixBlock) {
        var n, m, r, cbcData, i, _i, cbcEncrypted, mac;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!(prefixBlock.length !== 16)) {
                _context5.next = 2;
                break;
              }
              return _context5.abrupt("return", null);
            case 2:
              n = Math.floor(data.length / 16);
              m = Math.ceil(data.length / 16);
              r = data.length - n * 16;
              cbcData = new Uint8Array((m + 1) * 16);
              cbcData.set(prefixBlock);
              cbcData.set(data, 16);
              if (r === 0) {
                for (i = 0; i < 16; i++) {
                  cbcData[n * 16 + i] ^= this._k1[i];
                }
              } else {
                cbcData[(n + 1) * 16 + r] = 0x80;
                for (_i = 0; _i < 16; _i++) {
                  cbcData[(n + 1) * 16 + _i] ^= this._k2[_i];
                }
              }
              _context5.next = 11;
              return window.crypto.subtle.encrypt({
                name: "AES-CBC",
                iv: this._zeroBlock
              }, this._cbcKey, cbcData);
            case 11:
              cbcEncrypted = _context5.sent;
              cbcEncrypted = new Uint8Array(cbcEncrypted);
              mac = cbcEncrypted.slice(cbcEncrypted.length - 32, cbcEncrypted.length - 16);
              return _context5.abrupt("return", mac);
            case 15:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function _computeCMAC(_x6, _x7) {
        return _computeCMAC2.apply(this, arguments);
      }
      return _computeCMAC;
    }()
  }, {
    key: "setKey",
    value: function () {
      var _setKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(key) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              this._rawKey = key;
              _context6.next = 3;
              return window.crypto.subtle.importKey("raw", key, {
                "name": "AES-CTR"
              }, false, ["encrypt", "decrypt"]);
            case 3:
              this._ctrKey = _context6.sent;
              _context6.next = 6;
              return window.crypto.subtle.importKey("raw", key, {
                "name": "AES-CBC"
              }, false, ["encrypt", "decrypt"]);
            case 6:
              this._cbcKey = _context6.sent;
              _context6.next = 9;
              return this._initCMAC();
            case 9:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function setKey(_x8) {
        return _setKey.apply(this, arguments);
      }
      return setKey;
    }()
  }, {
    key: "encrypt",
    value: function () {
      var _encrypt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(message, associatedData, nonce) {
        var nCMAC, encrypted, adCMAC, mac, i, res;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this._computeCMAC(nonce, this._prefixBlock0);
            case 2:
              nCMAC = _context7.sent;
              _context7.next = 5;
              return this._encryptCTR(message, nCMAC);
            case 5:
              encrypted = _context7.sent;
              _context7.next = 8;
              return this._computeCMAC(associatedData, this._prefixBlock1);
            case 8:
              adCMAC = _context7.sent;
              _context7.next = 11;
              return this._computeCMAC(encrypted, this._prefixBlock2);
            case 11:
              mac = _context7.sent;
              for (i = 0; i < 16; i++) {
                mac[i] ^= nCMAC[i] ^ adCMAC[i];
              }
              res = new Uint8Array(16 + encrypted.length);
              res.set(encrypted);
              res.set(mac, encrypted.length);
              return _context7.abrupt("return", res);
            case 17:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function encrypt(_x9, _x10, _x11) {
        return _encrypt.apply(this, arguments);
      }
      return encrypt;
    }()
  }, {
    key: "decrypt",
    value: function () {
      var _decrypt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(encrypted, associatedData, nonce, mac) {
        var nCMAC, adCMAC, computedMac, i, _i2, res;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this._computeCMAC(nonce, this._prefixBlock0);
            case 2:
              nCMAC = _context8.sent;
              _context8.next = 5;
              return this._computeCMAC(associatedData, this._prefixBlock1);
            case 5:
              adCMAC = _context8.sent;
              _context8.next = 8;
              return this._computeCMAC(encrypted, this._prefixBlock2);
            case 8:
              computedMac = _context8.sent;
              for (i = 0; i < 16; i++) {
                computedMac[i] ^= nCMAC[i] ^ adCMAC[i];
              }
              if (!(computedMac.length !== mac.length)) {
                _context8.next = 12;
                break;
              }
              return _context8.abrupt("return", null);
            case 12:
              _i2 = 0;
            case 13:
              if (!(_i2 < mac.length)) {
                _context8.next = 19;
                break;
              }
              if (!(computedMac[_i2] !== mac[_i2])) {
                _context8.next = 16;
                break;
              }
              return _context8.abrupt("return", null);
            case 16:
              _i2++;
              _context8.next = 13;
              break;
            case 19:
              _context8.next = 21;
              return this._decryptCTR(encrypted, nCMAC);
            case 21:
              res = _context8.sent;
              return _context8.abrupt("return", res);
            case 23:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function decrypt(_x12, _x13, _x14, _x15) {
        return _decrypt.apply(this, arguments);
      }
      return decrypt;
    }()
  }]);
  return AESEAXCipher;
}();
var RA2Cipher = exports.RA2Cipher = /*#__PURE__*/function () {
  function RA2Cipher() {
    _classCallCheck(this, RA2Cipher);
    this._cipher = new AESEAXCipher();
    this._counter = new Uint8Array(16);
  }
  _createClass(RA2Cipher, [{
    key: "setKey",
    value: function () {
      var _setKey2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(key) {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this._cipher.setKey(key);
            case 2:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function setKey(_x16) {
        return _setKey2.apply(this, arguments);
      }
      return setKey;
    }()
  }, {
    key: "makeMessage",
    value: function () {
      var _makeMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(message) {
        var ad, encrypted, i, res;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              ad = new Uint8Array([(message.length & 0xff00) >>> 8, message.length & 0xff]);
              _context10.next = 3;
              return this._cipher.encrypt(message, ad, this._counter);
            case 3:
              encrypted = _context10.sent;
              for (i = 0; i < 16 && this._counter[i]++ === 255; i++);
              res = new Uint8Array(message.length + 2 + 16);
              res.set(ad);
              res.set(encrypted, 2);
              return _context10.abrupt("return", res);
            case 9:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function makeMessage(_x17) {
        return _makeMessage.apply(this, arguments);
      }
      return makeMessage;
    }()
  }, {
    key: "receiveMessage",
    value: function () {
      var _receiveMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(length, encrypted, mac) {
        var ad, res, i;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              ad = new Uint8Array([(length & 0xff00) >>> 8, length & 0xff]);
              _context11.next = 3;
              return this._cipher.decrypt(encrypted, ad, this._counter, mac);
            case 3:
              res = _context11.sent;
              for (i = 0; i < 16 && this._counter[i]++ === 255; i++);
              return _context11.abrupt("return", res);
            case 6:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function receiveMessage(_x18, _x19, _x20) {
        return _receiveMessage.apply(this, arguments);
      }
      return receiveMessage;
    }()
  }]);
  return RA2Cipher;
}();
var RSACipher = exports.RSACipher = /*#__PURE__*/function () {
  function RSACipher(keyLength) {
    _classCallCheck(this, RSACipher);
    this._key = null;
    this._keyLength = keyLength;
    this._keyBytes = Math.ceil(keyLength / 8);
    this._n = null;
    this._e = null;
    this._d = null;
    this._nBigInt = null;
    this._eBigInt = null;
    this._dBigInt = null;
  }
  _createClass(RSACipher, [{
    key: "_base64urlDecode",
    value: function _base64urlDecode(data) {
      data = data.replace(/-/g, "+").replace(/_/g, "/");
      data = data.padEnd(Math.ceil(data.length / 4) * 4, "=");
      return _base["default"].decode(data);
    }
  }, {
    key: "_u8ArrayToBigInt",
    value: function _u8ArrayToBigInt(arr) {
      var hex = '0x';
      for (var i = 0; i < arr.length; i++) {
        hex += arr[i].toString(16).padStart(2, '0');
      }
      return BigInt(hex);
    }
  }, {
    key: "_padArray",
    value: function _padArray(arr, length) {
      var res = new Uint8Array(length);
      res.set(arr, length - arr.length);
      return res;
    }
  }, {
    key: "_bigIntToU8Array",
    value: function _bigIntToU8Array(bigint) {
      var padLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var hex = bigint.toString(16);
      if (padLength === 0) {
        padLength = Math.ceil(hex.length / 2) * 2;
      }
      hex = hex.padStart(padLength * 2, '0');
      var length = hex.length / 2;
      var arr = new Uint8Array(length);
      for (var i = 0; i < length; i++) {
        arr[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
      }
      return arr;
    }
  }, {
    key: "_modPow",
    value: function _modPow(b, e, m) {
      if (m === 1n) {
        return 0;
      }
      var r = 1n;
      b = b % m;
      while (e > 0) {
        if (e % 2n === 1n) {
          r = r * b % m;
        }
        e = e / 2n;
        b = b * b % m;
      }
      return r;
    }
  }, {
    key: "generateKey",
    value: function () {
      var _generateKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var privateKey;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return window.crypto.subtle.generateKey({
                name: "RSA-OAEP",
                modulusLength: this._keyLength,
                publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                hash: {
                  name: "SHA-256"
                }
              }, true, ["encrypt", "decrypt"]);
            case 2:
              this._key = _context12.sent;
              _context12.next = 5;
              return window.crypto.subtle.exportKey("jwk", this._key.privateKey);
            case 5:
              privateKey = _context12.sent;
              this._n = this._padArray(this._base64urlDecode(privateKey.n), this._keyBytes);
              this._nBigInt = this._u8ArrayToBigInt(this._n);
              this._e = this._padArray(this._base64urlDecode(privateKey.e), this._keyBytes);
              this._eBigInt = this._u8ArrayToBigInt(this._e);
              this._d = this._padArray(this._base64urlDecode(privateKey.d), this._keyBytes);
              this._dBigInt = this._u8ArrayToBigInt(this._d);
            case 12:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function generateKey() {
        return _generateKey.apply(this, arguments);
      }
      return generateKey;
    }()
  }, {
    key: "setPublicKey",
    value: function setPublicKey(n, e) {
      if (n.length !== this._keyBytes || e.length !== this._keyBytes) {
        return;
      }
      this._n = new Uint8Array(this._keyBytes);
      this._e = new Uint8Array(this._keyBytes);
      this._n.set(n);
      this._e.set(e);
      this._nBigInt = this._u8ArrayToBigInt(this._n);
      this._eBigInt = this._u8ArrayToBigInt(this._e);
    }
  }, {
    key: "encrypt",
    value: function encrypt(message) {
      if (message.length > this._keyBytes - 11) {
        return null;
      }
      var ps = new Uint8Array(this._keyBytes - message.length - 3);
      window.crypto.getRandomValues(ps);
      for (var i = 0; i < ps.length; i++) {
        ps[i] = Math.floor(ps[i] * 254 / 255 + 1);
      }
      var em = new Uint8Array(this._keyBytes);
      em[1] = 0x02;
      em.set(ps, 2);
      em.set(message, ps.length + 3);
      var emBigInt = this._u8ArrayToBigInt(em);
      var c = this._modPow(emBigInt, this._eBigInt, this._nBigInt);
      return this._bigIntToU8Array(c, this._keyBytes);
    }
  }, {
    key: "decrypt",
    value: function decrypt(message) {
      if (message.length !== this._keyBytes) {
        return null;
      }
      var msgBigInt = this._u8ArrayToBigInt(message);
      var emBigInt = this._modPow(msgBigInt, this._dBigInt, this._nBigInt);
      var em = this._bigIntToU8Array(emBigInt, this._keyBytes);
      if (em[0] !== 0x00 || em[1] !== 0x02) {
        return null;
      }
      var i = 2;
      for (; i < em.length; i++) {
        if (em[i] === 0x00) {
          break;
        }
      }
      if (i === em.length) {
        return null;
      }
      return em.slice(i + 1, em.length);
    }
  }, {
    key: "keyLength",
    get: function get() {
      return this._keyLength;
    }
  }, {
    key: "n",
    get: function get() {
      return this._n;
    }
  }, {
    key: "e",
    get: function get() {
      return this._e;
    }
  }, {
    key: "d",
    get: function get() {
      return this._d;
    }
  }]);
  return RSACipher;
}();
var RSAAESAuthenticationState = exports["default"] = /*#__PURE__*/function (_EventTargetMixin) {
  _inherits(RSAAESAuthenticationState, _EventTargetMixin);
  var _super = _createSuper(RSAAESAuthenticationState);
  function RSAAESAuthenticationState(sock, getCredentials) {
    var _this;
    _classCallCheck(this, RSAAESAuthenticationState);
    _this = _super.call(this);
    _this._hasStarted = false;
    _this._checkSock = null;
    _this._checkCredentials = null;
    _this._approveServerResolve = null;
    _this._sockReject = null;
    _this._credentialsReject = null;
    _this._approveServerReject = null;
    _this._sock = sock;
    _this._getCredentials = getCredentials;
    return _this;
  }
  _createClass(RSAAESAuthenticationState, [{
    key: "_waitSockAsync",
    value: function _waitSockAsync(len) {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        var hasData = function hasData() {
          return !_this2._sock.rQwait('RA2', len);
        };
        if (hasData()) {
          resolve();
        } else {
          _this2._checkSock = function () {
            if (hasData()) {
              resolve();
              _this2._checkSock = null;
              _this2._sockReject = null;
            }
          };
          _this2._sockReject = reject;
        }
      });
    }
  }, {
    key: "_waitApproveKeyAsync",
    value: function _waitApproveKeyAsync() {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        _this3._approveServerResolve = resolve;
        _this3._approveServerReject = reject;
      });
    }
  }, {
    key: "_waitCredentialsAsync",
    value: function _waitCredentialsAsync(subtype) {
      var _this4 = this;
      var hasCredentials = function hasCredentials() {
        if (subtype === 1 && _this4._getCredentials().username !== undefined && _this4._getCredentials().password !== undefined) {
          return true;
        } else if (subtype === 2 && _this4._getCredentials().password !== undefined) {
          return true;
        }
        return false;
      };
      return new Promise(function (resolve, reject) {
        if (hasCredentials()) {
          resolve();
        } else {
          _this4._checkCredentials = function () {
            if (hasCredentials()) {
              resolve();
              _this4._checkCredentials = null;
              _this4._credentialsReject = null;
            }
          };
          _this4._credentialsReject = reject;
        }
      });
    }
  }, {
    key: "checkInternalEvents",
    value: function checkInternalEvents() {
      if (this._checkSock !== null) {
        this._checkSock();
      }
      if (this._checkCredentials !== null) {
        this._checkCredentials();
      }
    }
  }, {
    key: "approveServer",
    value: function approveServer() {
      if (this._approveServerResolve !== null) {
        this._approveServerResolve();
        this._approveServerResolve = null;
      }
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this._sockReject !== null) {
        this._sockReject(new Error("disconnect normally"));
        this._sockReject = null;
      }
      if (this._credentialsReject !== null) {
        this._credentialsReject(new Error("disconnect normally"));
        this._credentialsReject = null;
      }
      if (this._approveServerReject !== null) {
        this._approveServerReject(new Error("disconnect normally"));
        this._approveServerReject = null;
      }
    }
  }, {
    key: "negotiateRA2neAuthAsync",
    value: function () {
      var _negotiateRA2neAuthAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var serverKeyLengthBuffer, serverKeyLength, serverKeyBytes, serverN, serverE, serverRSACipher, serverPublickey, clientKeyLength, clientKeyBytes, clientRSACipher, clientN, clientE, clientPublicKey, clientRandom, clientEncryptedRandom, clientRandomMessage, serverEncryptedRandom, serverRandom, clientSessionKey, serverSessionKey, clientCipher, serverCipher, serverHash, clientHash, serverHashReceived, i, subtype, username, password, credentials, _i3, _i4;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              this._hasStarted = true;
              // 1: Receive server public key
              _context13.next = 3;
              return this._waitSockAsync(4);
            case 3:
              serverKeyLengthBuffer = this._sock.rQslice(0, 4);
              serverKeyLength = this._sock.rQshift32();
              if (!(serverKeyLength < 1024)) {
                _context13.next = 9;
                break;
              }
              throw new Error("RA2: server public key is too short: " + serverKeyLength);
            case 9:
              if (!(serverKeyLength > 8192)) {
                _context13.next = 11;
                break;
              }
              throw new Error("RA2: server public key is too long: " + serverKeyLength);
            case 11:
              serverKeyBytes = Math.ceil(serverKeyLength / 8);
              _context13.next = 14;
              return this._waitSockAsync(serverKeyBytes * 2);
            case 14:
              serverN = this._sock.rQshiftBytes(serverKeyBytes);
              serverE = this._sock.rQshiftBytes(serverKeyBytes);
              serverRSACipher = new RSACipher(serverKeyLength);
              serverRSACipher.setPublicKey(serverN, serverE);
              serverPublickey = new Uint8Array(4 + serverKeyBytes * 2);
              serverPublickey.set(serverKeyLengthBuffer);
              serverPublickey.set(serverN, 4);
              serverPublickey.set(serverE, 4 + serverKeyBytes);

              // verify server public key
              this.dispatchEvent(new CustomEvent("serververification", {
                detail: {
                  type: "RSA",
                  publickey: serverPublickey
                }
              }));
              _context13.next = 25;
              return this._waitApproveKeyAsync();
            case 25:
              // 2: Send client public key
              clientKeyLength = 2048;
              clientKeyBytes = Math.ceil(clientKeyLength / 8);
              clientRSACipher = new RSACipher(clientKeyLength);
              _context13.next = 30;
              return clientRSACipher.generateKey();
            case 30:
              clientN = clientRSACipher.n;
              clientE = clientRSACipher.e;
              clientPublicKey = new Uint8Array(4 + clientKeyBytes * 2);
              clientPublicKey[0] = (clientKeyLength & 0xff000000) >>> 24;
              clientPublicKey[1] = (clientKeyLength & 0xff0000) >>> 16;
              clientPublicKey[2] = (clientKeyLength & 0xff00) >>> 8;
              clientPublicKey[3] = clientKeyLength & 0xff;
              clientPublicKey.set(clientN, 4);
              clientPublicKey.set(clientE, 4 + clientKeyBytes);
              this._sock.send(clientPublicKey);

              // 3: Send client random
              clientRandom = new Uint8Array(16);
              window.crypto.getRandomValues(clientRandom);
              clientEncryptedRandom = serverRSACipher.encrypt(clientRandom);
              clientRandomMessage = new Uint8Array(2 + serverKeyBytes);
              clientRandomMessage[0] = (serverKeyBytes & 0xff00) >>> 8;
              clientRandomMessage[1] = serverKeyBytes & 0xff;
              clientRandomMessage.set(clientEncryptedRandom, 2);
              this._sock.send(clientRandomMessage);

              // 4: Receive server random
              _context13.next = 50;
              return this._waitSockAsync(2);
            case 50:
              if (!(this._sock.rQshift16() !== clientKeyBytes)) {
                _context13.next = 52;
                break;
              }
              throw new Error("RA2: wrong encrypted message length");
            case 52:
              serverEncryptedRandom = this._sock.rQshiftBytes(clientKeyBytes);
              serverRandom = clientRSACipher.decrypt(serverEncryptedRandom);
              if (!(serverRandom === null || serverRandom.length !== 16)) {
                _context13.next = 56;
                break;
              }
              throw new Error("RA2: corrupted server encrypted random");
            case 56:
              // 5: Compute session keys and set ciphers
              clientSessionKey = new Uint8Array(32);
              serverSessionKey = new Uint8Array(32);
              clientSessionKey.set(serverRandom);
              clientSessionKey.set(clientRandom, 16);
              serverSessionKey.set(clientRandom);
              serverSessionKey.set(serverRandom, 16);
              _context13.next = 64;
              return window.crypto.subtle.digest("SHA-1", clientSessionKey);
            case 64:
              clientSessionKey = _context13.sent;
              clientSessionKey = new Uint8Array(clientSessionKey).slice(0, 16);
              _context13.next = 68;
              return window.crypto.subtle.digest("SHA-1", serverSessionKey);
            case 68:
              serverSessionKey = _context13.sent;
              serverSessionKey = new Uint8Array(serverSessionKey).slice(0, 16);
              clientCipher = new RA2Cipher();
              _context13.next = 73;
              return clientCipher.setKey(clientSessionKey);
            case 73:
              serverCipher = new RA2Cipher();
              _context13.next = 76;
              return serverCipher.setKey(serverSessionKey);
            case 76:
              // 6: Compute and exchange hashes
              serverHash = new Uint8Array(8 + serverKeyBytes * 2 + clientKeyBytes * 2);
              clientHash = new Uint8Array(8 + serverKeyBytes * 2 + clientKeyBytes * 2);
              serverHash.set(serverPublickey);
              serverHash.set(clientPublicKey, 4 + serverKeyBytes * 2);
              clientHash.set(clientPublicKey);
              clientHash.set(serverPublickey, 4 + clientKeyBytes * 2);
              _context13.next = 84;
              return window.crypto.subtle.digest("SHA-1", serverHash);
            case 84:
              serverHash = _context13.sent;
              _context13.next = 87;
              return window.crypto.subtle.digest("SHA-1", clientHash);
            case 87:
              clientHash = _context13.sent;
              serverHash = new Uint8Array(serverHash);
              clientHash = new Uint8Array(clientHash);
              _context13.t0 = this._sock;
              _context13.next = 93;
              return clientCipher.makeMessage(clientHash);
            case 93:
              _context13.t1 = _context13.sent;
              _context13.t0.send.call(_context13.t0, _context13.t1);
              _context13.next = 97;
              return this._waitSockAsync(2 + 20 + 16);
            case 97:
              if (!(this._sock.rQshift16() !== 20)) {
                _context13.next = 99;
                break;
              }
              throw new Error("RA2: wrong server hash");
            case 99:
              _context13.next = 101;
              return serverCipher.receiveMessage(20, this._sock.rQshiftBytes(20), this._sock.rQshiftBytes(16));
            case 101:
              serverHashReceived = _context13.sent;
              if (!(serverHashReceived === null)) {
                _context13.next = 104;
                break;
              }
              throw new Error("RA2: failed to authenticate the message");
            case 104:
              i = 0;
            case 105:
              if (!(i < 20)) {
                _context13.next = 111;
                break;
              }
              if (!(serverHashReceived[i] !== serverHash[i])) {
                _context13.next = 108;
                break;
              }
              throw new Error("RA2: wrong server hash");
            case 108:
              i++;
              _context13.next = 105;
              break;
            case 111:
              _context13.next = 113;
              return this._waitSockAsync(2 + 1 + 16);
            case 113:
              if (!(this._sock.rQshift16() !== 1)) {
                _context13.next = 115;
                break;
              }
              throw new Error("RA2: wrong subtype");
            case 115:
              _context13.next = 117;
              return serverCipher.receiveMessage(1, this._sock.rQshiftBytes(1), this._sock.rQshiftBytes(16));
            case 117:
              subtype = _context13.sent;
              if (!(subtype === null)) {
                _context13.next = 120;
                break;
              }
              throw new Error("RA2: failed to authenticate the message");
            case 120:
              subtype = subtype[0];
              if (!(subtype === 1)) {
                _context13.next = 125;
                break;
              }
              if (this._getCredentials().username === undefined || this._getCredentials().password === undefined) {
                this.dispatchEvent(new CustomEvent("credentialsrequired", {
                  detail: {
                    types: ["username", "password"]
                  }
                }));
              }
              _context13.next = 130;
              break;
            case 125:
              if (!(subtype === 2)) {
                _context13.next = 129;
                break;
              }
              if (this._getCredentials().password === undefined) {
                this.dispatchEvent(new CustomEvent("credentialsrequired", {
                  detail: {
                    types: ["password"]
                  }
                }));
              }
              _context13.next = 130;
              break;
            case 129:
              throw new Error("RA2: wrong subtype");
            case 130:
              _context13.next = 132;
              return this._waitCredentialsAsync(subtype);
            case 132:
              if (subtype === 1) {
                username = (0, _strings.encodeUTF8)(this._getCredentials().username).slice(0, 255);
              } else {
                username = "";
              }
              password = (0, _strings.encodeUTF8)(this._getCredentials().password).slice(0, 255);
              credentials = new Uint8Array(username.length + password.length + 2);
              credentials[0] = username.length;
              credentials[username.length + 1] = password.length;
              for (_i3 = 0; _i3 < username.length; _i3++) {
                credentials[_i3 + 1] = username.charCodeAt(_i3);
              }
              for (_i4 = 0; _i4 < password.length; _i4++) {
                credentials[username.length + 2 + _i4] = password.charCodeAt(_i4);
              }
              _context13.t2 = this._sock;
              _context13.next = 142;
              return clientCipher.makeMessage(credentials);
            case 142:
              _context13.t3 = _context13.sent;
              _context13.t2.send.call(_context13.t2, _context13.t3);
            case 144:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function negotiateRA2neAuthAsync() {
        return _negotiateRA2neAuthAsync.apply(this, arguments);
      }
      return negotiateRA2neAuthAsync;
    }()
  }, {
    key: "hasStarted",
    get: function get() {
      return this._hasStarted;
    },
    set: function set(s) {
      this._hasStarted = s;
    }
  }]);
  return RSAAESAuthenticationState;
}(_eventtarget["default"]);