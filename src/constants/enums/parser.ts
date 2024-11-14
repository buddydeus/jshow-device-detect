/**
 * 解析器字段枚举
 * @enum {string}
 */
export enum ParserField {
  /** 名称字段 */
  NAME = 'name',
  /** 版本字段 */
  VERSION = 'version',
  /** 主版本号字段 */
  MAJOR = 'major',
  /** 厂商字段 */
  VENDOR = 'vendor',
  /** 型号字段 */
  MODEL = 'model',
  /** 类型字段 */
  TYPE = 'type',
  /** CPU架构字段 */
  ARCHITECTURE = 'architecture',
  /** 系列字段 */
  FAMILY = 'family',
  /** 描述字段 */
  DESCRIPTION = 'description',
  /** 代号字段 */
  CODENAME = 'codename',
}

/**
 * 解析器类型枚举
 * @enum {string}
 */
export enum ParserType {
  /** 浏览器解析器 */
  BROWSER = 'browser',
  /** CPU解析器 */
  CPU = 'cpu',
  /** 设备解析器 */
  DEVICE = 'device',
  /** 引擎解析器 */
  ENGINE = 'engine',
  /** 操作系统解析器 */
  OS = 'os',
}

/**
 * 设备类型标识枚举
 * @enum {string}
 */
export enum DeviceFlag {
  /** 移动设备 */
  MOBILE = 'mobile',
  /** 平板设备 */
  TABLET = 'tablet',
  /** 智能电视 */
  SMARTTV = 'smarttv',
  /** 游戏主机 */
  CONSOLE = 'console',
  /** 可穿戴设备 */
  WEARABLE = 'wearable',
  /** 嵌入式设备 */
  EMBEDDED = 'embedded',
}

/**
 * 浏览器引擎标识枚举
 * @enum {string}
 */
export enum EngineFlag {
  /** WebKit引擎 */
  WEBKIT = 'webkit',
  /** Gecko引擎 */
  GECKO = 'gecko',
  /** Presto引擎 */
  PRESTO = 'presto',
  /** Trident引擎 */
  TRIDENT = 'trident',
  /** Blink引擎 */
  BLINK = 'blink',
  /** EdgeHTML引擎 */
  EDGEHTML = 'edgehtml',
}

/**
 * 操作系统标识枚举
 * @enum {string}
 */
export enum OSFlag {
  /** Windows系统 */
  WINDOWS = 'windows',
  /** macOS系统 */
  MAC = 'mac',
  /** iOS系统 */
  IOS = 'ios',
  /** 安卓系统 */
  ANDROID = 'android',
  /** Linux系统 */
  LINUX = 'linux',
  /** Chrome OS系统 */
  CHROME_OS = 'chromeos',
  /** Windows Phone系统 */
  WINDOWS_PHONE = 'windowsphone',
}
