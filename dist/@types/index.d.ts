import UADetect from './libs/detect';
declare const DetectObject: UADetect;
export default DetectObject;
export declare const isMobile: (ua?: string | undefined) => boolean;
export declare const isSafari: (ua?: string | undefined, onlyMobile?: boolean) => boolean;
export declare const isFirefox: (ua?: string | undefined) => boolean;
export declare const isIE: (ua?: string | undefined) => boolean;
export declare const isEdge: (
  ua?: string | undefined,
  type?: 'Chromium' | 'Legacy' | undefined,
) => boolean;
export declare const isWindows: (ua?: string | undefined, onlyMobile?: boolean) => boolean;
export declare const isAndroid: (ua?: string | undefined) => boolean;
export declare const isMac: (ua?: string | undefined) => boolean;
export declare const isIOS: (ua?: string | undefined) => boolean;
export declare const isMIUI: (ua?: string | undefined) => boolean;
export declare const isElectron: (ua?: string | undefined) => boolean;
export declare const isPad: (ua?: string | undefined) => string | boolean;
export declare const isWechat: (
  ua?: string | undefined,
  type?: 'mobile' | 'desktop' | undefined,
) => boolean;
