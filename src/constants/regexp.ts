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
