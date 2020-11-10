declare class UADetect {
  private parser;
  constructor(ua?: string);
  reset: (ua?: string | undefined) => this;
  isMobile: (ua?: string | undefined) => boolean;
  isSafari: (ua?: string | undefined, onlyMobile?: boolean) => boolean;
  isFirefox: (ua?: string | undefined) => boolean;
  isIE: (ua?: string | undefined) => boolean;
  isEdge: (ua?: string | undefined, type?: 'Chromium' | 'Legacy' | undefined) => boolean;
  isWindows: (ua?: string | undefined, onlyMobile?: boolean) => boolean;
  isAndroid: (ua?: string | undefined) => boolean;
  isMac: (ua?: string | undefined) => boolean;
  isIOS: (ua?: string | undefined) => boolean;
  isIOS13: (type?: 'iPad' | 'iPhone' | 'iPod' | undefined) => boolean;
  isMIUI: (ua?: string | undefined) => boolean;
  isElectron: (ua?: string | undefined) => boolean;
  isPad: (ua?: string | undefined) => string | boolean;
  isWechat: (ua?: string | undefined, type?: 'mobile' | 'desktop' | undefined) => boolean;
  private isEdgeChromium;
}
export default UADetect;
