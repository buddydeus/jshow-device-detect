import { BrowserType, DeviceType, EngineType, OSType } from '@/index';

/**
 * 浏览器类型映射表
 * 用于将小写的浏览器名称映射到对应的枚举值
 */
export const BROWSER_MAP: Record<string, BrowserType> = {
  chrome: BrowserType.Chrome,
  firefox: BrowserType.Firefox,
  safari: BrowserType.Safari,
  edge: BrowserType.Edge,
  ie: BrowserType.IE,
  opera: BrowserType.Opera,
  'opera mini': BrowserType.OperaMini,
  uc: BrowserType.UCBrowser,
  qq: BrowserType.QQBrowser,
  wechat: BrowserType.WeChat,
};

/**
 * 操作系统类型映射表
 * 用于将小写的操作系统名称映射到对应的枚举值
 */
export const OS_MAP: Record<string, OSType> = {
  windows: OSType.Windows,
  'windows phone': OSType.WindowsPhone,
  'mac os': OSType.MacOS,
  macos: OSType.MacOS,
  ios: OSType.iOS,
  android: OSType.Android,
  linux: OSType.Linux,
  'chrome os': OSType.ChromeOS,
};

/**
 * 设备类型映射表
 * 用于将小写的设备类型名称映射到对应的枚举值
 */
export const DEVICE_MAP: Record<string, DeviceType> = {
  mobile: DeviceType.Mobile,
  tablet: DeviceType.Tablet,
  desktop: DeviceType.Desktop,
  smarttv: DeviceType.SmartTV,
  console: DeviceType.Console,
  wearable: DeviceType.Wearable,
};

/**
 * 引擎类型映射表
 * 用于将小写的引擎名称映射到对应的枚举值
 */
export const ENGINE_MAP: Record<string, EngineType> = {
  webkit: EngineType.WebKit,
  gecko: EngineType.Gecko,
  presto: EngineType.Presto,
  trident: EngineType.Trident,
  edgehtml: EngineType.EdgeHTML,
  blink: EngineType.Blink,
};
