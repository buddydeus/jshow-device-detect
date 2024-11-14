import { DeviceType, CompanyType, DEVICE_PATTERNS } from '../constants';
import type { Device } from '../types';

export class DeviceParser {
  static parse(ua: string): Device {
    for (const { pattern, device } of DEVICE_PATTERNS) {
      if (pattern.test(ua)) {
        return {
          type: device.type,
          vendor: device.vendor,
          model: device.model,
          company: device.company || CompanyType.Unknown,
        };
      }
    }

    return {
      type: DeviceType.Desktop,
      vendor: '',
      model: '',
      company: CompanyType.Unknown,
    };
  }

  private static detectCompany(vendor: string): CompanyType {
    const vendorLower = vendor.toLowerCase();

    const companyMap = {
      xiaomi: CompanyType.Xiaomi,
      huawei: CompanyType.Huawei,
      apple: CompanyType.Apple,
      samsung: CompanyType.Samsung,
      google: CompanyType.Google,
    };

    return companyMap[vendorLower] || CompanyType.Unknown;
  }

  private static getCompanyType(vendor: string): CompanyType {
    const companyMap: Record<string, CompanyType> = {
      Apple: CompanyType.Apple,
      Huawei: CompanyType.Huawei,
      Xiaomi: CompanyType.Xiaomi,
      Samsung: CompanyType.Samsung,
      Google: CompanyType.Google,
      BlackBerry: CompanyType.BlackBerry,
    };

    return companyMap[vendor] || CompanyType.Unknown;
  }
}
