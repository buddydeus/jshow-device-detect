import { RegexParser } from './RegexParser';
import {
  BROWSER_MAP,
  DEVICE_MAP,
  ENGINE_MAP,
  OS_MAP,
  REGEXPS,
  BrowserType,
  OSType,
  EngineType,
  DeviceType,
  CPUArchitecture,
  CompanyType,
  DEVICE_PATTERNS,
  COMPANY_MAP,
  BROWSER_ENGINE_PATTERNS,
  BROWSER_PATTERNS,
  OS_PATTERNS,
} from '../constants';
import type { DeviceInfo, Browser, Engine, OS, Device, CPU } from '../types';
import { BrowserParser } from './BrowserParser';
import { OSParser } from './OSParser';
import { DeviceParser } from './DeviceParser';

/**
 * 处理可选 UA 的工具函数
 * @param detector - 当前的检测器实例
 * @param ua - 可选的 UA 字符串
 * @param callback - 回调函数
 */
const withUA = <T>(
  detector: DeviceDetector,
  ua: string | undefined,
  callback: (detector: DeviceDetector) => T
): T => (ua ? callback(new DeviceDetector(ua)) : callback(detector));

const withInfo = <T>(
  detector: DeviceDetector,
  ua: string | undefined,
  callback: (info: DeviceInfo) => T
): T => withUA(detector, ua, (d) => callback(d.getDeviceInfo()));

/**
 * 设备检测器类
 * 用于解析和判断用户设备类型、操作系统、浏览器等信息
 */
export class DeviceDetector {
  /**
   * 用户代理字符串
   * @private
   */
  private _ua: string;

  /**
   * 解析后的设备信息缓存
   * @private
   */
  private _cache: DeviceInfo | null = null;

  /**
   * 创建设备检测器实例
   * @param userAgent - 可选的用户代理字符串，如果不提供则使用当前浏览器的 UA
   */
  constructor(ua: string = '') {
    this._ua =
      ua || (typeof navigator !== 'undefined' ? navigator.userAgent : '');
  }

  /**
   * 获取设备信息
   * @param ua - 可选的用户代理字符串
   * @returns 设备信息对象
   */
  public getDeviceInfo(ua?: string): DeviceInfo {
    if (ua) {
      return new DeviceDetector(ua).getDeviceInfo();
    }

    if (!this._cache) {
      const browserInfo = BrowserParser.parse(this._ua);
      const engineInfo = this.detectEngine(browserInfo);
      this._cache = {
        browser: browserInfo,
        engine: engineInfo,
        os: OSParser.parse(this._ua),
        device: DeviceParser.parse(this._ua),
        cpu: { architecture: CPUArchitecture.Unknown },
      };
    }

    return this._cache;
  }

  private detectEngine(browser: Browser): Engine {
    const engineType = ENGINE_MAP[browser.type] || EngineType.Unknown;

    return {
      name: engineType,
      version: this.getEngineVersion(),
      type: engineType,
      engine: engineType,
    };
  }

  private getEngineVersion(): string {
    const matches = this._ua.match(
      /(?:webkit|gecko|trident|blink)\/?\s*(\d+(\.\d+)?)/i
    );
    return matches ? matches[1] : '';
  }

  /**
   * 判断是否为桌面设备
   * @param ua - 可选的用户代理字符串
   * @returns 如果是桌面设备返回 true，否则返回 false
   */
  public isDesktop(ua?: string): boolean {
    return this.getDeviceInfo(ua).device.type === DeviceType.Desktop;
  }

  /**
   * 判断是否为游戏主机
   * @param ua - 可选的用户代理字符串
   * @returns 如果是游戏主机返回 true，否则返回 false
   */
  public isConsole(ua?: string): boolean {
    return this.getDeviceInfo(ua).device.type === DeviceType.Console;
  }

  /**
   * 判断是否为可穿戴设备
   */
  public isWearable(ua?: string): boolean {
    return this.getDeviceInfo(ua).device.type === DeviceType.Wearable;
  }

  // 公共接口
  public isMobile(ua?: string): boolean {
    return withUA(
      this,
      ua,
      (detector) => detector.isPhone() || detector.isPad()
    );
  }

  /**
   * 判断是否为手机设备
   */
  public isPhone(ua?: string): boolean {
    return this.getDeviceInfo(ua).device.type === DeviceType.Phone;
  }

  /**
   * 判断是否为平板设备
   */
  public isPad(ua?: string): boolean {
    return this.getDeviceInfo(ua).device.type === DeviceType.Tablet;
  }

  /**
   * 判断是否为智能电视
   */
  public isSmartTV(ua?: string): boolean {
    return this.getDeviceInfo(ua).device.type === DeviceType.SmartTV;
  }
}
