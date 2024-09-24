/******/ (function() { // webpackBootstrap
/*!************************************!*\
  !*** ./src/functions/functions.js ***!
  \************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* eslint-disable @typescript-eslint/no-unused-vars */
/* global clearInterval, console, setInterval */

/**
 * Get net income (ttm) using given stock ticker
 * @customfunction
 * @param {string} The stock ticker
 * @returns {string} The net income (ttm)
 */
function getNetIncome(ticker) {
  var normalizedTicker = ticker.toLowerCase();
  if (normalizedTicker == "nvda") {
    return "53.10B";
  } else if (normalizedTicker == "tsla") {
    return "12.39B";
  } else if (normalizedTicker == "amzn") {
    return "44.42B";
  } else if (normalizedTicker == "googl") {
    return "87.66B";
  } else if (normalizedTicker == "msft") {
    return "88.14B";
  } else if (normalizedTicker == "ibm") {
    return "8.43B";
  } else if (normalizedTicker == "meta") {
    return "51.43B";
  } else if (normalizedTicker == "baba") {
    return "9.59B";
  } else if (normalizedTicker == "aapl") {
    return "101.96B";
  } else if (normalizedTicker == "crm") {
    return "5.63B";
  }
  throw "Unknow stock ticker";
}

/**
 * Get EPS (ttm) using given stock ticker
 * @customfunction
 * @param {string} The stock ticker
 * @returns {number} The EPS (ttm)
 */
function getEPS(ticker) {
  var normalizedTicker = ticker.toLowerCase();
  if (normalizedTicker == "nvda") {
    return 2.13;
  } else if (normalizedTicker == "tsla") {
    return 3.56;
  } else if (normalizedTicker == "amzn") {
    return 4.18;
  } else if (normalizedTicker == "googl") {
    return 6.97;
  } else if (normalizedTicker == "msft") {
    return 11.8;
  } else if (normalizedTicker == "ibm") {
    return 9.07;
  } else if (normalizedTicker == "meta") {
    return 19.51;
  } else if (normalizedTicker == "baba") {
    return 3.8;
  } else if (normalizedTicker == "aapl") {
    return 6.57;
  } else if (normalizedTicker == "crm") {
    return 5.74;
  }
  throw "Unknow stock ticker";
}

/**
 * Get PE Ratio using given stock ticker
 * @customfunction
 * @param {string} The stock ticker
 * @returns {number} The PE Ratio
 */
function getPERatio(ticker) {
  var normalizedTicker = ticker.toLowerCase();
  if (normalizedTicker == "nvda") {
    return 54.39;
  } else if (normalizedTicker == "tsla") {
    return 66.98;
  } else if (normalizedTicker == "amzn") {
    return 45.81;
  } else if (normalizedTicker == "googl") {
    return 23.48;
  } else if (normalizedTicker == "msft") {
    return 36.89;
  } else if (normalizedTicker == "ibm") {
    return 24.08;
  } else if (normalizedTicker == "meta") {
    return 28.78;
  } else if (normalizedTicker == "baba") {
    return 23.21;
  } else if (normalizedTicker == "aapl") {
    return 34.75;
  } else if (normalizedTicker == "crm") {
    return 46.45;
  }
  throw "Unknow stock ticker";
}

/**
 * Get Forward P/E using given stock ticker
 * @customfunction
 * @param {string} The stock ticker
 * @param {CustomFunctions.StreamingInvocation<string>} invocation Custom function invocation
 */
function getForwardPE(_x, _x2) {
  return _getForwardPE.apply(this, arguments);
}
/**
 * Get predicted target price using given stock ticker
 * @customfunction
 * @param {string} The stock ticker
 * @param {CustomFunctions.StreamingInvocation<string>} invocation Custom function invocation
 */
function _getForwardPE() {
  _getForwardPE = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ticker, invocation) {
    var refreshInterval, openningPE, normalizedTicker, currentPE, timer;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          refreshInterval = 3000;
          normalizedTicker = ticker.toLowerCase();
          if (!(normalizedTicker == "nvda")) {
            _context2.next = 6;
            break;
          }
          openningPE = 34.31;
          _context2.next = 43;
          break;
        case 6:
          if (!(normalizedTicker == "tsla")) {
            _context2.next = 10;
            break;
          }
          openningPE = 85.06;
          _context2.next = 43;
          break;
        case 10:
          if (!(normalizedTicker == "amzn")) {
            _context2.next = 14;
            break;
          }
          openningPE = 37.11;
          _context2.next = 43;
          break;
        case 14:
          if (!(normalizedTicker == "googl")) {
            _context2.next = 18;
            break;
          }
          openningPE = 20.37;
          _context2.next = 43;
          break;
        case 18:
          if (!(normalizedTicker == "msft")) {
            _context2.next = 22;
            break;
          }
          openningPE = 33.08;
          _context2.next = 43;
          break;
        case 22:
          if (!(normalizedTicker == "ibm")) {
            _context2.next = 26;
            break;
          }
          openningPE = 21.5;
          _context2.next = 43;
          break;
        case 26:
          if (!(normalizedTicker == "meta")) {
            _context2.next = 30;
            break;
          }
          openningPE = 24.82;
          _context2.next = 43;
          break;
        case 30:
          if (!(normalizedTicker == "baba")) {
            _context2.next = 34;
            break;
          }
          openningPE = 9.74;
          _context2.next = 43;
          break;
        case 34:
          if (!(normalizedTicker == "aapl")) {
            _context2.next = 38;
            break;
          }
          openningPE = 31.53;
          _context2.next = 43;
          break;
        case 38:
          if (!(normalizedTicker == "crm")) {
            _context2.next = 42;
            break;
          }
          openningPE = 25.48;
          _context2.next = 43;
          break;
        case 42:
          throw "Unknown stock ticker";
        case 43:
          currentPE = openningPE;
          timer = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var isGrow, delta;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(Math.random() <= 0.8)) {
                    _context.next = 3;
                    break;
                  }
                  invocation.setResult(parseFloat(currentPE.toFixed(2)));
                  return _context.abrupt("return");
                case 3:
                  isGrow = Math.random() >= 0.5;
                  delta = Math.random() * currentPE / 100;
                  if (isGrow) {
                    currentPE = currentPE + delta;
                  } else {
                    currentPE = currentPE - delta;
                  }
                  _context.next = 8;
                  return sleepRandomly(1);
                case 8:
                  invocation.setResult(parseFloat(currentPE.toFixed(2)));
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })), refreshInterval);
          invocation.onCanceled = function () {
            clearInterval(timer);
          };
        case 46:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getForwardPE.apply(this, arguments);
}
function geTargetPrice(_x3, _x4) {
  return _geTargetPrice.apply(this, arguments);
}
/**
 * Get operation suggestion using given symbols of a stock
 * @customfunction
 * @param {string} The stock ticker
 * @param {string} The Net Incomes
 * @param {number} The EPS
 * @param {number} The PE ratio
 * @param {number} The forwarded P/E
 * @returns {string} The operation suggestion
 */
function _geTargetPrice() {
  _geTargetPrice = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(ticker, invocation) {
    var refreshInterval, openningPrice, normalizedTicker, currentTarget, timer;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          refreshInterval = 3000;
          openningPrice = undefined;
          normalizedTicker = ticker.toLowerCase();
          if (!(normalizedTicker == "nvda")) {
            _context4.next = 7;
            break;
          }
          openningPrice = 144.79;
          _context4.next = 44;
          break;
        case 7:
          if (!(normalizedTicker == "tsla")) {
            _context4.next = 11;
            break;
          }
          openningPrice = 207.51;
          _context4.next = 44;
          break;
        case 11:
          if (!(normalizedTicker == "amzn")) {
            _context4.next = 15;
            break;
          }
          openningPrice = 220.59;
          _context4.next = 44;
          break;
        case 15:
          if (!(normalizedTicker == "googl")) {
            _context4.next = 19;
            break;
          }
          openningPrice = 198.03;
          _context4.next = 44;
          break;
        case 19:
          if (!(normalizedTicker == "msft")) {
            _context4.next = 23;
            break;
          }
          openningPrice = 493.97;
          _context4.next = 44;
          break;
        case 23:
          if (!(normalizedTicker == "ibm")) {
            _context4.next = 27;
            break;
          }
          openningPrice = 187.79;
          _context4.next = 44;
          break;
        case 27:
          if (!(normalizedTicker == "meta")) {
            _context4.next = 31;
            break;
          }
          openningPrice = 569.05;
          _context4.next = 44;
          break;
        case 31:
          if (!(normalizedTicker == "baba")) {
            _context4.next = 35;
            break;
          }
          openningPrice = 105.9;
          _context4.next = 44;
          break;
        case 35:
          if (!(normalizedTicker == "aapl")) {
            _context4.next = 39;
            break;
          }
          openningPrice = 242.21;
          _context4.next = 44;
          break;
        case 39:
          if (!(normalizedTicker == "crm")) {
            _context4.next = 43;
            break;
          }
          openningPrice = 306;
          _context4.next = 44;
          break;
        case 43:
          throw "Unknow stock ticker";
        case 44:
          currentTarget = openningPrice;
          timer = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var isGrow, delta;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(Math.random() <= 0.8)) {
                    _context3.next = 3;
                    break;
                  }
                  invocation.setResult(parseFloat(currentTarget.toFixed(2)));
                  return _context3.abrupt("return");
                case 3:
                  isGrow = Math.random() >= 0.5;
                  delta = Math.random() * currentTarget / 500;
                  if (isGrow) {
                    currentTarget = currentTarget + delta;
                  } else {
                    currentTarget = currentTarget - delta;
                  }
                  _context3.next = 8;
                  return sleepRandomly(1);
                case 8:
                  invocation.setResult(parseFloat(currentTarget.toFixed(2)));
                case 9:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })), refreshInterval);
          invocation.onCanceled = function () {
            clearInterval(timer);
          };
        case 47:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _geTargetPrice.apply(this, arguments);
}
function getOperationSuggestion(ticker, netInComes, eps, peRatio, forwardedPE) {
  var normalizedTicker = ticker.toLowerCase();
  if (normalizedTicker == "nvda") {
    return "Strong Buy";
  } else if (normalizedTicker == "tsla") {
    return "Hold";
  } else if (normalizedTicker == "amzn") {
    return "Strong Buy";
  } else if (normalizedTicker == "googl") {
    return "Buy";
  } else if (normalizedTicker == "msft") {
    return "Strong Buy";
  } else if (normalizedTicker == "ibm") {
    return "Hold";
  } else if (normalizedTicker == "meta") {
    return "Strong Buy";
  } else if (normalizedTicker == "baba") {
    return "Strong Buy";
  } else if (normalizedTicker == "aapl") {
    return "Buy";
  } else if (normalizedTicker == "crm") {
    return "Buy";
  }
  throw "Unknow stock ticker";
}

/**
 * Get revenue history using given stock ticker
 * @customfunction
 * @param {string} The stock ticker
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} The revenue history
 */
function getRevenueHistory(_x5, _x6) {
  return _getRevenueHistory.apply(this, arguments);
}
/**
 * Get revenue history using given stock ticker
 * @customfunction
 * @param {string} The stock ticker
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} The revenue history
 */
function _getRevenueHistory() {
  _getRevenueHistory = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(ticker, invocation) {
    var address, normalizedTicker, revenues;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          address = invocation.address;
          normalizedTicker = ticker.toLowerCase();
          revenues = undefined;
          if (normalizedTicker == "nvda") {
            revenues = [["Quarter Ended", "Revenue (B)", "Change (B)", "Growth"], ["07/28/2024", "30.04", "16.53", "122.40%"], ["04/28/2024", "26.04", "18.85", "262.12%"], ["01/28/2024", "22.10", "16.05", "265.28%"], ["10/29/2023", "18.12", "12.19", "205.51%"], ["07/30/2023", "13.51", "6.80", "101.48%"], ["04/30/2023", "7.19", "-1.10", "-13.22%"], ["01/29/2023", "6.05", "-1.59", "-20.83%"], ["10/30/2022", "5.93", "-1.17", "-16.50%"], ["07/31/2022", "6.70", "0.197", "3.03%"], ["05/01/2022", "8.29", "2.63", "46.41%"], ["01/30/2022", "7.64", "2.64", "52.77%"], ["10/31/2021", "7.10", "2.38", "50.30%"], ["08/01/2021", "6.51", "2.64", "68.31%"], ["05/02/2021", "5.66", "2.58", "83.80%"], ["01/31/2021", "5.00", "1.90", "61.13%"], ["10/25/2020", "4.73", "1.71", "56.80%"], ["07/26/2020", "3.87", "1.29", "49.90%"], ["04/26/2020", "3.08", "0.860", "38.74%"], ["01/26/2020", "3.11", "0.9", "40.82%"], ["10/27/2019", "3.01", "-0.167", "-5.25%"]];
          } else if (normalizedTicker == "tsla") {
            revenues = [["Quarter Ended", "Revenue (B)", "Change (B)", "Growth"], ["06/30/2024", "25.50", "0.573", "2.30%"], ["03/31/2024", "21.30", "-2.03", "-8.69%"], ["12/31/2023", "25.17", "0.849", "3.49%"], ["09/30/2023", "23.35", "1.90", "8.84%"], ["06/30/2023", "24.93", "7.99", "47.20%"], ["03/31/2023", "23.33", "4.57", "24.38%"], ["12/31/2022", "24.32", "6.60", "37.24%"], ["09/30/2022", "21.45", "7.70", "55.95%"], ["06/30/2022", "16.93", "4.98", "41.61%"], ["03/31/2022", "18.76", "8.37", "80.54%"], ["12/31/2021", "17.72", "6.98", "64.92%"], ["09/30/2021", "13.76", "4.99", "56.85%"], ["06/30/2021", "11.96", "5.92", "98.11%"], ["03/31/2021", "10.39", "4.40", "73.58%"], ["12/31/2020", "10.74", "3.36", "45.50%"], ["09/30/2020", "8.77", "2.47", "39.16%"], ["06/30/2020", "6.04", "-0.314", "-4.94%"], ["03/31/2020", "5.99", "1.44", "31.80%"], ["12/31/2019", "7.38", "0.158", "2.19%"], ["09/30/2019", "6.30", "-0.521", "-7.63%"]];
          } else if (normalizedTicker == "amzn") {
            revenues = [["Quarter Ended", "Revenue (B)", "Change (B)", "Growth"], ["06/30/2024", "147.98", "13.59", "10.12%"], ["03/31/2024", "143.31", "15.96", "12.53%"], ["12/31/2023", "169.96", "20.76", "13.91%"], ["09/30/2023", "143.08", "15.98", "12.57%"], ["06/30/2023", "134.38", "13.15", "10.85%"], ["03/31/2023", "127.36", "10.91", "9.37%"], ["12/31/2022", "149.20", "11.79", "8.58%"], ["09/30/2022", "127.10", "16.29", "14.70%"], ["06/30/2022", "121.23", "8.15", "7.21%"], ["03/31/2022", "116.44", "7.93", "7.30%"], ["12/31/2021", "137.41", "11.86", "9.44%"], ["09/30/2021", "110.81", "14.67", "15.26%"], ["06/30/2021", "113.08", "24.17", "27.18%"], ["03/31/2021", "108.52", "33.07", "43.82%"], ["12/31/2020", "125.56", "38.12", "43.60%"], ["09/30/2020", "96.15", "26.16", "37.39%"], ["06/30/2020", "88.91", "25.51", "40.23%"], ["03/31/2020", "75.45", "15.75", "26.39%"], ["12/31/2019", "87.44", "15.05", "20.80%"], ["09/30/2019", "69.98", "13.41", "23.69%"]];
          }
          if (revenues) {
            _context5.next = 6;
            break;
          }
          throw "Unknow stock ticker";
        case 6:
          _context5.next = 8;
          return sleepRandomly(2, 0.5);
        case 8:
          return _context5.abrupt("return", revenues);
        case 9:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _getRevenueHistory.apply(this, arguments);
}
function getMarketCapHistory(_x7, _x8) {
  return _getMarketCapHistory.apply(this, arguments);
}
/**
 * Displays the current stock price in every 1 second
 * @customfunction
 * @param {string} The stock ticker
 * @param {CustomFunctions.StreamingInvocation<string>} invocation Custom function invocation
 */
function _getMarketCapHistory() {
  _getMarketCapHistory = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(ticker, invocation) {
    var address, marketCapData, normalizedTicker;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          address = invocation.address;
          marketCapData = undefined;
          normalizedTicker = ticker.toLowerCase();
          if (normalizedTicker == "nvda") {
            marketCapData = [["Date", "Market Cap (B)", "Change"], ["09/30/2024", "2,010.95", "-0.01%"], ["06/30/2024", "2,011.08", "7.33%"], ["03/31/2024", "1,873.68", "19.33%"], ["12/31/2023", "1,570.15", "19.71%"], ["09/30/2023", "1,311.59", "-1.94%"], ["06/30/2023", "1,337.54", "26.37%"], ["03/31/2023", "1,058.44", "23.51%"], ["12/31/2022", "856.94", "-25.56%"], ["09/30/2022", "1,151.19", "6.53%"], ["06/30/2022", "1,080.62", "-34.86%"], ["03/31/2022", "1,658.81", "-1.90%"], ["12/31/2021", "1,691.00", "1.64%"], ["09/30/2021", "1,663.68", "-4.11%"], ["06/30/2021", "1,734.95", "11.35%"], ["03/31/2021", "1,558.07", "-4.66%"], ["12/31/2020", "1,634.16", "3.61%"], ["09/30/2020", "1,577.16", "14.62%"], ["06/30/2020", "1,376.03", "41.77%"], ["03/31/2020", "970.59", "5.94%"], ["12/31/2019", "916.15", "6.69%"]];
          } else if (normalizedTicker == "tsla") {
            marketCapData = [["Date", "Market Cap (B)", "Change"], ["09/30/2024", "761.12", "20.61%"], ["06/30/2024", "631.08", "12.72%"], ["03/31/2024", "559.85", "-29.12%"], ["12/31/2023", "789.90", "-0.54%"], ["09/30/2023", "794.20", "-4.28%"], ["06/30/2023", "829.68", "26.39%"], ["03/31/2023", "656.42", "68.76%"], ["12/31/2022", "388.97", "-53.20%"], ["09/30/2022", "831.15", "19.13%"], ["06/30/2022", "697.67", "-37.36%"], ["03/31/2022", "1,113.71", "4.94%"], ["12/31/2021", "1,061.29", "38.24%"], ["09/30/2021", "767.74", "17.25%"], ["06/30/2021", "654.78", "2.13%"], ["03/31/2021", "641.11", "-4.15%"], ["12/31/2020", "668.90", "67.33%"], ["09/30/2020", "399.75", "99.71%"], ["06/30/2020", "200.16", "110.65%"], ["03/31/2020", "95.02", "26.02%"], ["12/31/2019", "75.40", "74.76%"]];
          } else if (normalizedTicker == "amzn") {
            marketCapData = [["Date", "Market Cap (B)", "Change"], ["09/30/2024", "2,010.95", "-0.01%"], ["06/30/2024", "2,011.08", "7.33%"], ["03/31/2024", "1,873.68", "19.33%"], ["12/31/2023", "1,570.15", "19.71%"], ["09/30/2023", "1,311.59", "-1.94%"], ["06/30/2023", "1,337.54", "26.37%"], ["03/31/2023", "1,058.44", "23.51%"], ["12/31/2022", "856.94", "-25.56%"], ["09/30/2022", "1,151.19", "6.53%"], ["06/30/2022", "1,080.62", "-34.86%"], ["03/31/2022", "1,658.81", "-1.90%"], ["12/31/2021", "1,691.00", "1.64%"], ["09/30/2021", "1,663.68", "-4.11%"], ["06/30/2021", "1,734.95", "11.35%"], ["03/31/2021", "1,558.07", "-4.66%"], ["12/31/2020", "1,634.16", "3.61%"], ["09/30/2020", "1,577.16", "14.62%"], ["06/30/2020", "1,376.03", "41.77%"], ["03/31/2020", "970.59", "5.94%"], ["12/31/2019", "916.15", "6.69%"]];
          }
          if (marketCapData) {
            _context6.next = 6;
            break;
          }
          throw "Unknow stock ticker";
        case 6:
          _context6.next = 8;
          return sleepRandomly(2, 0.5);
        case 8:
          return _context6.abrupt("return", marketCapData);
        case 9:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _getMarketCapHistory.apply(this, arguments);
}
function getCurrentPrice(ticker, invocation) {
  var refreshInterval = 1000;
  var openningPrice = 0;
  var normalizedTicker = ticker.toLowerCase();
  if (normalizedTicker == "nvda") {
    openningPrice = 116;
  } else if (normalizedTicker == "tsla") {
    openningPrice = 238.25;
  } else if (normalizedTicker == "amzn") {
    openningPrice = 191.6;
  } else if (normalizedTicker == "googl") {
    openningPrice = 163.59;
  } else if (normalizedTicker == "msft") {
    openningPrice = 435.27;
  } else if (normalizedTicker == "ibm") {
    openningPrice = 217.7;
  } else if (normalizedTicker == "meta") {
    openningPrice = 561.35;
  } else if (normalizedTicker == "baba") {
    openningPrice = 88.29;
  } else if (normalizedTicker == "aapl") {
    openningPrice = 228.2;
  } else if (normalizedTicker == "crm") {
    openningPrice = 266.8;
  } else {
    throw "Unknow stock ticker";
  }
  var currentPrice = openningPrice;
  var timer = setInterval(function () {
    var isGrow = Math.random() >= 0.5;
    var delta = Math.random() * currentPrice / 100;
    if (isGrow) {
      currentPrice = currentPrice + delta;
    } else {
      currentPrice = currentPrice - delta;
    }
    invocation.setResult(parseFloat(currentPrice.toFixed(2)));
  }, refreshInterval);
  invocation.onCanceled = function () {
    clearInterval(timer);
  };
}
function sleepRandomly(_x9, _x10) {
  return _sleepRandomly.apply(this, arguments);
}
function _sleepRandomly() {
  _sleepRandomly = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(prefer, min) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          if (!prefer) {
            prefer = 3;
          }
          if (!min) {
            min = 0.5;
          }
          return _context7.abrupt("return", new Promise(function (resolver) {
            var timeSpan = Math.max(min, Math.random() * prefer);
            window.setTimeout(function () {
              resolver();
            }, timeSpan * 1000);
          }));
        case 3:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _sleepRandomly.apply(this, arguments);
}
CustomFunctions.associate("GETNETINCOME", getNetIncome);
CustomFunctions.associate("GETEPS", getEPS);
CustomFunctions.associate("GETPERATIO", getPERatio);
CustomFunctions.associate("GETFORWARDPE", getForwardPE);
CustomFunctions.associate("GETARGETPRICE", geTargetPrice);
CustomFunctions.associate("GETOPERATIONSUGGESTION", getOperationSuggestion);
CustomFunctions.associate("GETREVENUEHISTORY", getRevenueHistory);
CustomFunctions.associate("GETMARKETCAPHISTORY", getMarketCapHistory);
CustomFunctions.associate("GETCURRENTPRICE", getCurrentPrice);
/******/ })()
;
//# sourceMappingURL=functions.js.map