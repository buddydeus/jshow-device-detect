/**
 * 设备类型枚举
 * @enum {string}
 */
export enum DeviceType {
  /** 手机设备 */
  Phone = 'phone',
  /** 平板设备 */
  Tablet = 'tablet',
  /** 桌面设备 */
  Desktop = 'desktop',
  /** 智能电视 */
  SmartTV = 'smarttv',
  /** 游戏主机 */
  Console = 'console',
  /** 可穿戴设备 */
  Wearable = 'wearable',
}

/**
 * 浏览器类型枚举
 * @enum {string}
 */
export enum BrowserType {
  /** 谷歌浏览器 */
  Chrome = 'Chrome',
  /** 火狐浏览器 */
  Firefox = 'Firefox',
  /** Safari浏览器 */
  Safari = 'Safari',
  /** Edge浏览器 */
  Edge = 'Edge',
  /** IE浏览器 */
  IE = 'Internet Explorer',
  /** Opera浏览器 */
  Opera = 'Opera',
  /** Opera迷你版 */
  OperaMini = 'Opera Mini',
  /** Opera触屏版 */
  OperaTouch = 'Opera Touch',
  /** UC浏览器 */
  UCBrowser = 'UCBrowser',
  /** QQ浏览器 */
  QQBrowser = 'QQBrowser',
  /** 百度浏览器 */
  Baidu = 'Baidu Browser',
  /** 遨游浏览器 */
  Maxthon = 'Maxthon',
  /** 搜狗浏览器 */
  SouGou = 'SouGou Browser',
  /** 微信内置浏览器 */
  WeChat = 'WeChat',
  /** 未知浏览器 */
  Unknown = 'unknown',
}

/**
 * 操作系统类型枚举
 * @enum {string}
 */
export enum OSType {
  /** Windows系统 */
  Windows = 'Windows',
  /** Windows Phone系统 */
  WindowsPhone = 'Windows Phone',
  /** macOS系统 */
  MacOS = 'Mac OS',
  /** iPadOS系统 */
  IPadOS = 'iPadOS',
  /** iOS系统 */
  IOS = 'iOS',
  /** 安卓系统 */
  Android = 'Android',
  /** Linux系统 */
  Linux = 'Linux',
  /** Chrome OS系统 */
  ChromeOS = 'Chrome OS',
  /** 黑莓系统 */
  BlackBerry = 'BlackBerry',
  /** Firefox OS系统 */
  FirefoxOS = 'Firefox OS',
  /** Symbian系统 */
  Symbian = 'Symbian',
  /** WebOS系统 */
  WebOS = 'webOS',
  /** 未知系统 */
  Unknown = 'unknown',
}

/**
 * 浏览器引擎类型枚举
 * @enum {string}
 */
export enum EngineType {
  /** WebKit引擎 */
  WebKit = 'WebKit',
  /** Gecko引擎 */
  Gecko = 'Gecko',
  /** Presto引擎 */
  Presto = 'Presto',
  /** Trident引擎 */
  Trident = 'Trident',
  /** EdgeHTML引擎 */
  EdgeHTML = 'EdgeHTML',
  /** Blink引擎 */
  Blink = 'Blink',
  /** 未知引擎 */
  Unknown = 'unknown',
}

/**
 * CPU架构类型枚举
 * @enum {string}
 */
export enum CPUArchitecture {
  /** x86架构 */
  x86 = 'x86',
  /** x64架构 */
  x64 = 'x64',
  /** ARM架构 */
  ARM = 'arm',
  /** ARM64架构 */
  ARM64 = 'arm64',
  /** 未知架构 */
  Unknown = 'unknown',
}

/**
 * 公司类型枚举
 * @enum {string}
 */
export enum CompanyType {
  /** 苹果公司 */
  Apple = 'apple',
  /** 华为公司 */
  Huawei = 'huawei',
  /** 小米公司 */
  Xiaomi = 'xiaomi',
  /** 黑莓公司 */
  BlackBerry = 'blackberry',
  /** 谷歌公司 */
  Google = 'google',
  /** 腾讯公司 */
  Tencent = 'tencent',
  /** 三星公司 */
  Samsung = 'samsung',
  /** 未知公司 */
  Unknown = 'unknown',
}
