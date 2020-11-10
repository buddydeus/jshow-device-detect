'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var regexp_1 = __importDefault(require('../constants/regexp'));
var utils_1 = require('../utils');
var UAParser = (function () {
  function UAParser(ua) {
    var _this = this;
    this._userAgent = '';
    this._targetObject = {};
    this.reset = function (ua) {
      _this._userAgent =
        ua ||
        (typeof window !== 'undefined' && window.navigator && window.navigator.userAgent) ||
        '';
      _this._targetObject = {
        ua: _this._userAgent,
        browser: _this.getBrowser(),
        engine: _this.getEngine(),
        os: _this.getOS(),
        device: _this.getDevice(),
        cpu: _this.getCPU(),
      };
      return _this;
    };
    this.getBrowser = function (ua) {
      if (ua === void 0) {
        ua = _this._userAgent;
      }
      var browser = { name: undefined, version: undefined, major: undefined };
      utils_1.execRxp(browser, ua, regexp_1.default.browser);
      browser.major = utils_1.getMajor(browser.version);
      return browser;
    };
    this.getCPU = function (ua) {
      if (ua === void 0) {
        ua = _this._userAgent;
      }
      var cpu = { architecture: undefined };
      utils_1.execRxp(cpu, ua, regexp_1.default.cpu);
      return cpu;
    };
    this.getDevice = function (ua) {
      if (ua === void 0) {
        ua = _this._userAgent;
      }
      var device = { vendor: undefined, model: undefined, type: undefined };
      utils_1.execRxp(device, ua, regexp_1.default.device);
      return device;
    };
    this.getEngine = function (ua) {
      if (ua === void 0) {
        ua = _this._userAgent;
      }
      var engine = { name: undefined, version: undefined };
      utils_1.execRxp(engine, ua, regexp_1.default.engine);
      return engine;
    };
    this.getOS = function (ua) {
      if (ua === void 0) {
        ua = _this._userAgent;
      }
      var os = { name: undefined, version: undefined };
      utils_1.execRxp(os, ua, regexp_1.default.os);
      return os;
    };
    this.reset(ua);
  }
  Object.defineProperty(UAParser.prototype, 'userAgent', {
    get: function () {
      return this._userAgent;
    },
    set: function (value) {
      this.reset(value);
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(UAParser.prototype, 'browser', {
    get: function () {
      return this._targetObject.browser;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(UAParser.prototype, 'engine', {
    get: function () {
      return this._targetObject.engine;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(UAParser.prototype, 'os', {
    get: function () {
      return this._targetObject.os;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(UAParser.prototype, 'device', {
    get: function () {
      return this._targetObject.device;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(UAParser.prototype, 'cpu', {
    get: function () {
      return this._targetObject.cpu;
    },
    enumerable: false,
    configurable: true,
  });
  UAParser.prototype.toString = function () {
    return this._targetObject.toString();
  };
  return UAParser;
})();
exports.default = UAParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYnMvcGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0RBQXlDO0FBRXpDLGtDQUE2QztBQUU3QztJQWdDRSxrQkFBWSxFQUFXO1FBQXZCLGlCQUVDO1FBTE8sZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQU16QixVQUFLLEdBQUcsVUFBQyxFQUFXO1lBRXpCLEtBQUksQ0FBQyxVQUFVO2dCQUNiLEVBQUUsSUFBSSxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRWhHLEtBQUksQ0FBQyxhQUFhLEdBQUc7Z0JBQ25CLEVBQUUsRUFBRSxLQUFJLENBQUMsVUFBVTtnQkFDbkIsT0FBTyxFQUFFLEtBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQzFCLE1BQU0sRUFBRSxLQUFJLENBQUMsU0FBUyxFQUFFO2dCQUN4QixFQUFFLEVBQUUsS0FBSSxDQUFDLEtBQUssRUFBRTtnQkFDaEIsTUFBTSxFQUFFLEtBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3hCLEdBQUcsRUFBRSxLQUFJLENBQUMsTUFBTSxFQUFFO2FBQ25CLENBQUM7WUFFRixPQUFPLEtBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztRQUVLLGVBQVUsR0FBRyxVQUFDLEVBQTRCO1lBQTVCLG1CQUFBLEVBQUEsS0FBYSxLQUFJLENBQUMsVUFBVTtZQUMvQyxJQUFNLE9BQU8sR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7WUFDMUUsZUFBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQyxPQUFP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
