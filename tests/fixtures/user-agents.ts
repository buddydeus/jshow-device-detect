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
  macos: {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15',
    expect: {
      name: 'Mac OS',
      version: '14.1',
      type: 'Mac OS',
    },
  },

  ios: {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Mobile/15E148 Safari/604.1',
    expect: {
      name: 'iOS',
      version: '17.1.1',
      type: 'iOS',
    },
  },
  android: {
    ua: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.43 Mobile Safari/537.36',
    expect: {
      name: 'Android',
      version: '14',
      type: 'Android',
    },
  },
};

export const devices = {
  desktop: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    expect: {
      type: 'desktop',
      vendor: '',
      model: '',
    },
  },
  iphone: {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Mobile/15E148 Safari/604.1',
    expect: {
      type: 'mobile',
      vendor: 'Apple',
      model: 'iPhone',
    },
  },
  ipad: {
    ua: 'Mozilla/5.0 (iPad; CPU OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15',
    expect: {
      type: 'tablet',
      vendor: 'Apple',
      model: 'iPad',
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
    ua: 'Mozilla/5.0 (Linux; Android 12; NOH-AN00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    expect: {
      type: 'mobile',
      vendor: 'Huawei',
      model: 'Mate 40 Pro',
    },
  },
};
