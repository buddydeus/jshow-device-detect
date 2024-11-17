import { DeviceType, BrowserType, OSType, EngineType, CPUArchitecture, CompanyType } from '@/types';

interface DeviceInfo {
  deviceType: DeviceType;
  browserType: BrowserType;
  osType: OSType;
  engineType: EngineType;
  cpuArchitecture: CPUArchitecture;
  companyType: CompanyType;
}

type TypeMatchers<T extends DeviceType | BrowserType | OSType | EngineType| CPUArchitecture| CompanyType> = { [K in T]: string[] };

const deviceMatchers: TypeMatchers<DeviceType> = {
  [DeviceType.Phone]: ['mobile'],
  [DeviceType.Pad]: ['tablet', 'ipad', 'playbook', 'silk'],
  [DeviceType.SmartTV]: ['smarttv', 'googletv', 'appletv', 'hbbtv', 'pov_tv'],
  [DeviceType.Console]: ['console', 'xbox', 'playstation', 'nintendo'],
  [DeviceType.Wearable]: ['wearable', 'watch'],
  [DeviceType.Desktop]: [], // 默认匹配桌面设备
};

const browserMatchers: TypeMatchers<BrowserType> = {
  [BrowserType.Chrome]: ['chrome', 'crios', 'crmo'],
  [BrowserType.Firefox]: ['firefox', 'iceweasel', 'fxios'],
  [BrowserType.Safari]: ['safari'],
  [BrowserType.Edge]: ['edg'],
  [BrowserType.IE]: ['msie', 'trident'],
  [BrowserType.Opera]: ['opera', 'opr', 'opios'],
  [BrowserType.OperaMini]: ['opera mini'],
  [BrowserType.OperaTouch]: ['opera touch'],
  [BrowserType.UCBrowser]: ['ucbrowser'],
  [BrowserType.QQBrowser]: ['qqbrowser'],
  [BrowserType.Baidu]: ['baidubrowser'],
  [BrowserType.Maxthon]: ['maxthon'],
  [BrowserType.SouGou]: ['sogou'],
  [BrowserType.WeChat]: ['micromessenger'],
  [BrowserType.Unknown]: [], // 默认匹配未知浏览器
};

const osMatchers: TypeMatchers<OSType> = {
  [OSType.WindowsPhone]: ['windows phone'],
  [OSType.Windows]: ['windows'],
  [OSType.WindowsServer]: ['windows'], // 使用相同的特征值
  [OSType.MacOS]: ['macintosh', 'mac os x'],
  [OSType.iOS]: ['iphone', 'ipad', 'ipod'],
  [OSType.Android]: ['android'],
  [OSType.Linux]: ['linux'],
  [OSType.ChromeOS]: ['cros'],
  [OSType.BlackBerry]: ['blackberry'],
  [OSType.FirefoxOS]: ['firefox'],
  [OSType.Symbian]: ['symbian'],
  [OSType.WebOS]: ['webos'],
  [OSType.Unknown]: [], // 默认匹配未知操作系统
};

const engineMatchers: TypeMatchers<EngineType> = {
  [EngineType.WebKit]: ['webkit'],
  [EngineType.Gecko]: ['gecko'],
  [EngineType.Presto]: ['presto'],
  [EngineType.Trident]: ['trident'],
  [EngineType.EdgeHTML]: ['edge'],
  [EngineType.Blink]: ['blink'],
  [EngineType.Unknown]: [], // 默认匹配未知引擎
};

const cpuMatchers: TypeMatchers<CPUArchitecture> = {
  [CPUArchitecture.ARM]: ['arm'],
  [CPUArchitecture.ARM64]: ['arm64'],
  [CPUArchitecture.x86]: ['x86'],
  [CPUArchitecture.x64]: ['x64', 'win64', 'wow64'],
  [CPUArchitecture.Unknown]: [], // 默认匹配未知架构
};

const companyMatchers: TypeMatchers<CompanyType> = {
  [CompanyType.Apple]: ['apple'],
  [CompanyType.Huawei]: ['huawei'],
  [CompanyType.Xiaomi]: ['xiaomi'],
  [CompanyType.BlackBerry]: ['blackberry'],
  [CompanyType.Google]: ['google'],
  [CompanyType.Tencent]: ['tencent'],
  [CompanyType.Samsung]: ['samsung'],
  [CompanyType.Unknown]: [], // 默认匹配未知公司
};

export function getDeviceInfo(userAgent: string): DeviceInfo {
  const matches = getMatches(userAgent);

  return {
    deviceType: getDeviceType(matches),
    browserType: getBrowserType(matches),
    osType: getOSType(matches),
    engineType: getEngineType(matches),
    cpuArchitecture: getCPUArchitecture(matches),
    companyType: getCompanyType(matches),
  };
}

function getDeviceType(matches: string[]): DeviceType {
  for (const [type, keywords] of Object.entries(deviceMatchers)) {
    if (keywords.some(keyword => matches.some(match => match.includes(keyword)))) {
      return type as DeviceType;
    }
  }
  return DeviceType.Desktop;
}

function getBrowserType(matches: string[]): BrowserType {
  for (const [type, keywords] of Object.entries(browserMatchers)) {
    if (keywords.some(keyword => matches.some(match => match.includes(keyword)))) {
      return type as BrowserType;
    }
  }
  return BrowserType.Unknown;
}

function getOSType(matches: string[]): OSType {
  for (const [type, keywords] of Object.entries(osMatchers)) {
    if (keywords.some(keyword => matches.some(match => match.includes(keyword)))) {
      return type as OSType;
    }
  }
  return OSType.Unknown;
}

function getEngineType(matches: string[]): EngineType {
  for (const [type, keywords] of Object.entries(engineMatchers)) {
    if (keywords.some(keyword => matches.some(match => match.includes(keyword)))) {
      return type as EngineType;
    }
  }
  return EngineType.Unknown;
}

function getCPUArchitecture(matches: string[]): CPUArchitecture {
  for (const [type, keywords] of Object.entries(cpuMatchers)) {
    if (keywords.some(keyword => matches.some(match => match.includes(keyword)))) {
      return type as CPUArchitecture;
    }
  }
  return CPUArchitecture.Unknown;
}

function getCompanyType(matches: string[]): CompanyType {
  for (const [type, keywords] of Object.entries(companyMatchers)) {
    if (keywords.some(keyword => matches.some(match => match.includes(keyword)))) {
      return type as CompanyType;
    }
  }
  return CompanyType.Unknown;
}

export function isDesktop(userAgent: string): boolean {
  return getDeviceType(getMatches(userAgent)) === DeviceType.Desktop;
}

export function isPhone(userAgent: string): boolean {
  return getDeviceType(getMatches(userAgent)) === DeviceType.Phone;
}

export function isPad(userAgent: string): boolean {
  return getDeviceType(getMatches(userAgent)) === DeviceType.Pad;
}

export function isSmartTV(userAgent: string): boolean {
  return getDeviceType(getMatches(userAgent)) === DeviceType.SmartTV;
}

export function isConsole(userAgent: string): boolean {
  return getDeviceType(getMatches(userAgent)) === DeviceType.Console;
}

export function isWearable(userAgent: string): boolean {
  return getDeviceType(getMatches(userAgent)) === DeviceType.Wearable;
}

function getMatches(userAgent: string): string[] {
  const matches: string[] = [];
  const parts = userAgent.toLowerCase().split(' ');

  parts.forEach(part => {
    if (part.includes('(') && part.includes(')')) {
      const subParts = part.slice(1, -1).split(/[;,]/);
      subParts.forEach(subPart => matches.push(subPart.trim()));
    } else {
      matches.push(part);
    }
  });

  return matches;
}
