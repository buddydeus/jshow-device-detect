import UADetect from './libs/detect';

const DetectObject = new UADetect();

export default DetectObject;

export const getBrowser = DetectObject.parser.getBrowser.bind(DetectObject.parser);
export const getEngine = DetectObject.parser.getEngine.bind(DetectObject.parser);
export const getDevice = DetectObject.parser.getDevice.bind(DetectObject.parser);
export const getOS = DetectObject.parser.getOS.bind(DetectObject.parser);
export const getCPU = DetectObject.parser.getCPU.bind(DetectObject.parser);

export const isMobile = DetectObject.isMobile.bind(DetectObject);
export const isSafari = DetectObject.isSafari.bind(DetectObject);
export const isFirefox = DetectObject.isFirefox.bind(DetectObject);
export const isIE = DetectObject.isIE.bind(DetectObject);
export const isEdge = DetectObject.isEdge.bind(DetectObject);
export const isWindows = DetectObject.isWindows.bind(DetectObject);
export const isAndroid = DetectObject.isAndroid.bind(DetectObject);
export const isMac = DetectObject.isMac.bind(DetectObject);
export const isIOS = DetectObject.isIOS.bind(DetectObject);
export const isMIUI = DetectObject.isMIUI.bind(DetectObject);
export const isElectron = DetectObject.isElectron.bind(DetectObject);
export const isPad = DetectObject.isPad.bind(DetectObject);
export const isWechat = DetectObject.isWechat.bind(DetectObject);
