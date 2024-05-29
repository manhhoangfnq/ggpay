(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./GooglePay.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./GooglePay.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.GooglePayJs);
    global.PayPalAlternativePaymentMethodLoader = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _GooglePay) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.PayPalAlternativePaymentMethodLoader = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
        var _this = this;
        return new Promise(function (resolve, reject) {
          var googleSDK = window.google;
          var paypalSDK = window.paypal;
          var baseDocument = document;
          var jsShoppingCartData = window.jsShoppingCart;
          var googlePay = new _GooglePay.GooglePayHandler(googleSDK, paypalSDK, jsShoppingCartData, baseDocument);
          googlePay.onGooglePayLoaded().then(function (result) {
            resolve({
              'value': 'gambio_hub-PayPal2Hub-googlepay',
              'container': 'paypal-google-button-container'
            });
          })["catch"](function (error) {
            console.error(error);
            _this.removeGooglePaySelection();
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