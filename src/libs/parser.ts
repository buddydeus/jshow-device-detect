/* eslint-disable @typescript-eslint/no-non-null-assertion */
import REGEXP from '../constants/regexp';
import { execRxp, getMajor } from '../utils';

interface BaseUserAgent {
  name: string;
  version: string;
}

export interface UserAgentBrowser extends BaseUserAgent {
  major?: string;
}

export interface UserAgentEngine extends BaseUserAgent {}

export interface UserAgentOS extends BaseUserAgent {}

export interface UserAgentDevice {
  vendor: string;
  model: string;
  type?: string;
}

export interface UserAgentCPU {
  architecture: string;
}

export interface UserAgent {
  browser: UserAgentBrowser;
  engine: UserAgentEngine;
  os: UserAgentOS;
  device: UserAgentDevice;
  cpu: UserAgentCPU;
}

/**
 * UA 解析类。
 */
class UAParser {
  private _userAgent = '';
  private _cacheObject?: UserAgent;

  constructor(ua?: string) {
    this.reset(ua);
  }

  public get userAgent() {
    return this._userAgent;
  }

  public set userAgent(value: string) {
    this.reset(value);
  }

  public get browser() {
    return this._cacheObject!.browser;
  }

  public get engine() {
    return this._cacheObject!.engine;
  }

  public get os() {
    return this._cacheObject!.os;
  }

  public get device() {
    return this._cacheObject!.device;
  }

  public get cpu() {
    return this._cacheObject!.cpu;
  }

  public reset(ua?: string) {
    this._userAgent = ua || (typeof window !== 'undefined' && window.navigator && window.navigator.userAgent) || '';

    this._cacheObject = {
      ua: this._userAgent,
      browser: this.getBrowser(),
      engine: this.getEngine(),
      os: this.getOS(),
      device: this.getDevice(),
      cpu: this.getCPU(),
    };

    return this;
  }

  public getBrowser(ua: string = this._userAgent): UserAgentBrowser {
    const browser = execRxp<UserAgentBrowser>(ua, REGEXP.browser);
    browser.major = getMajor(browser.version);
    return browser;
  }

  public getCPU(ua: string = this._userAgent) {
    return execRxp<UserAgentCPU>(ua, REGEXP.cpu);
  }

  public getDevice(ua: string = this._userAgent) {
    return execRxp<UserAgentDevice>(ua, REGEXP.device);
  }

  public getEngine(ua: string = this._userAgent) {
    return execRxp<UserAgentEngine>(ua, REGEXP.engine);
  }

  public getOS(ua: string = this._userAgent) {
    return execRxp<UserAgentOS>(ua, REGEXP.os);
  }

  public toString() {
    return this._cacheObject!.toString();
  }
}

export default UAParser;
