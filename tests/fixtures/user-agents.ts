import { DeviceType, CompanyType, EngineType, OSType } from '@/constants';

// 基础类型定义
interface OSExpect {
  name?: string;
  version?: string;
  type: string;
}

interface BrowserExpect extends OSExpect {
  engine?: EngineType;
}

interface DeviceExpect {
  type: DeviceType | string;
  vendor?: string;
  model?: string;
  company?: CompanyType;
}

interface Example {
  ua: string;
  expect: OSExpect | BrowserExpect | DeviceExpect;
}

// 示例集合
export const EXAMPLES: Record<string, Example> = {
  // 浏览器示例
  chrome: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    expect: {
      name: 'Chrome',
      version: '120.0.0.0',
      type: 'Chrome',
      engine: EngineType.Blink,
    },
  },
  firefox: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0',
    expect: {
      name: 'Firefox',
      version: '120.0',
      type: 'Firefox',
      engine: EngineType.Gecko,
    },
  },
  safari: {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15',
    expect: {
      name: 'Safari',
      version: '17.1',
      type: 'Safari',
      engine: EngineType.WebKit,
    },
  },
  edge: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
    expect: {
      name: 'Edge',
      version: '120.0.0.0',
      type: 'Edge',
      engine: EngineType.Blink,
    },
  },
  opera: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 OPR/106.0.0.0',
    expect: {
      name: 'Opera',
      version: '106.0.0.0',
      type: 'Opera',
      engine: EngineType.Blink,
    },
  },
  ie: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
    expect: {
      name: 'Internet Explorer',
      version: '11.0',
      type: 'IE',
      engine: EngineType.Trident,
    },
  },
  maxthon: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/7.0 Chrome/120.0.0.0 Safari/537.36',
    expect: {
      name: 'Maxthon',
      version: '7.0',
      type: 'Maxthon',
      engine: EngineType.Blink,
    },
  },
  qqbrowser: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 QQBrowser/4.0 Safari/537.36',
    expect: {
      name: 'QQ Browser',
      version: '4.0',
      type: 'QQBrowser',
      engine: EngineType.Blink,
    },
  },
  wechatMiniProgram: {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.42(0x18002a2c) NetType/WIFI Language/zh_CN miniProgram',
    expect: {
      name: 'WeChat Mini Program',
      version: '8.0.42',
      type: 'MiniProgram',
      engine: EngineType.WebKit,
    },
  },

  // 操作系统示例
  windows10: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    expect: {
      name: 'Windows',
      version: '10.0',
      type: OSType.Windows,
    },
  },
  windowsServer: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; Server)',
    expect: {
      name: 'Windows Server',
      version: '10.0',
      type: OSType.WindowsServer,
    },
  },
  macos13: {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_6_3)',
    expect: {
      name: 'macOS',
      version: '13.6.3',
      type: OSType.MacOS,
    },
  },
  macos14: {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_2_1)',
    expect: {
      name: 'macOS',
      version: '14.2.1',
      type: OSType.MacOS,
    },
  },
  macos15: {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 15_0)',
    expect: {
      name: 'macOS',
      version: '15.0',
      type: OSType.MacOS,
    },
  },

  // iOS 版本示例
  ios13: {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X)',
    expect: {
      name: 'iOS',
      version: '13.7',
      type: OSType.IOS,
    },
  },
  ios14: {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X)',
    expect: {
      name: 'iOS',
      version: '14.8',
      type: OSType.IOS,
    },
  },
  ios15: {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_7_1 like Mac OS X)',
    expect: {
      name: 'iOS',
      version: '15.7.1',
      type: OSType.IOS,
    },
  },
  ios16: {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_7_2 like Mac OS X)',
    expect: {
      name: 'iOS',
      version: '16.7.2',
      type: OSType.IOS,
    },
  },
  ios17: {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2_1 like Mac OS X)',
    expect: {
      name: 'iOS',
      version: '17.2.1',
      type: OSType.IOS,
    },
  },
  ios18: {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)',
    expect: {
      name: 'iOS',
      version: '18.0',
      type: OSType.IOS,
    },
  },

  // iPadOS 版本示例
  ipados15: {
    ua: 'Mozilla/5.0 (iPad; CPU OS 15_7_1 like Mac OS X)',
    expect: {
      name: 'iPadOS',
      version: '15.7.1',
      type: OSType.IPadOS,
    },
  },
  ipados16: {
    ua: 'Mozilla/5.0 (iPad; CPU OS 16_7_2 like Mac OS X)',
    expect: {
      name: 'iPadOS',
      version: '16.7.2',
      type: OSType.IPadOS,
    },
  },
  ipados17: {
    ua: 'Mozilla/5.0 (iPad; CPU OS 17_2_1 like Mac OS X)',
    expect: {
      name: 'iPadOS',
      version: '17.2.1',
      type: OSType.IPadOS,
    },
  },
  ipados18: {
    ua: 'Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X)',
    expect: {
      name: 'iPadOS',
      version: '18.0',
      type: OSType.IPadOS,
    },
  },

  // 设备示例
  iphone: {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
    expect: {
      type: DeviceType.Phone,
      vendor: 'Apple',
      model: 'iPhone',
      company: CompanyType.Apple,
    },
  },
  ipad: {
    ua: 'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X)',
    expect: {
      type: DeviceType.Tablet,
      vendor: 'Apple',
      model: 'iPad',
      company: CompanyType.Apple,
    },
  },
  huaweiPhone: {
    ua: 'Mozilla/5.0 (Linux; Android 10; NOH-AN00)',
    expect: {
      type: DeviceType.Phone,
      vendor: 'Huawei',
      model: 'NOH-AN00',
      company: CompanyType.Huawei,
    },
  },
  huaweiPad: {
    ua: 'Mozilla/5.0 (Linux; Android 10; BAH3-W09) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.93 Safari/537.36',
    expect: {
      type: DeviceType.Tablet,
      vendor: 'Huawei',
      model: 'MatePad',
      company: CompanyType.Huawei,
    },
  },
  huaweiPC: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 HuaweiComputer',
    expect: {
      type: DeviceType.Desktop,
      vendor: 'Huawei',
      model: '',
      company: CompanyType.Huawei,
    },
  },
  huaweiWatch: {
    ua: 'Mozilla/5.0 (Linux; Android 9; HUAWEI Watch GT 2 Pro)',
    expect: {
      type: DeviceType.Wearable,
      vendor: 'Huawei',
      model: 'Watch GT 2 Pro',
      company: CompanyType.Huawei,
    },
  },
  xiaomiPhone: {
    ua: 'Mozilla/5.0 (Linux; Android 13; M2012K11AC)',
    expect: {
      type: DeviceType.Phone,
      vendor: 'Xiaomi',
      model: 'M2012K11AC',
      company: CompanyType.Xiaomi,
    },
  },
  xiaomiPC: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 XiaomiComputer',
    expect: {
      type: DeviceType.Desktop,
      vendor: 'Xiaomi',
      model: '',
      company: CompanyType.Xiaomi,
    },
  },
  xiaomiPad: {
    ua: 'Mozilla/5.0 (Linux; Android 11; 21051182G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Safari/537.36',
    expect: {
      type: DeviceType.Tablet,
      vendor: 'Xiaomi',
      model: 'Pad 5',
      company: CompanyType.Xiaomi,
    },
  },

  desktop: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    expect: {
      type: DeviceType.Desktop,
      vendor: '',
      model: '',
      company: CompanyType.Unknown,
    },
  },
};

// 导出引用集合
export const BROWSER_EXAMPLES = {
  chrome: EXAMPLES.chrome,
  firefox: EXAMPLES.firefox,
  safari: EXAMPLES.safari,
  edge: EXAMPLES.edge,
  opera: EXAMPLES.opera,
  ie: EXAMPLES.ie,
  maxthon: EXAMPLES.maxthon,
  qqbrowser: EXAMPLES.qqbrowser,
  wechatMiniProgram: EXAMPLES.wechatMiniProgram,
};

export const OS_EXAMPLES = {
  windows10: EXAMPLES.windows10,
  windowsServer: EXAMPLES.windowsServer,
  macos13: EXAMPLES.macos13,
  macos14: EXAMPLES.macos14,
  macos15: EXAMPLES.macos15,
  ios13: EXAMPLES.ios13,
  ios14: EXAMPLES.ios14,
  ios15: EXAMPLES.ios15,
  ios16: EXAMPLES.ios16,
  ios17: EXAMPLES.ios17,
  ios18: EXAMPLES.ios18,
  ipados15: EXAMPLES.ipados15,
  ipados16: EXAMPLES.ipados16,
  ipados17: EXAMPLES.ipados17,
  ipados18: EXAMPLES.ipados18,
};

export const DEVICE_EXAMPLES = {
  desktop: EXAMPLES.desktop,
  iphone: EXAMPLES.ios16,
  ipad: EXAMPLES.ipados17,
  // ipadPro: EXAMPLES.ipadPro,
  huaweiPhone: EXAMPLES.huaweiPhone,
  huaweiPad: EXAMPLES.huaweiPad,
  huaweiWatch: EXAMPLES.huaweiWatch,
  huaweiPC: EXAMPLES.huaweiPC,
  xiaomiPhone: EXAMPLES.xiaomiPhone,
  xiaomiPC: EXAMPLES.xiaomiPC,
  xiaomiPad: EXAMPLES.xiaomiPad,
};
