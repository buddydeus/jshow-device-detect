import { DeviceType, ParserField as Field } from './enums';

/** 预定义设备匹配规则 */
export const DEVICE_PATTERNS = [
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
    pattern: /huaweicomputer/i,
    device: { vendor: 'Huawei', type: DeviceType.Desktop },
  },
  {
    pattern: /bah3-w09/i,
    device: { vendor: 'Huawei', model: 'MatePad', type: DeviceType.Tablet },
  },
  {
    pattern: /noh-an00/i,
    device: {
      type: DeviceType.Phone,
      vendor: 'Huawei',
      model: 'NOH-AN00',
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
    pattern: /pixel\s(\d+)/i,
    device: {
      type: DeviceType.Phone,
      vendor: 'Google',
      model: (matches) => `Pixel ${matches[1]}`,
    },
  },
  {
    pattern: /ipad pro/i,
    device: { vendor: 'Apple', model: 'iPad Pro', type: DeviceType.Tablet },
  },
  {
    pattern: /iphone/i,
    device: {
      type: DeviceType.Phone,
      vendor: 'Apple',
      model: '',
    },
  },
  {
    pattern: /ipad/i,
    device: { type: DeviceType.Tablet, vendor: 'Apple', model: 'iPad' },
  },
] as const;

export const REGEXPS = {
  browser: [
    // Edge
    [
      /edg(?:e|ios|a)?\/(\d+(?:\.\d+)+)/i,
      [[Field.NAME, 'Edge'], Field.VERSION],
    ],

    // Chrome
    [/chrome\/(\d+(?:\.\d+)+)/i, [[Field.NAME, 'Chrome'], Field.VERSION]],

    // Firefox
    [/firefox\/(\d+(?:\.\d+)+)/i, [[Field.NAME, 'Firefox'], Field.VERSION]],

    // Safari
    [
      /version\/(\d+(?:\.\d+)+).*safari/i,
      [[Field.NAME, 'Safari'], Field.VERSION],
    ],
  ],

  os: [
    // Windows
    [/windows nt (\d+\.\d+)/i, [[Field.NAME, 'Windows'], Field.VERSION]],

    // macOS
    [
      /mac os x (\d+[._]\d+(?:[._]\d+)?)/i,
      [
        [Field.NAME, 'Mac OS'],
        [Field.VERSION, /_/g, '.'],
      ],
    ],

    // iOS
    [
      /os (\d+[._]\d+(?:[._]\d+)?) like mac os x/i,
      [
        [Field.NAME, 'iOS'],
        [Field.VERSION, /_/g, '.'],
      ],
    ],

    // Android
    [/android[ \/](\d+(?:\.\d+)*)/i, [[Field.NAME, 'Android'], Field.VERSION]],
  ],

  device: [
    // iPad Pro
    [
      /ipad pro/i,
      [
        [Field.MODEL, 'iPad Pro'],
        [Field.VENDOR, 'Apple'],
        [Field.TYPE, 'tablet'],
      ],
    ],

    // Samsung Tablet
    [
      /sm-t\d{3}/i,
      [
        [Field.MODEL, '$1'],
        [Field.VENDOR, 'Samsung'],
        [Field.TYPE, 'tablet'],
      ],
    ],

    // Smart TV
    [
      /smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv/i,
      [[Field.TYPE, 'smarttv']],
    ],

    // Game Console
    [/playstation|xbox|nintendo|wii/i, [[Field.TYPE, 'console']]],

    // Wearable
    [/watch|glass|gear|fit/i, [[Field.TYPE, 'wearable']]],
  ],

  engine: [
    // WebKit
    [/webkit\/(\d+(?:\.\d+)+)/i, [[Field.NAME, 'WebKit'], Field.VERSION]],

    // Gecko
    [/gecko\/(\d+(?:\.\d+)+)/i, [[Field.NAME, 'Gecko'], Field.VERSION]],

    // Blink
    [/blink\/(\d+(?:\.\d+)+)/i, [[Field.NAME, 'Blink'], Field.VERSION]],

    // EdgeHTML
    [/edge\/(\d+(?:\.\d+)+)/i, [[Field.NAME, 'EdgeHTML'], Field.VERSION]],
  ],
};
