(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.GooglePay = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.PayPalAlternativePaymentMethodLoader = _exports.GooglePayHandler = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
  function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var AlternativeBaseHandler = /*#__PURE__*/function () {
    function AlternativeBaseHandler(payPalSDK, jsShoppingCart, baseDocument) {
      _classCallCheck(this, AlternativeBaseHandler);
      _defineProperty(this, "jsShoppingCart", null);
      _defineProperty(this, "baseDocument", null);
      _defineProperty(this, "payPalSDK", null);
      this.payPalSDK = payPalSDK;
      this.jsShoppingCart = jsShoppingCart;
      this.baseDocument = baseDocument;
    }
    /**
     *
     * @param {string} url
     * @param {array} data
     * @returns {Promise<any>}
     */
    return _createClass(AlternativeBaseHandler, [{
      key: "createPaypalOrder",
      value: (function () {
        var _createPaypalOrder = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
          var data,
            responseOrder,
            _args = arguments;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                data = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
                _context.next = 3;
                return fetch(url, {
                  method: 'post',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
                });
              case 3:
                responseOrder = _context.sent;
                return _context.abrupt("return", responseOrder.json());
              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function createPaypalOrder(_x) {
          return _createPaypalOrder.apply(this, arguments);
        }
        return createPaypalOrder;
      }())
    }]);
  }();
  var GooglePayHandler = _exports.GooglePayHandler = /*#__PURE__*/function (_AlternativeBaseHandl) {
    function GooglePayHandler(googlePaySDK, payPalSDK, jsShoppingCart, baseDocument) {
      var _this;
      _classCallCheck(this, GooglePayHandler);
      _this = _callSuper(this, GooglePayHandler, [payPalSDK, jsShoppingCart, baseDocument]);
      /**
       * An initialized google.payments.api.PaymentsClient object or null if not yet set
       * An initialized paypal.Googlepay().config() response object or null if not yet set
       *
       * @see {@link getGooglePaymentsClient}
       */
      _defineProperty(_this, "let", void 0);
      _defineProperty(_this, "paymentsClient", null);
      _defineProperty(_this, "googlePayConfig", null);
      _defineProperty(_this, "googlePaySDK", null);
      _defineProperty(_this, "googlePayButton", null);
      _defineProperty(_this, "const", void 0);
      _defineProperty(_this, "GOOGLE_PAY_BUTTON_BLOCK_ID", 'paypal-google-button-container');
      _this.googlePaySDK = googlePaySDK;
      return _this;
    }

    /**
     *
     * @returns Fetch the Google Pay Config From PayPal
     */
    _inherits(GooglePayHandler, _AlternativeBaseHandl);
    return _createClass(GooglePayHandler, [{
      key: "getGooglePayConfig",
      value: (function () {
        var _getGooglePayConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.googlePayConfig === null)) {
                  _context2.next = 4;
                  break;
                }
                _context2.next = 3;
                return this.payPalSDK.Googlepay().config();
              case 3:
                this.googlePayConfig = _context2.sent;
              case 4:
                return _context2.abrupt("return", this.googlePayConfig);
              case 5:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
        function getGooglePayConfig() {
          return _getGooglePayConfig.apply(this, arguments);
        }
        return getGooglePayConfig;
      }()
      /**
       * Configure support for the Google Pay API
       *
       * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#PaymentDataRequest|PaymentDataRequest}
       * @returns {object} PaymentDataRequest fields
       */
      )
    }, {
      key: "getGooglePaymentDataRequest",
      value: (function () {
        var _getGooglePaymentDataRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var _yield$this$getGoogle, allowedPaymentMethods, merchantInfo, apiVersion, apiVersionMinor, countryCode, baseRequest, paymentDataRequest;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getGooglePayConfig();
              case 2:
                _yield$this$getGoogle = _context3.sent;
                allowedPaymentMethods = _yield$this$getGoogle.allowedPaymentMethods;
                merchantInfo = _yield$this$getGoogle.merchantInfo;
                apiVersion = _yield$this$getGoogle.apiVersion;
                apiVersionMinor = _yield$this$getGoogle.apiVersionMinor;
                countryCode = _yield$this$getGoogle.countryCode;
                baseRequest = {
                  apiVersion: apiVersion,
                  apiVersionMinor: apiVersionMinor
                };
                paymentDataRequest = Object.assign({}, baseRequest);
                paymentDataRequest.allowedPaymentMethods = allowedPaymentMethods;
                paymentDataRequest.transactionInfo = this.getGoogleTransactionInfo(countryCode);
                paymentDataRequest.merchantInfo = merchantInfo;
                paymentDataRequest.callbackIntents = ["PAYMENT_AUTHORIZATION"];
                return _context3.abrupt("return", paymentDataRequest);
              case 15:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this);
        }));
        function getGooglePaymentDataRequest() {
          return _getGooglePaymentDataRequest.apply(this, arguments);
        }
        return getGooglePaymentDataRequest;
      }()
      /**
       * Handles authorize payments callback intents.
       *
       * @param {object} paymentData response from Google Pay API after a payer approves payment through user gesture.
       * @see {@link https://developers.google.com/pay/api/web/reference/response-objects#PaymentData object reference}
       *
       * @see {@link https://developers.google.com/pay/api/web/reference/response-objects#PaymentAuthorizationResult}
       * @returns Promise<{object}> Promise of PaymentAuthorizationResult object to acknowledge the payment authorization status.
       */
      )
    }, {
      key: "onPaymentAuthorized",
      value: function onPaymentAuthorized(paymentData) {
        var _this2 = this;
        this.processPayment(paymentData).then(function (result) {
          console.log(result);
        })["catch"](function (error) {
          console.log(error);
          _this2.handleLockOrUnlockGooglePayButton('unlock');
        });
      }

      /**
       * Return an active PaymentsClient or initialize
       *
       * @see {@link https://developers.google.com/pay/api/web/reference/client#PaymentsClient|PaymentsClient constructor}
       * @returns {google.payments.api.PaymentsClient} Google Pay API client
       */
    }, {
      key: "getGooglePaymentsClient",
      value: function getGooglePaymentsClient() {
        var _this3 = this;
        if (this.paymentsClient === null) {
          this.paymentsClient = new this.googlePaySDK.payments.api.PaymentsClient({
            environment: 'TEST',
            paymentDataCallbacks: {
              onPaymentAuthorized: function onPaymentAuthorized(paymentData) {
                _this3.handleLockOrUnlockGooglePayButton('lock');
                _this3.onPaymentAuthorized(paymentData);
              }
            }
          });
        }
        return this.paymentsClient;
      }

      /**
       * Initialize Google PaymentsClient after Google-hosted JavaScript has loaded
       *
       * Display a Google Pay payment button after confirmation of the viewer's
       * ability to pay.
       */
    }, {
      key: "onGooglePayLoaded",
      value: (function () {
        var _onGooglePayLoaded = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          var _this4 = this;
          var paymentsClient, _yield$this$getGoogle2, allowedPaymentMethods, apiVersion, apiVersionMinor;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                paymentsClient = this.getGooglePaymentsClient();
                _context4.next = 3;
                return this.getGooglePayConfig();
              case 3:
                _yield$this$getGoogle2 = _context4.sent;
                allowedPaymentMethods = _yield$this$getGoogle2.allowedPaymentMethods;
                apiVersion = _yield$this$getGoogle2.apiVersion;
                apiVersionMinor = _yield$this$getGoogle2.apiVersionMinor;
                return _context4.abrupt("return", new Promise(function (resolve, reject) {
                  paymentsClient.isReadyToPay({
                    allowedPaymentMethods: allowedPaymentMethods,
                    apiVersion: apiVersion,
                    apiVersionMinor: apiVersionMinor
                  }).then(function (response) {
                    if (response.result === true) {
                      _this4.addGooglePayButton();
                      resolve(response);
                    } else {
                      reject(response);
                    }
                  })["catch"](function (err) {
                    reject(err);
                  });
                }));
              case 8:
              case "end":
                return _context4.stop();
            }
          }, _callee4, this);
        }));
        function onGooglePayLoaded() {
          return _onGooglePayLoaded.apply(this, arguments);
        }
        return onGooglePayLoaded;
      }()
      /**
       * Add a Google Pay purchase button alongside an existing checkout button
       *
       * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#ButtonOptions|Button options}
       * @see {@link https://developers.google.com/pay/api/web/guides/brand-guidelines|Google Pay brand guidelines}
       */
      )
    }, {
      key: "addGooglePayButton",
      value: function addGooglePayButton() {
        var _this5 = this;
        var paymentsClient = this.getGooglePaymentsClient();
        var button = paymentsClient.createButton({
          buttonType: "checkout",
          buttonLocale: this.jsShoppingCart.languageCode,
          onClick: function onClick() {
            return _this5.onGooglePaymentButtonClicked();
          }
        });
        button.id = this.GOOGLE_PAY_BUTTON_BLOCK_ID;
        button.style.display = 'none';
        var continueButtonBlock = this.baseDocument.querySelector('#checkout_payment div.continue_button');
        var googlePay = this.baseDocument.getElementById(this.GOOGLE_PAY_BUTTON_BLOCK_ID);
        if (!googlePay) {
          continueButtonBlock.appendChild(button);
        }
      }

      /**
       * Provide Google Pay API with a payment amount, currency, and amount status
       *
       * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#TransactionInfo|TransactionInfo}
       * @returns {object} transaction info, suitable for use as transactionInfo property of PaymentDataRequest
       */
    }, {
      key: "getGoogleTransactionInfo",
      value: function getGoogleTransactionInfo(countryCode) {
        return {
          countryCode: countryCode,
          currencyCode: this.jsShoppingCart.currency,
          totalPriceStatus: "FINAL",
          totalPrice: this.jsShoppingCart.orderTotalGross.toString()
        };
      }

      /**
       * Show Google Pay payment sheet when Google Pay payment button is clicked
       */
    }, {
      key: "onGooglePaymentButtonClicked",
      value: (function () {
        var _onGooglePaymentButtonClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          var paymentDataRequest, paymentsClient;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getGooglePaymentDataRequest();
              case 2:
                paymentDataRequest = _context5.sent;
                paymentsClient = this.getGooglePaymentsClient();
                paymentsClient.loadPaymentData(paymentDataRequest);
              case 5:
              case "end":
                return _context5.stop();
            }
          }, _callee5, this);
        }));
        function onGooglePaymentButtonClicked() {
          return _onGooglePaymentButtonClicked.apply(this, arguments);
        }
        return onGooglePaymentButtonClicked;
      }()
      /**
       * Process payment data returned by the Google Pay API
       *
       * @param {object} paymentData response from Google Pay API after user approves payment
       * @see {@link https://developers.google.com/pay/api/web/reference/response-objects#PaymentData|PaymentData object reference}
       */
      )
    }, {
      key: "processPayment",
      value: (function () {
        var _processPayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(paymentData) {
          var _this6 = this;
          var orderData, payPalOrderId, _yield$this$payPalSDK, id, status;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.createPaypalOrder(this.jsShoppingCart.createOrderUrl, []);
              case 2:
                orderData = _context6.sent;
                payPalOrderId = orderData.id;
                _context6.next = 6;
                return this.payPalSDK.Googlepay().confirmOrder({
                  orderId: payPalOrderId,
                  paymentMethodData: paymentData.paymentMethodData
                });
              case 6:
                _yield$this$payPalSDK = _context6.sent;
                id = _yield$this$payPalSDK.id;
                status = _yield$this$payPalSDK.status;
                return _context6.abrupt("return", new Promise(function (resolve, reject) {
                  if (status === 'APPROVED') {
                    document.querySelector('#checkout_payment input[name="PayPal2HubOrderId"]').value = id;
                    document.querySelector('#checkout_payment input[name="PayPal2HubPayerId"]').value = _this6.googlePayConfig.merchantInfo.merchantId;
                    document.querySelector('#checkout_payment').submit();
                    resolve({
                      transactionState: 'SUCCESS'
                    });
                  } else {
                    reject({
                      transactionState: 'ERROR'
                    });
                  }
                }));
              case 10:
              case "end":
                return _context6.stop();
            }
          }, _callee6, this);
        }));
        function processPayment(_x2) {
          return _processPayment.apply(this, arguments);
        }
        return processPayment;
      }())
    }, {
      key: "handleLockOrUnlockGooglePayButton",
      value: function handleLockOrUnlockGooglePayButton() {
        var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'lock';
        var googlePayButton = this.getGooglePayButton();
        switch (status) {
          case 'lock':
            dispatchEvent(new Event('showLoadingButton'));
            googlePayButton.style.display = 'none';
            break;
          case 'unlock':
            dispatchEvent(new Event('hideLoadingButton'));
            googlePayButton.style.display = 'block';
            break;
          default:
            break;
        }
      }
    }, {
      key: "getGooglePayButton",
      value: function getGooglePayButton() {
        if (!this.googlePayButton) {
          this.googlePayButton = this.baseDocument.getElementById(this.GOOGLE_PAY_BUTTON_BLOCK_ID);
        }
        return this.googlePayButton;
      }
    }]);
  }(AlternativeBaseHandler);
  var PayPalAlternativePaymentMethodLoader = _exports.PayPalAlternativePaymentMethodLoader = /*#__PURE__*/function () {
    function PayPalAlternativePaymentMethodLoader() {
      _classCallCheck(this, PayPalAlternativePaymentMethodLoader);
    }
    return _createClass(PayPalAlternativePaymentMethodLoader, [{
      key: "load",
      value: function load() {
        var promises = [];
        promises.push(this.loadGooglePay());
        return promises;
      }
    }, {
      key: "loadGooglePay",
      value: function loadGooglePay() {
        var _this7 = this;
        return new Promise(function (resolve, reject) {
          var googleSDK = window.google;
          var paypalSDK = window.paypal;
          var baseDocument = document;
          var jsShoppingCartData = window.jsShoppingCart;
          var googlePay = new GooglePayHandler(googleSDK, paypalSDK, jsShoppingCartData, baseDocument);
          googlePay.onGooglePayLoaded().then(function (result) {
            resolve({
              'value': 'gambio_hub-PayPal2Hub-googlepay',
              'container': 'paypal-google-button-container'
            });
          })["catch"](function (error) {
            console.error(error);
            _this7.removeGooglePaySelection();
            resolve({});
          });
        });
      }
    }, {
      key: "removeGooglePaySelection",
      value: function removeGooglePaySelection() {
        var element = document.querySelector('li.gambio_hub-PayPal2Hub-googlepay');
        if (element) {
          element.remove();
        }
      }
    }]);
  }();
});