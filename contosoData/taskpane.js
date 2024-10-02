/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/logo-filled.png":
/*!********************************!*\
  !*** ./assets/logo-filled.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/logo-filled.png";

/***/ }),

/***/ "./src/taskpane/taskpane.css":
/*!***********************************!*\
  !*** ./src/taskpane/taskpane.css ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1fda685b81e1123773f6.css";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"taskpane": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/taskpane/taskpane.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillInTableContent: function() { return /* binding */ fillInTableContent; },
/* harmony export */   fillTableContentNoThrow: function() { return /* binding */ fillTableContentNoThrow; },
/* harmony export */   onTickerSelected: function() { return /* binding */ onTickerSelected; },
/* harmony export */   setAutoOpenOn: function() { return /* binding */ setAutoOpenOn; },
/* harmony export */   setAutoOpenOnNoThrow: function() { return /* binding */ setAutoOpenOnNoThrow; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global console, document, Excel, Office */

// The initialize function must be run each time a new page is loaded
Office.onReady(function () {
  document.getElementById("sideload-msg").style.display = "none";
  document.getElementById("app-body").style.display = "flex";
  document.getElementById("run").onclick = fillTableContentNoThrow;
  document.getElementById("auto-open").onclick = setAutoOpenOnNoThrow;
});
function fillTableContentNoThrow() {
  return _fillTableContentNoThrow.apply(this, arguments);
}
function _fillTableContentNoThrow() {
  _fillTableContentNoThrow = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fillInTableContent();
        case 3:
          _context.next = 8;
          break;
        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 5]]);
  }));
  return _fillTableContentNoThrow.apply(this, arguments);
}
function setAutoOpenOnNoThrow() {
  return _setAutoOpenOnNoThrow.apply(this, arguments);
}
function _setAutoOpenOnNoThrow() {
  _setAutoOpenOnNoThrow = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return setAutoOpenOn();
        case 3:
          console.log("Operation Success");
          _context2.next = 9;
          break;
        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 6]]);
  }));
  return _setAutoOpenOnNoThrow.apply(this, arguments);
}
function setAutoOpenOn() {
  return _setAutoOpenOn.apply(this, arguments);
}
function _setAutoOpenOn() {
  _setAutoOpenOn = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", Excel.run(/*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(context) {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    Office.context.document.settings.set("Office.AutoShowTaskpaneWithDocument", true);
                    Office.context.document.settings.saveAsync();
                    _context3.next = 4;
                    return context.sync();
                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x6) {
              return _ref.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _setAutoOpenOn.apply(this, arguments);
}
function fillInTableContent() {
  return _fillInTableContent.apply(this, arguments);
}
function _fillInTableContent() {
  _fillInTableContent = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var currentPriceBaseData, currentForwardedPEBaseData;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          changeBackgroundColorGradually("H2:M11");
          _context6.next = 3;
          return Excel.run(/*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(context) {
              var sheet, rangeNetIncome, valueNetIncome, rangeEPS, valueEPS, rangePERatio, valuePERatio, rangeFrdPE, valueFrdPE, rangeTrgPrice, valueTrgPrice, rangeCPrice, valueCPrice;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    sheet = context.workbook.worksheets.getActiveWorksheet();
                    rangeNetIncome = sheet.getRange("H2:H11");
                    valueNetIncome = [["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"], ["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"], ["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"], ["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"], ["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"], ["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"], ["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"], ["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"], ["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"], ["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"]];
                    rangeNetIncome.values = valueNetIncome;
                    rangeEPS = sheet.getRange("I2:I11");
                    valueEPS = [["=CONTOSO.GETEPS([@[Stock Ticker]])"], ["=CONTOSO.GETEPS([@[Stock Ticker]])"], ["=CONTOSO.GETEPS([@[Stock Ticker]])"], ["=CONTOSO.GETEPS([@[Stock Ticker]])"], ["=CONTOSO.GETEPS([@[Stock Ticker]])"], ["=CONTOSO.GETEPS([@[Stock Ticker]])"], ["=CONTOSO.GETEPS([@[Stock Ticker]])"], ["=CONTOSO.GETEPS([@[Stock Ticker]])"], ["=CONTOSO.GETEPS([@[Stock Ticker]])"], ["=CONTOSO.GETEPS([@[Stock Ticker]])"]];
                    rangeEPS.values = valueEPS;
                    rangePERatio = sheet.getRange("J2:J11");
                    valuePERatio = [["=CONTOSO.GETPERATIO([@[Stock Ticker]])"], ["=CONTOSO.GETPERATIO([@[Stock Ticker]])"], ["=CONTOSO.GETPERATIO([@[Stock Ticker]])"], ["=CONTOSO.GETPERATIO([@[Stock Ticker]])"], ["=CONTOSO.GETPERATIO([@[Stock Ticker]])"], ["=CONTOSO.GETPERATIO([@[Stock Ticker]])"], ["=CONTOSO.GETPERATIO([@[Stock Ticker]])"], ["=CONTOSO.GETPERATIO([@[Stock Ticker]])"], ["=CONTOSO.GETPERATIO([@[Stock Ticker]])"], ["=CONTOSO.GETPERATIO([@[Stock Ticker]])"]];
                    rangePERatio.values = valuePERatio;
                    rangeFrdPE = sheet.getRange("K2:K11");
                    valueFrdPE = [["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"], ["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"], ["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"], ["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"], ["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"], ["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"], ["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"], ["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"], ["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"], ["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"]];
                    rangeFrdPE.values = valueFrdPE;
                    rangeTrgPrice = sheet.getRange("L2:L11");
                    valueTrgPrice = [["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"], ["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"], ["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"], ["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"], ["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"], ["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"], ["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"], ["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"], ["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"], ["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"]];
                    rangeTrgPrice.values = valueTrgPrice;
                    rangeCPrice = sheet.getRange("M2:M11");
                    valueCPrice = [["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"], ["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"], ["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"], ["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"], ["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"], ["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"], ["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"], ["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"], ["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"], ["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"]];
                    rangeCPrice.values = valueCPrice;
                    _context5.next = 21;
                    return context.sync();
                  case 21:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x7) {
              return _ref2.apply(this, arguments);
            };
          }());
        case 3:
          currentPriceBaseData = [116, 238, 191, 163, 435, 217, 561, 88, 228, 226];
          currentForwardedPEBaseData = [34.31, 85, 37, 20, 33, 21, 24, 9, 31, 25];
          _context6.next = 7;
          return addConditionalFormattingForColumn([["$M", currentPriceBaseData], ["$K", currentForwardedPEBaseData]]);
        case 7:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _fillInTableContent.apply(this, arguments);
}
function changeBackgroundColorGradually(_x) {
  return _changeBackgroundColorGradually.apply(this, arguments);
}
function _changeBackgroundColorGradually() {
  _changeBackgroundColorGradually = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(rangeAddress) {
    var steps, interval, interpolateColor, hexToRgb, deepGreen, white, _loop, step;
    return _regeneratorRuntime().wrap(function _callee8$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          hexToRgb = function _hexToRgb(hex) {
            var bigint = parseInt(hex.slice(1), 16);
            return [bigint >> 16 & 255, bigint >> 8 & 255, bigint & 255];
          };
          interpolateColor = function _interpolateColor(color1, color2, factor) {
            var result = color1.slice();
            for (var i = 0; i < 3; i++) {
              result[i] = Math.round(result[i] + factor * (color2[i] - result[i]));
            }
            return result;
          };
          steps = 10; // Number of steps for the transition
          interval = 200; // Interval in milliseconds between each step
          // Function to interpolate between two colors
          // Convert hex color to RGB array
          deepGreen = hexToRgb("#CAEAD8");
          white = hexToRgb("#FFFFFF");
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
            var factor, currentColor, colorHex;
            return _regeneratorRuntime().wrap(function _loop$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  factor = step / steps;
                  currentColor = interpolateColor(deepGreen, white, factor);
                  colorHex = "#".concat(currentColor.map(function (c) {
                    return c.toString(16).padStart(2, "0");
                  }).join(""));
                  _context8.next = 5;
                  return Excel.run(/*#__PURE__*/function () {
                    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(context) {
                      var sheet, range;
                      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                        while (1) switch (_context7.prev = _context7.next) {
                          case 0:
                            sheet = context.workbook.worksheets.getActiveWorksheet();
                            range = sheet.getRange(rangeAddress);
                            range.format.fill.color = colorHex;
                            _context7.next = 5;
                            return context.sync();
                          case 5:
                          case "end":
                            return _context7.stop();
                        }
                      }, _callee7);
                    }));
                    return function (_x8) {
                      return _ref3.apply(this, arguments);
                    };
                  }());
                case 5:
                  _context8.next = 7;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, interval);
                  });
                case 7:
                case "end":
                  return _context8.stop();
              }
            }, _loop);
          });
          step = 0;
        case 8:
          if (!(step <= steps)) {
            _context9.next = 13;
            break;
          }
          return _context9.delegateYield(_loop(), "t0", 10);
        case 10:
          step++;
          _context9.next = 8;
          break;
        case 13:
        case "end":
          return _context9.stop();
      }
    }, _callee8);
  }));
  return _changeBackgroundColorGradually.apply(this, arguments);
}
function addConditionalFormattingForColumn(_x2) {
  return _addConditionalFormattingForColumn.apply(this, arguments);
}
function _addConditionalFormattingForColumn() {
  _addConditionalFormattingForColumn = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(data) {
    return _regeneratorRuntime().wrap(function _callee10$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          return _context11.abrupt("return", Excel.run(/*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(context) {
              var sheet, conditionalFormats, i, j, column, rangeStr, range, conditionalFormat, x, y, base, _conditionalFormat, iconSetCF;
              return _regeneratorRuntime().wrap(function _callee9$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    sheet = context.workbook.worksheets.getActiveWorksheet();
                    conditionalFormats = [];
                    for (i = 0; i < data.length; i++) {
                      conditionalFormats[i] = [];
                      for (j = 0; j < data[i][1].length; j++) {
                        column = data[i][0];
                        rangeStr = column + "$" + (j + 2);
                        range = sheet.getRange(rangeStr);
                        range.conditionalFormats.clearAll();
                        conditionalFormat = range.conditionalFormats.add(Excel.ConditionalFormatType.iconSet);
                        conditionalFormat.load("iconSet");
                        conditionalFormats[i][j] = conditionalFormat;
                      }
                    }
                    _context10.next = 5;
                    return context.sync();
                  case 5:
                    for (x = 0; x < data.length; x++) {
                      for (y = 0; y < data[x][1].length; y++) {
                        base = data[x][1][y];
                        _conditionalFormat = conditionalFormats[x][y];
                        iconSetCF = _conditionalFormat.iconSet;
                        iconSetCF.style = Excel.IconSet.threeTriangles;
                        iconSetCF.criteria = [{}, {
                          type: Excel.ConditionalFormatIconRuleType.number,
                          operator: Excel.ConditionalIconCriterionOperator.greaterThanOrEqual,
                          formula: "=" + base
                        }, {
                          type: Excel.ConditionalFormatIconRuleType.number,
                          operator: Excel.ConditionalIconCriterionOperator.greaterThanOrEqual,
                          formula: "=" + Math.ceil(base * 1.1)
                        }];
                      }
                    }
                    _context10.next = 8;
                    return context.sync();
                  case 8:
                  case "end":
                    return _context10.stop();
                }
              }, _callee9);
            }));
            return function (_x9) {
              return _ref4.apply(this, arguments);
            };
          }()).catch(function (error) {
            console.log(error);
          }));
        case 1:
        case "end":
          return _context11.stop();
      }
    }, _callee10);
  }));
  return _addConditionalFormattingForColumn.apply(this, arguments);
}
function onTickerSelected(_x3, _x4, _x5) {
  return _onTickerSelected.apply(this, arguments);
}
function _onTickerSelected() {
  _onTickerSelected = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(context, stockTickerColumnIndex, address) {
    var currentSheet, range, anchor;
    return _regeneratorRuntime().wrap(function _callee11$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          currentSheet = context.workbook.worksheets.getActiveWorksheet();
          range = context.workbook.getSelectedRange();
          range.load(["columnIndex", "rowIndex", "values"]);
          _context12.next = 5;
          return context.sync();
        case 5:
          if (!(range.columnIndex === stockTickerColumnIndex && range.rowIndex <= 3 && range.rowIndex > 0)) {
            _context12.next = 11;
            break;
          }
          // Step 5: Trigger the event if the condition is met
          console.log("Stock ticker cell activated: ", range.values[0][0]);
          anchor = currentSheet.getRange("B15");
          anchor.values = [["=".concat(address)]];
          _context12.next = 11;
          return context.sync();
        case 11:
        case "end":
          return _context12.stop();
      }
    }, _callee11);
  }));
  return _onTickerSelected.apply(this, arguments);
}
}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!************************************!*\
  !*** ./src/taskpane/taskpane.html ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./taskpane.css */ "./src/taskpane/taskpane.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/logo-filled.png */ "./assets/logo-filled.png"), __webpack_require__.b);
// Module
var code = "<!-- Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT License. -->\n<!-- This file shows how to design a first-run page that provides a welcome screen to the user about the features of the add-in. -->\n\n<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <title>Contoso Task Pane Add-in</title>\n\n    <!-- Office JavaScript API -->\n    <" + "script type=\"text/javascript\" src=\"https://appsforoffice.microsoft.com/lib/1.1/hosted/office.js\"><" + "/script>\n\n    <!-- For more information on Fluent UI, visit https://developer.microsoft.com/fluentui#/. -->\n    <link rel=\"stylesheet\" href=\"https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css\"/>\n\n    <!-- Template styles -->\n    <link href=\"" + ___HTML_LOADER_IMPORT_0___ + "\" rel=\"stylesheet\" type=\"text/css\" />\n</head>\n\n<body class=\"ms-font-m ms-welcome ms-Fabric\">\n    <header class=\"ms-welcome__header ms-bgColor-neutralLighter\">\n        <img width=\"90\" height=\"90\" src=\"" + ___HTML_LOADER_IMPORT_1___ + "\" alt=\"Contoso\" title=\"Contoso\" />\n        <h1 class=\"ms-font-su\">Welcome</h1>\n    </header>\n    <section id=\"sideload-msg\" class=\"ms-welcome__main\">\n        <h2 class=\"ms-font-xl\">Please <a target=\"_blank\" href=\"https://learn.microsoft.com/office/dev/add-ins/testing/test-debug-office-add-ins#sideload-an-office-add-in-for-testing\">sideload</a> your add-in to see app body.</h2>\n    </section>\n    <main id=\"app-body\" class=\"ms-welcome__main\" style=\"display: none;\">\n        <h2 class=\"ms-font-xl\"> Discover what Office Add-ins can do for you today! </h2>\n        <ul class=\"ms-List ms-welcome__features\">\n            <li class=\"ms-ListItem\">\n                <i class=\"ms-Icon ms-Icon--Ribbon ms-font-xl\"></i>\n                <span class=\"ms-font-m\">Achieve more with Office integration</span>\n            </li>\n            <li class=\"ms-ListItem\">\n                <i class=\"ms-Icon ms-Icon--Unlock ms-font-xl\"></i>\n                <span class=\"ms-font-m\">Unlock features and functionality</span>\n            </li>\n            <li class=\"ms-ListItem\">\n                <i class=\"ms-Icon ms-Icon--Design ms-font-xl\"></i>\n                <span class=\"ms-font-m\">Create and visualize like a pro</span>\n            </li>\n        </ul>\n        <p class=\"ms-font-l\">Modify the source files, then click <b>Run</b>.</p>\n        <div role=\"button\" id=\"run\" class=\"ms-welcome__action ms-Button ms-Button--hero ms-font-xl\">\n            <span class=\"ms-Button-label\">Run</span>\n        </div>\n        <div role=\"button\" id=\"auto-open\" class=\"ms-welcome__action ms-Button ms-Button--hero ms-font-xl\">\n            <span class=\"ms-Button-label\">Set auto open true</span>\n        </div>\n        <p><label id=\"item-subject\"></label></p>\n    </main>\n</body>\n\n</html>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);
}();
/******/ })()
;
//# sourceMappingURL=taskpane.js.map