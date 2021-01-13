import { BROWSER_TYPES, DEVICE_TYPES, OS_TYPES } from '../constants';

import { getNavigator } from '../utils/brower';

import UAParser from './parser';

class UADetect {
  private parser: UAParser;

  constructor(ua?: string) {
    this.parser = new UAParser(ua);
  }

  public get userAgent() {
    return this.parser.userAgent;
  }

  public set userAgent(value: string) {
    this.parser.reset(value);
  }

  public get browser() {
    return this.parser.browser;
  }

  public get engine() {
    return this.parser.engine;
  }

  public get os() {
    return this.parser.os;
  }

  public get device() {
    return this.parser.device;
  }

  public get cpu() {
    return this.parser.cpu;
  }

  public reset(ua?: string) {
    this.parser.reset(ua);
    return this;
  }

  public isMobile(ua?: string) {
    const device = ua ? this.parser.getDevice(ua) : this.parser.device;
    switch (device.type) {
      case DEVICE_TYPES.MOBILE:
      case DEVICE_TYPES.TABLET:
        return true;
      default:
        return false;
    }
  }

  public isSafari(ua?: string, onlyMobile = false) {
    const browser = ua ? this.parser.getBrowser(ua) : this.parser.browser;
    switch (browser.name) {
      case BROWSER_TYPES.SAFARI:
        return !onlyMobile;
      case BROWSER_TYPES.MOBILE_SAFARI:
        return true;
      default:
        return false;
    }
  }

  public isFirefox(ua?: string) {
    const browser = ua ? this.parser.getBrowser(ua) : this.parser.browser;
    return browser.name === BROWSER_TYPES.FIREFOX;
  }

  public isIE(ua?: string) {
    const browser = ua ? this.parser.getBrowser(ua) : this.parser.browser;
    switch (browser.name) {
      case BROWSER_TYPES.INTERNET_EXPLORER:
      case BROWSER_TYPES.IE:
        return true;
      default:
        return false;
    }
  }

  public isEdge(ua?: string, type?: 'Chromium' | 'Legacy') {
    const isChromium = this.isEdgeChromium(ua);
    switch (type) {
      case 'Chromium':
        if (isChromium) return true;
        break;
      case 'Legacy':
        if (isChromium) return false;
        break;
    }

    const browser = ua ? this.parser.getBrowser(ua) : this.parser.browser;
    return browser.name === BROWSER_TYPES.EDGE;
  }

  public isWindows(ua?: string, onlyMobile = false) {
    const os = ua ? this.parser.getOS(ua) : this.parser.os;
    return os.name === (onlyMobile ? OS_TYPES.WINDOWS_PHONE : OS_TYPES.WINDOWS);
  }

  public isAndroid(ua?: string) {
    const os = ua ? this.parser.getOS(ua) : this.parser.os;
    return os.name === OS_TYPES.ANDROID;
  }

  public isMac(ua?: string) {
    const os = ua ? this.parser.getOS(ua) : this.parser.os;
    return os.name === OS_TYPES.MAC_OS;
  }

  public isIOS(ua?: string) {
    const os = ua ? this.parser.getOS(ua) : this.parser.os;
    return os.name === OS_TYPES.IOS || this.isIOS13('iPad');
  }

  public isIOS13(type?: 'iPad' | 'iPhone' | 'iPod') {
    const nav = getNavigator();
    if (!nav) return false;
    const platform: string | false = nav.platform as string;
    if (!platform) return false;

    return (
      (type ? platform.indexOf(type) !== -1 : /iPad|iPhone|iPod/.test(platform)) ||
      (platform === 'MacIntel' && nav.maxTouchPoints > 1 && !window.MSStream)
    );
  }

  public isMIUI(ua?: string) {
    const browser = ua ? this.parser.getBrowser(ua) : this.parser.browser;
    return browser.name === BROWSER_TYPES.MIUI;
  }

  public isElectron(ua?: string) {
    const _ua = (ua || this.parser.userAgent).toLowerCase();
    return _ua ? /electron/.test(_ua) : false;
  }

  public isPad(ua?: string) {
    const device = ua ? this.parser.getDevice(ua) : this.parser.device;
    return (device.type = DEVICE_TYPES.TABLET) || this.isIOS13('iPad');
  }

  public isWechat(ua?: string, type: 'mobile' | 'desktop' | undefined = 'mobile') {
    const browser = ua ? this.parser.getBrowser(ua) : this.parser.browser;
    switch (browser.name) {
      case BROWSER_TYPES.WECHAT:
        return !(type !== 'mobile');
      case BROWSER_TYPES.WECHAT_DESKTOP:
        return !(type !== 'desktop');
      default:
        return false;
    }
  }

  private isEdgeChromium(ua?: string) {
    const _ua = ua || this.parser.userAgent;
    return _ua.indexOf('Edg/') !== -1;
  }
}

export default UADetect;
