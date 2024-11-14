import { BrowserType, BROWSER_PATTERNS } from '../constants';
import type { Browser } from '../types';

export class BrowserParser {
  static parse(ua: string): Browser {
    for (const { pattern, browser } of BROWSER_PATTERNS) {
      if (pattern.test(ua)) {
        const version = this.extractVersion(ua);
        const major = version.split('.')[0];

        return {
          name: browser.name,
          type: browser.type,
          version,
          major,
        };
      }
    }

    return {
      name: 'unknown',
      type: BrowserType.Unknown,
      version: '',
      major: '',
    };
  }

  private static extractVersion(ua: string): string {
    const versionRegex =
      /(?:Version|Browser|Chrome|Firefox|Safari)[\/\s]+([\d.]+)/i;
    const match = ua.match(versionRegex);
    return match?.[1] || '';
  }

  private static getBrowserVersion(ua: string, browser: Browser): string {
    const versionMap = {
      [BrowserType.Opera]: /OPR\/(\d+(\.\d+)*)/i,
      [BrowserType.Chrome]: /Chrome\/(\d+(\.\d+)*)/i,
      [BrowserType.Firefox]: /Firefox\/(\d+(\.\d+)*)/i,
      [BrowserType.Safari]: /Version\/(\d+(\.\d+)*)/i,
      [BrowserType.Edge]: /Edge\/(\d+(\.\d+)*)/i,
    };

    const regex = versionMap[browser.type];
    if (regex) {
      const match = ua.match(regex);
      if (match) {
        return match[1];
      }
    }
    return '';
  }
}
