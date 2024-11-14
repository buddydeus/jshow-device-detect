import {
  CompanyType,
  CPUArchitecture,
  DeviceType,
  OSType,
  EngineType,
  BrowserType,
} from '@/constants';

export interface BaseInfo {
  /** 名称 */
  name: string;
  /** 版本号 */
  version: string;
}

export interface Browser extends BaseInfo {
  /** 浏览器类型 */
  type: BrowserType;
  /** 主版本号 */
  major?: string;
}

export interface Engine extends BaseInfo {
  /** 浏览器引擎类型 */
  type: EngineType;
}

export interface OS extends BaseInfo {
  /** 操作系统类型 */
  type: OSType;
}

export interface Device {
  /** 设备类型 */
  type: DeviceType;
  /** 设备制造商 */
  vendor: string;
  /** 设备型号 */
  model: string;
  /** 所属公司 */
  company: CompanyType;
}

export interface CPU {
  /** CPU 架构类型 */
  architecture: CPUArchitecture;
}

export interface DeviceInfo {
  /** 浏览器信息 */
  browser: Browser;
  /** 浏览器引擎信息 */
  engine: Engine;
  /** 操作系统信息 */
  os: OS;
  /** 设备信息 */
  device: Device;
  /** CPU 信息 */
  cpu: CPU;
}
