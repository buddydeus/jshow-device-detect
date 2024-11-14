import { RegexParser } from '../utils/RegexParser';
import { REGEXPS } from '../constants/regexp';
import {
  BrowserType,
  OSType,
  EngineType,
  DeviceType,
  CPUArchitecture,
} from '../constants/enums/device';
import type { DeviceInfo, Browser, Engine, OS, Device, CPU } from '../types';
import { DEVICE_MAP, ENGINE_MAP, OS_MAP } from '../constants';

/**
 * 设备检测器类
 * 用于检测当前设备的浏览器、操作系统、CPU等信息
 */
export class DeviceDetector {
  /** 用户代理字符串 */
  private _ua: string;
  /** 设备信息缓存 */
  private _deviceInfo: DeviceInfo;

  /**
   * 创建设备检测器实例
   * @param userAgent - 可选的用户代理字符串，如果不提供则使用当前环境的
   */
  constructor(userAgent?: string) {
    this._ua =
      userAgent ??
      (typeof window !== 'undefined' ? window.navigator.userAgent : '');
    this._deviceInfo = this.parseDeviceInfo();
  }

  /**
   * 解析设备信息
   * @returns {DeviceInfo} 完整的设备信息对象
   * @private
   */
  private parseDeviceInfo(): DeviceInfo {
    return {
      browser: this.parseBrowser(),
      engine: this.parseEngine(),
      os: this.parseOS(),
      device: this.parseDevice(),
      cpu: this.parseCPU(),
    };
  }

  /**
   * 解析浏览器信息
   * @returns {Browser} 浏览器信息对象
   * @private
   */
  private parseBrowser(): Browser {
    const result = RegexParser.parse(this._ua, REGEXPS.browser);
    return {
      type: this.getBrowserType(result.name),
      name: result.name || 'unknown',
      version: result.version || '',
      major: result.major,
    };
  }

  /**
   * 解析浏览器引擎信息
   * @returns {Engine} 浏览器引擎信息对象
   * @private
   */
  private parseEngine(): Engine {
    const result = RegexParser.parse(this._ua, REGEXPS.engine);
    return {
      type: this.getEngineType(result.name),
      name: result.name || 'unknown',
      version: result.version || '',
    };
  }

  /**
   * 解析操作系统信息
   * @returns {OS} 操作系统信息对象
   * @private
   */
  private parseOS(): OS {
    const result = RegexParser.parse(this._ua, REGEXPS.os);
    const name = result.name || 'unknown';

    return {
      name: this.getOSName(name),
      version: result.version || '',
      type: this.getOSType(name),
    };
  }

  /**
   * 获取操作系统显示名称
   * @param name - 原始操作系统名称
   * @returns {string} 格式化后的操作系统名称
   * @private
   */
  private getOSName(name: string): string {
    if (!name) return 'unknown';

    // 特殊处理 macOS 的显示名称
    const lowerName = name.toLowerCase();
    if (lowerName === 'macos' || lowerName === 'mac os') {
      return 'Mac OS';
    }

    return name;
  }

  /**
   * 获取操作系统类型
   * @param name - 操作系统名称
   * @returns {OSType} 操作系统类型枚举值
   * @private
   */
  private getOSType(name?: string): OSType {
    if (!name) return OSType.Unknown;

    const lowerName = name.toLowerCase();
    if (lowerName === 'mac os' || lowerName === 'macos') {
      return OSType.MacOS;
    }

    return OS_MAP[lowerName] || OSType.Unknown;
  }

  /**
   * 解析设备信息
   * @returns {Device} 设备信息对象
   * @private
   */
  private parseDevice(): Device {
    const result = RegexParser.parse(this._ua, REGEXPS.device);
    const type = this.getDeviceType(result.type);
    let vendor = result.vendor || '';
    let model = result.model || '';

    // 处理特殊设备
    if (this._ua.toLowerCase().includes('huaweicomputer')) {
      vendor = 'Huawei';
    } else if (this._ua.includes('BAH3-W09')) {
      vendor = 'Huawei';
      model = 'MatePad';
    } else if (this._ua.includes('NOH-AN00')) {
      vendor = 'Huawei';
      model = 'Mate 40 Pro';
    } else if (this._ua.includes('SM-T870')) {
      vendor = 'Samsung';
      model = 'SM-T870';
    } else if (this._ua.toLowerCase().includes('ipad pro')) {
      vendor = 'Apple';
      model = 'iPad Pro';
    }

    return {
      type,
      vendor,
      model,
    };
  }

  /**
   * 解析CPU信息
   * @returns {CPU} CPU信息对象
   * @private
   */
  private parseCPU(): CPU {
    const ua = this._ua.toLowerCase();
    let architecture = CPUArchitecture.Unknown;

    if (ua.includes('x86_64') || ua.includes('x64')) {
      architecture = CPUArchitecture.x64;
    } else if (ua.includes('x86') || ua.includes('i686')) {
      architecture = CPUArchitecture.x86;
    } else if (ua.includes('arm64') || ua.includes('aarch64')) {
      architecture = CPUArchitecture.ARM64;
    } else if (ua.includes('arm')) {
      architecture = CPUArchitecture.ARM;
    }

    return { architecture };
  }

  /**
   * 获取浏览器类型
   * @param name - 浏览器名称
   * @returns {BrowserType} 浏览器类型枚举值
   * @private
   */
  private getBrowserType(name?: string): BrowserType {
    if (!name) {
      return BrowserType.Unknown;
    }

    const browserMap: Record<string, BrowserType> = {
      chrome: BrowserType.Chrome,
      firefox: BrowserType.Firefox,
      safari: BrowserType.Safari,
      edge: BrowserType.Edge,
      ie: BrowserType.IE,
      opera: BrowserType.Opera,
      'opera mini': BrowserType.OperaMini,
      uc: BrowserType.UCBrowser,
      qq: BrowserType.QQBrowser,
      maxthon: BrowserType.Maxthon,
      sogou: BrowserType.SouGou,
    };

    return browserMap[name.toLowerCase()] || BrowserType.Unknown;
  }

  /**
   * 获取引擎类型
   * @param name - 引擎名称
   * @returns {EngineType} 引擎类型枚举值
   * @private
   */
  private getEngineType(name?: string): EngineType {
    if (!name) return EngineType.Unknown;
    return ENGINE_MAP[name.toLowerCase()] || EngineType.Unknown;
  }

  /**
   * 获取设备类型
   * @param type - 设备类型字符串
   * @returns {DeviceType} 设备类型枚举值
   * @private
   */
  private getDeviceType(type?: string): DeviceType {
    if (!type) return DeviceType.Desktop;
    return DEVICE_MAP[type.toLowerCase()] || DeviceType.Desktop;
  }

  // 公共接口
  public isMobile(): boolean {
    return this._deviceInfo.device.type === DeviceType.Mobile;
  }

  public isTablet(): boolean {
    return this._deviceInfo.device.type === DeviceType.Tablet;
  }

  public isDesktop(): boolean {
    return this._deviceInfo.device.type === DeviceType.Desktop;
  }

  public getDeviceInfo(): DeviceInfo {
    return this._deviceInfo;
  }
}
