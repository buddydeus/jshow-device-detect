import { OSType, OS_PATTERNS } from '../constants';
import type { OS } from '../types';

export class OSParser {
  static parse(ua: string): OS {
    for (const { pattern, os } of OS_PATTERNS) {
      if (pattern.test(ua)) {
        const version = this.extractVersion(ua);

        return {
          name: os.name,
          type: os.type,
          version,
        };
      }
    }

    return {
      name: 'unknown',
      type: OSType.Unknown,
      version: '',
    };
  }

  private static extractVersion(ua: string): string {
    const versionRegex =
      /(?:Windows NT|Android|Mac OS X|CPU OS|CPU iPhone OS|CrOS\s\w+)\s+([\d._]+)/i;
    const match = ua.match(versionRegex);
    return match ? match[1].replace(/_/g, '.') : '';
  }
}
