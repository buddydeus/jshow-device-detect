import { ParserField as Field } from './enums';

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
    // iPad
    [
      /\((ipad);/i,
      [Field.MODEL, [Field.VENDOR, 'Apple'], [Field.TYPE, 'tablet']],
    ],

    // iPhone
    [
      /\((iphone);/i,
      [Field.MODEL, [Field.VENDOR, 'Apple'], [Field.TYPE, 'mobile']],
    ],

    // Android Tablet
    [/android.+\s(tablet)\s/i, [[Field.TYPE, 'tablet']]],

    // Android Mobile
    [/android.+\s(mobile)\s/i, [[Field.TYPE, 'mobile']]],

    // Default Desktop
    [/.*/i, [[Field.TYPE, 'desktop']]],
  ],
} as const;
