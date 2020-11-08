import UADetect from './libs/detect';

const DetectObject = new UADetect();

export default DetectObject;

export const isMobile = DetectObject.isMobile;
export const isSafari = DetectObject.isSafari;
export const isFirefox = DetectObject.isFirefox;
export const isIE = DetectObject.isIE;
export const isEdge = DetectObject.isEdge;
export const isWindows = DetectObject.isWindows;
export const isAndroid = DetectObject.isAndroid;
export const isMac = DetectObject.isMac;
export const isIOS = DetectObject.isIOS;
export const isMIUI = DetectObject.isMIUI;
export const isElectron = DetectObject.isElectron;
export const isPad = DetectObject.isPad;
export const isWechat = DetectObject.isWechat;
