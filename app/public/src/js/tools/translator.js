"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Translator = /*#__PURE__*/function () {
  function Translator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Translator);

    this._options = Object.assign({}, this.defaultConfig, options);
    this._lang = this.getLanguage();
    this._elements = document.querySelectorAll("[data-i18n]");
  }

  _createClass(Translator, [{
    key: "getLanguage",
    value: function getLanguage() {
      if (!this._options.detectLanguage) {
        return this._options.defaultLanguage;
      }

      var stored = localStorage.getItem("language");

      if (this._options.persist && stored) {
        return stored;
      }

      var lang = navigator.languages ? navigator.languages[0] : navigator.language;
      return lang.substr(0, 2);
    }
  }, {
    key: "load",
    value: function load() {
      var _this = this;

      var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (lang) {
        if (!this._options.languages.includes(lang)) {
          return;
        }

        this._lang = lang;
      }

      var path = "".concat(this._options.filesLocation, "/").concat(this._lang, ".json");
      fetch(path).then(function (res) {
        return res.json();
      }).then(function (translation) {
        _this.translate(translation);

        _this.toggleLangTag();

        if (_this._options.persist) {
          localStorage.setItem("language", _this._lang);
        }
      }).catch(function (err) {
        console.error("Could not load ".concat(path, ".json. Please make sure that the path is correct."), err);
      });
    }
  }, {
    key: "toggleLangTag",
    value: function toggleLangTag() {
      if (document.documentElement.lang !== this._lang) {
        document.documentElement.lang = this._lang;
      }
    }
  }, {
    key: "translate",
    value: function translate(translation) {
      function replace(element) {
        var text = element.dataset.i18n.split(".").reduce(function (obj, i) {
          return obj[i];
        }, translation);

        if (text) {
          element.innerHTML = text;
        }
      }

      this._elements.forEach(replace);
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        persist: false,
        languages: ["en"],
        defaultLanguage: "en",
        filesLocation: "/src/js/tools/i18n"
      };
    }
  }]);

  return Translator;
}(); //   export default Translator;