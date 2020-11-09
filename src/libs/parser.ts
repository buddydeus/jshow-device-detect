import REGEXP from '../constants/regexp';

import { getMajor, execRxp } from '../utils';

class UAParser {
  public get userAgent() {
    return this._userAgent;
  }

  public set userAgent(value: string) {
    this.reset(value);
  }

  public get browser() {
    return this._targetObject.browser;
  }

  public get engine() {
    return this._targetObject.engine;
  }

  public get os() {
    return this._targetObject.os;
  }

  public get device() {
    return this._targetObject.device;
  }

  public get cpu() {
    return this._targetObject.cpu;
  }

  private _userAgent = '';
  private _targetObject: any = {};

  constructor(ua?: string) {
    this.reset(ua);
  }

  public reset = (ua?: string) => {
    // @ts-check;
    this._userAgent =
      ua || (typeof window !== 'undefined' && window.navigator && window.navigator.userAgent) || '';

    this._targetObject = {
      ua: this._userAgent,
      browser: this.getBrowser(),
      engine: this.getEngine(),
      os: this.getOS(),
      device: this.getDevice(),
      cpu: this.getCPU(),
    };

    return this;
  };

  public getBrowser = (ua: string = this._userAgent) => {
    const browser = { name: undefined, version: undefined, major: undefined };
    execRxp(browser, ua, REGEXP.browser);
    browser.major = getMajor(browser.version);
    return browser;
  };

  public getCPU = (ua: string = this._userAgent) => {
    const cpu = { architecture: undefined };
    execRxp(cpu, ua, REGEXP.cpu);
    return cpu;
  };

  public getDevice = (ua: string = this._userAgent) => {
    const device = { vendor: undefined, model: undefined, type: undefined };
    execRxp(device, ua, REGEXP.device);
    return device;
  };

  public getEngine = (ua: string = this._userAgent) => {
    const engine = { name: undefined, version: undefined };
    execRxp(engine, ua, REGEXP.engine);
    return engine;
  };

  public getOS = (ua: string = this._userAgent) => {
    const os = { name: undefined, version: undefined };
    execRxp(os, ua, REGEXP.os);
    return os;
  };

  public toString() {
    return this._targetObject.toString();
  }
}

export default UAParser;
