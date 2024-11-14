import { DeviceType, EngineType } from '@/constants';

export const browsers = {
  chrome: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    expect: {
      name: 'Chrome',
      version: '120.0.0.0',
      type: 'Chrome',
    },
  },
  firefox: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/121.0',
    expect: {
      name: 'Firefox',
      version: '121.0',
      type: 'Firefox',
    },
  },
  safari: {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15',
    expect: {
      name: 'Safari',
      version: '17.1',
      type: 'Safari',
    },
  },
  edge: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
    expect: {
      name: 'Edge',
      version: '120.0.0.0',
      type: 'Edge',
    },
  },
  opera: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 OPR/106.0.0.0',
    expect: {
      name: 'Opera',
      version: '106.0.0.0',
      type: 'Opera',
    },
  },
  ie: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
    expect: {
      name: 'Internet Explorer',
      version: '11.0',
      type: 'IE',
    },
  },
  maxthon: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/7.0 Chrome/120.0.0.0 Safari/537.36',
    expect: {
      name: 'Maxthon',
      version: '7.0',
      type: 'Maxthon',
    },
  },
  ucbrowser: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 UBrowser/7.0.185.1002 Safari/537.36',
    expect: {
      name: 'UC Browser',
      version: '7.0.185.1002',
      type: 'UCBrowser',
    },
  },
  qqbrowser: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 QQBrowser/9.0',
    expect: {
      name: 'QQ Browser',
      version: '9.0',
      type: 'QQBrowser',
    },
  },
  wechatMiniProgram: {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.0(0x18000000) NetType/WIFI Language/zh_CN miniProgram',
    expect: {
      name: 'WeChat Mini Program',
      version: '8.0.0',
      type: 'MiniProgram',
    },
  },
  edgeHtml: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063',
    expect: {
      name: 'Edge',
      version: '15.15063',
      type: 'Edge',
      engine: EngineType.EdgeHTML,
    },
  },
};

export const operatingSystems = {
  windows: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    expect: {
      name: 'Windows',
      version: '10.0',
      type: 'Windows',
    },
  },
  windowsServer: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; Server)',
    expect: {
      name: 'Windows Server',
      version: '10.0',
      type: 'Windows Server',
    },
  },
  macos: {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15',
    expect: {
      name: 'macOS',
      version: '14.1',
      type: 'macOS',
    },
  },
  ios: {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1_1 like Mac OS X)',
    expect: {
      name: 'iOS',
      version: '17.1.1',
      type: 'iOS',
    },
  },
  ipados: {
    ua: 'Mozilla/5.0 (iPad; CPU OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Mobile/15E148 Safari/604.1',
    expect: {
      name: 'iPadOS',
      version: '17.1',
      type: 'iPadOS',
    },
  },
  watchos: {
    ua: 'Mozilla/5.0 (Watch; CPU Watch OS 10_1 like Mac OS X) AppleWebKit/605.1.15',
    expect: {
      name: 'watchOS',
      version: '10.1',
      type: 'watchOS',
    },
  },
  android: {
    ua: 'Mozilla/5.0 (Linux; Android 14; Pixel 8)',
    expect: {
      name: 'Android',
      version: '14',
      type: 'Android',
    },
  },
  ios13: {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X)',
    expect: {
      name: 'iOS',
      version: '13.7',
      type: 'iOS',
    },
  },
  ios14: {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X)',
    expect: {
      name: 'iOS',
      version: '14.8',
      type: 'iOS',
    },
  },
  ios15: {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_7_1 like Mac OS X)',
    expect: {
      name: 'iOS',
      version: '15.7.1',
      type: 'iOS',
    },
  },
  ios16: {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_7_2 like Mac OS X)',
    expect: {
      name: 'iOS',
      version: '16.7.2',
      type: 'iOS',
    },
  },
  ios17: {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2_1 like Mac OS X)',
    expect: {
      name: 'iOS',
      version: '17.2.1',
      type: 'iOS',
    },
  },
  ios18: {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)',
    expect: {
      name: 'iOS',
      version: '18.0',
      type: 'iOS',
    },
  },
  ipados15: {
    ua: 'Mozilla/5.0 (iPad; CPU OS 15_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.7.1 Mobile/15E148 Safari/604.1',
    expect: {
      name: 'iPadOS',
      version: '15.7.1',
      type: 'iPadOS',
    },
  },
  ipados16: {
    ua: 'Mozilla/5.0 (iPad; CPU OS 16_7_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.7.2 Mobile/15E148 Safari/604.1',
    expect: {
      name: 'iPadOS',
      version: '16.7.2',
      type: 'iPadOS',
    },
  },
  ipados17: {
    ua: 'Mozilla/5.0 (iPad; CPU OS 17_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2.1 Mobile/15E148 Safari/604.1',
    expect: {
      name: 'iPadOS',
      version: '17.2.1',
      type: 'iPadOS',
    },
  },
  ipados18: {
    ua: 'Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1',
    expect: {
      name: 'iPadOS',
      version: '18.0',
      type: 'iPadOS',
    },
  },
  macos13: {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_6_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15',
    expect: {
      name: 'macOS',
      version: '13.6.3',
      type: 'macOS',
    },
  },
  macos14: {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_2_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2.1 Safari/605.1.15',
    expect: {
      name: 'macOS',
      version: '14.2.1',
      type: 'macOS',
    },
  },
  macos15: {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 15_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15',
    expect: {
      name: 'macOS',
      version: '15.0',
      type: 'macOS',
    },
  },
};

export const devices = {
  iphone: {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
    expect: {
      type: DeviceType.Phone,
      vendor: 'Apple',
      model: '',
    },
  },
  ipad: {
    ua: 'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X)',
    expect: {
      type: DeviceType.Tablet,
      vendor: 'Apple',
      model: 'iPad',
    },
  },
  desktop: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    expect: {
      type: 'desktop',
      vendor: '',
      model: '',
    },
  },
  ipadPro: {
    ua: 'Mozilla/5.0 (iPad; CPU OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Mobile/15E148 Safari/604.1 Model/iPad Pro',
    expect: {
      type: 'tablet',
      vendor: 'Apple',
      model: 'iPad Pro',
    },
  },
  androidTablet: {
    ua: 'Mozilla/5.0 (Linux; Android 13; SM-T870) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    expect: {
      type: 'tablet',
      vendor: 'Samsung',
      model: 'SM-T870',
    },
  },
  huaweiPC: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 HuaweiComputer',
    expect: {
      type: 'desktop',
      vendor: 'Huawei',
      model: '',
    },
  },
  huaweiPad: {
    ua: 'Mozilla/5.0 (Linux; Android 12; BAH3-W09) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    expect: {
      type: 'tablet',
      vendor: 'Huawei',
      model: 'MatePad',
    },
  },
  huaweiPhone: {
    ua: 'Mozilla/5.0 (Linux; Android 10; NOH-AN00)',
    expect: {
      type: DeviceType.Phone,
      vendor: 'Huawei',
      model: 'NOH-AN00',
    },
  },
  xiaomiPhone: {
    ua: 'Mozilla/5.0 (Linux; Android 13; M2012K11AC) AppleWebKit/537.36 (KHTML, like Gecko)',
    expect: {
      type: DeviceType.Phone,
      vendor: 'Xiaomi',
      model: 'M2012K11AC',
    },
  },
  xiaomiPad: {
    ua: 'Mozilla/5.0 (Linux; Android 13; 23046RP50C) AppleWebKit/537.36 (KHTML, like Gecko)',
    expect: {
      type: DeviceType.Tablet,
      vendor: 'Xiaomi',
      model: 'Pad 6',
    },
  },
  xiaomiPC: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 XiaomiComputer',
    expect: {
      type: DeviceType.Desktop,
      vendor: 'Xiaomi',
      model: '',
    },
  },
  smartTV: {
    ua: 'Mozilla/5.0 (SMART-TV; Linux; Tizen 4.0)',
    expect: {
      type: DeviceType.SmartTV,
      vendor: 'Samsung',
      model: '',
    },
  },
  wearable: {
    ua: 'Mozilla/5.0 (Linux; Android 9; HUAWEI Watch GT 2 Pro)',
    expect: {
      type: DeviceType.Wearable,
      vendor: 'Huawei',
      model: 'Watch GT 2 Pro',
    },
  },
  huaweiWatch: {
    ua: 'Mozilla/5.0 (Linux; Android 9; HUAWEI Watch GT 2 Pro)',
    expect: {
      type: DeviceType.Wearable,
      vendor: 'Huawei',
      model: 'Watch GT 2 Pro',
    },
  },
  playstation5: {
    ua: 'Mozilla/5.0 (PlayStation; PlayStation 5/2.26)',
    expect: {
      type: DeviceType.Console,
      vendor: 'Sony',
      model: 'PlayStation 5',
    },
  },
};
