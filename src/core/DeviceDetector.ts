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
} from '../constants';
import type { DeviceInfo, Browser, Engine, OS, Device, CPU } from '../types';

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
  private _deviceInfo: DeviceInfo;

  /**
   * 创建设备检测器实例
   * @param userAgent - 可选的用户代理字符串，如果不提供则使用当前浏览器的 UA
   */
  constructor(userAgent?: string) {
    this._ua =
      userAgent ??
      (typeof window !== 'undefined' ? window.navigator.userAgent : '');
    this._deviceInfo = this.parseDeviceInfo();
  }

  /**
   * 解析设备信息
   * @returns {DeviceInfo} 完整的设备信对象
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
    const ua = this._ua.toLowerCase();
    let engineName = EngineType.Unknown;
    let engineVersion = '';

    if (ua.includes('edge/')) {
      engineName = EngineType.EdgeHTML;
      const match = ua.match(/edge\/(\d+(\.\d+)?)/i);
      engineVersion = match?.[1] || '';
    } else if (ua.includes('chrome/') || ua.includes('edg/')) {
      engineName = EngineType.Blink;
      const match = ua.match(/(?:chrome|edg)\/(\d+(\.\d+)?)/i);
      engineVersion = match?.[1] || '';
    } else if (ua.includes('firefox/')) {
      engineName = EngineType.Gecko;
      const match = ua.match(/firefox\/(\d+(\.\d+)?)/i);
      engineVersion = match?.[1] || '';
    } else if (ua.includes('webkit')) {
      engineName = EngineType.WebKit;
      const match = ua.match(/webkit\/(\d+(\.\d+)?)/i);
      engineVersion = match?.[1] || '';
    }

    return {
      type: engineName,
      name: engineName,
      version: engineVersion,
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
    const lowerName = name.toLowerCase();

    // 特殊处理 macOS 的显示名称
    const displayName =
      lowerName === 'macos' || lowerName === 'mac os' ? 'Mac OS' : name;

    return {
      name: displayName,
      version: result.version || '',
      type: this.getOSType(name),
    };
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
    const ua = this._ua.toLowerCase();
    let deviceType = DeviceType.Desktop;
    let vendor = '';
    let model = '';

    // 使用 DEVICE_PATTERNS 进行匹配
    for (const { pattern, device } of DEVICE_PATTERNS) {
      const matches = ua.match(pattern);
      if (matches) {
        deviceType = device.type || deviceType;
        vendor = device.vendor || vendor;
        model =
          typeof device.model === 'string'
            ? device.model
            : device.model?.(matches) || '';
        break;
      }
    }

    return {
      type: deviceType,
      vendor,
      model,
      company: this.getCompanyType(vendor),
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

    // iOS 设备默认为 ARM64
    if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod')) {
      architecture = CPUArchitecture.ARM64;
    } else if (ua.includes('aarch64') || ua.includes('arm64')) {
      architecture = CPUArchitecture.ARM64;
    } else if (ua.includes('arm')) {
      architecture = CPUArchitecture.ARM;
    } else if (
      ua.includes('x86_64') ||
      ua.includes('amd64') ||
      ua.includes('x64')
    ) {
      architecture = CPUArchitecture.x64;
    } else if (
      ua.includes('x86') ||
      ua.includes('i686') ||
      ua.includes('i386')
    ) {
      architecture = CPUArchitecture.x86;
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
    if (!name) return BrowserType.Unknown;
    return BROWSER_MAP[name.toLowerCase()] || BrowserType.Unknown;
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

  /**
   * 获取公司类型
   * @param vendor - 设备制造商
   * @returns {CompanyType} 公司类型枚举值
   * @private
   */
  private getCompanyType(vendor: string): CompanyType {
    if (!vendor) {
      // 特殊处理腾讯产品和黑莓设备
      const ua = this._ua.toLowerCase();

      if (ua.includes('qqbrowser')) {
        return CompanyType.Tencent;
      }

      if (ua.includes('bb10') || ua.includes('blackberry')) {
        return CompanyType.BlackBerry;
      }

      return CompanyType.Unknown;
    }

    const vendorLower = vendor.toLowerCase();

    // 通过厂商名称映射
    const companyMap: Record<string, CompanyType> = {
      apple: CompanyType.Apple,
      huawei: CompanyType.Huawei,
      google: CompanyType.Google,
      samsung: CompanyType.Samsung,
      blackberry: CompanyType.BlackBerry,
      tencent: CompanyType.Tencent,
    };

    return companyMap[vendorLower] || CompanyType.Unknown;
  }

  /**
   * 获取设备信息
   * @param ua - 可选的用户代理字符串
   * @returns 设备信息对象
   */
  public getDeviceInfo(ua?: string): DeviceInfo {
    if (ua) {
      return new DeviceDetector(ua)._deviceInfo;
    }
    return this._deviceInfo;
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
