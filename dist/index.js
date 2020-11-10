'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.isWechat = exports.isPad = exports.isElectron = exports.isMIUI = exports.isIOS = exports.isMac = exports.isAndroid = exports.isWindows = exports.isEdge = exports.isIE = exports.isFirefox = exports.isSafari = exports.isMobile = void 0;
var detect_1 = __importDefault(require('./libs/detect'));
var DetectObject = new detect_1.default();
exports.default = DetectObject;
exports.isMobile = DetectObject.isMobile;
exports.isSafari = DetectObject.isSafari;
exports.isFirefox = DetectObject.isFirefox;
exports.isIE = DetectObject.isIE;
exports.isEdge = DetectObject.isEdge;
exports.isWindows = DetectObject.isWindows;
exports.isAndroid = DetectObject.isAndroid;
exports.isMac = DetectObject.isMac;
exports.isIOS = DetectObject.isIOS;
exports.isMIUI = DetectObject.isMIUI;
exports.isElectron = DetectObject.isElectron;
exports.isPad = DetectObject.isPad;
exports.isWechat = DetectObject.isWechat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseURBQXFDO0FBRXJDLElBQU0sWUFBWSxHQUFHLElBQUksZ0JBQVEsRUFBRSxDQUFDO0FBRXBDLGtCQUFlLFlBQVksQ0FBQztBQUVmLFFBQUEsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7QUFDakMsUUFBQSxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztBQUNqQyxRQUFBLFNBQVMsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDO0FBQ25DLFFBQUEsSUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7QUFDekIsUUFBQSxNQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztBQUM3QixRQUFBLFNBQVMsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDO0FBQ25DLFFBQUEsU0FBUyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUM7QUFDbkMsUUFBQSxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztBQUMzQixRQUFBLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0FBQzNCLFFBQUEsTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7QUFDN0IsUUFBQSxVQUFVLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQztBQUNyQyxRQUFBLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0FBQzNCLFFBQUEsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMifQ==
