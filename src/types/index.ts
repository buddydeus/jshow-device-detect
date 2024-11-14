import {
  BrowserType,
  OSType,
  EngineType,
  DeviceType,
  CPUArchitecture,
} from '../constants/enums/device';

export interface BaseInfo {
  name: string;
  version: string;
}

export interface Browser extends BaseInfo {
  type: BrowserType;
  major?: string;
}

export interface Engine extends BaseInfo {
  type: EngineType;
}

export interface OS extends BaseInfo {
  type: OSType;
}

export interface Device {
  type: DeviceType;
  vendor: string;
  model: string;
}

export interface CPU {
  architecture: CPUArchitecture;
}

export interface DeviceInfo {
  browser: Browser;
  engine: Engine;
  os: OS;
  device: Device;
  cpu: CPU;
}
