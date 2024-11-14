import {
  BrowserType,
  CompanyType,
  DeviceType,
  EngineType,
  OSType,
} from './enums';

/** 预定义设备匹配规则 */
export const DEVICE_PATTERNS = [
  {
    pattern: /huawei\s+mediapad/i,
    device: {
      type: DeviceType.Tablet,
      vendor: 'Huawei',
      model: 'MediaPad',
      company: CompanyType.Huawei,
    },
  },
  {
    pattern: /xiaomi[\s-]?pad/i,
    device: {
      type: DeviceType.Tablet,
      vendor: 'Xiaomi',
      model: 'Pad',
      company: CompanyType.Xiaomi,
    },
  },
  {
    pattern: /huawei\s+watch\s+gt\s+2\s+pro/i,
    device: {
      type: DeviceType.Wearable,
      vendor: 'Huawei',
      model: 'Watch GT 2 Pro',
      company: CompanyType.Huawei,
    },
  },
  {
    pattern: /xiaomi[\s-]?(\d+)/i,
    device: {
      type: DeviceType.Phone,
      vendor: 'Xiaomi',
      model: (matches) => `Mi ${matches[1]}`,
      company: CompanyType.Xiaomi,
    },
  },
  {
    pattern: /iPhone/i,
    device: {
      type: DeviceType.Phone,
      vendor: 'Apple',
      model: 'iPhone',
      company: CompanyType.Apple,
    },
  },
  {
    pattern: /iPad/i,
    device: {
      type: 'iPadOS',
      vendor: 'Apple',
      model: 'iPad',
      company: CompanyType.Apple,
    },
  },
  {
    pattern: /huaweicomputer/i,
    device: {
      type: DeviceType.Desktop,
      vendor: 'Huawei',
      model: '',
      company: CompanyType.Huawei,
    },
  },
  {
    pattern: /huawei/i,
    device: {
      type: DeviceType.Phone,
      vendor: 'Huawei',
      model: '',
      company: CompanyType.Huawei,
    },
  },
  {
    pattern: /xiaomicomputer/i,
    device: {
      type: DeviceType.Desktop,
      vendor: 'Xiaomi',
      model: '',
      company: CompanyType.Xiaomi,
    },
  },
  {
    pattern: /xiaomi/i,
    device: {
      type: DeviceType.Phone,
      vendor: 'Xiaomi',
      model: '',
      company: CompanyType.Xiaomi,
    },
  },
  {
    pattern: /;\s*(sm-t870)\s*/i,
    device: {
      vendor: 'Samsung',
      model: 'SM-T870',
      type: DeviceType.Tablet,
    },
  },
  {
    pattern: /samsung/i,
    device: {
      type: DeviceType.Phone,
      vendor: 'Samsung',
      model: '',
    },
  },
  {
    pattern: /pixel\s(\d+)/i,
    device: {
      type: DeviceType.Phone,
      vendor: 'Google',
      model: (matches) => `Pixel ${matches[1]}`,
    },
  },
  {
    pattern: /smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv/i,
    device: { type: DeviceType.SmartTV, vendor: '', model: '' },
  },
  {
    pattern: /\b(nintendo|playstation|xbox)\b/i,
    device: { type: DeviceType.Console, vendor: '', model: '' },
  },
  {
    pattern: /\b(watch|glass)\b/i,
    device: { type: DeviceType.Wearable, vendor: '', model: '' },
  },
  {
    pattern: /ipad pro/i,
    device: { vendor: 'Apple', model: 'iPad Pro', type: DeviceType.Tablet },
  },
  {
    pattern: /bah3-w09/i,
    device: { vendor: 'Huawei', model: 'MatePad', type: DeviceType.Tablet },
  },
  {
    pattern: /21051182G/i,
    device: { vendor: 'Xiaomi', model: 'Pad 5', type: DeviceType.Tablet },
  },
  {
    pattern: /huawei[\s-]?(\w+)/i,
    device: {
      type: DeviceType.Phone,
      vendor: 'Huawei',
      model: (matches) => matches[1],
      company: CompanyType.Huawei,
    },
  },
  {
    pattern: /xiaomi[\s-]?(\w+)/i,
    device: {
      type: DeviceType.Phone,
      vendor: 'Xiaomi',
      model: (matches) => matches[1],
      company: CompanyType.Xiaomi,
    },
  },
];

export const BROWSER_ENGINE_PATTERNS = [
  {
    pattern: /webkit/i,
    engine: EngineType.WebKit,
  },
  {
    pattern: /gecko/i,
    engine: EngineType.Gecko,
  },
  {
    pattern: /trident/i,
    engine: EngineType.Trident,
  },
  {
    pattern: /blink/i,
    engine: EngineType.Blink,
  },
];

export const BROWSER_PATTERNS = [
  {
    pattern: /MicroMessenger\/(\d+\.\d+)/i,
    browser: {
      name: 'WeChat Mini Program',
      type: BrowserType.WeChat,
    },
  },
  {
    pattern: /Edg\/(\d+\.\d+)/i,
    browser: {
      name: 'Edge',
      type: BrowserType.Edge,
    },
  },
  {
    pattern: /MSIE|Trident/i,
    browser: {
      name: 'Internet Explorer',
      type: BrowserType.IE,
    },
  },
  {
    pattern: /Maxthon/i,
    browser: {
      name: 'Maxthon',
      type: BrowserType.Maxthon,
    },
  },
  {
    pattern: /MicroMessenger|WeChat/i,
    browser: {
      name: 'WeChat',
      type: BrowserType.WeChat,
    },
  },
  {
    pattern: /QQ\/|QQBrowser/i,
    browser: {
      name: 'QQ Browser',
      type: BrowserType.QQBrowser,
    },
  },
  {
    pattern: /OPR|Opera/i,
    browser: {
      name: 'Opera',
      type: BrowserType.Opera,
    },
  },
  {
    pattern: /Firefox/i,
    browser: {
      name: 'Firefox',
      type: BrowserType.Firefox,
    },
  },
  {
    pattern: /Chrome/i,
    browser: {
      name: 'Chrome',
      type: BrowserType.Chrome,
    },
  },
  {
    pattern: /Safari/i,
    browser: {
      name: 'Safari',
      type: BrowserType.Safari,
    },
  },
];

export const OS_PATTERNS = [
  {
    pattern: /Windows\s+Server/i,
    os: {
      name: 'Windows Server',
      version: '',
      type: OSType.Windows,
    },
  },
  {
    pattern: /Windows NT/i,
    os: {
      name: 'Windows',
      version: '',
      type: OSType.Windows,
    },
  },
  {
    pattern: /iPad/i,
    os: {
      name: 'iPadOS',
      type: OSType.IPadOS,
    },
  },
  {
    pattern: /iPhone|iPod/i,
    os: {
      name: 'iOS',
      type: OSType.IOS,
    },
  },
  {
    pattern: /Mac OS X/i,
    os: {
      name: 'macOS',
      type: OSType.MacOS,
    },
  },
  {
    pattern: /Android/i,
    os: {
      name: 'Android',
      type: OSType.Android,
    },
  },
  {
    pattern: /Linux/i,
    os: {
      name: 'Linux',
      type: OSType.Linux,
    },
  },
];
