import { DeviceDetector } from '@/core/DeviceDetector';
import { CompanyType } from '@/constants';
import {
  BROWSER_EXAMPLES,
  DEVICE_EXAMPLES,
  OS_EXAMPLES,
} from 'tests/fixtures/user-agents';

describe('公司类型检测', () => {
  it('应正确识别苹果设备', () => {
    const detector = new DeviceDetector(DEVICE_EXAMPLES.iphone.ua);
    const info = detector.getDeviceInfo();

    expect(info.device.company).toBe(CompanyType.Apple);
    expect(info.device.vendor).toBe('Apple');

    expect(detector.getDeviceInfo(DEVICE_EXAMPLES.ipad.ua).device.company).toBe(
      CompanyType.Apple
    );
    // expect(
    //   detector.getDeviceInfo(DEVICE_EXAMPLES.ipadPro.ua).device.company
    // ).toBe(CompanyType.Apple);
    expect(
      detector.getDeviceInfo(BROWSER_EXAMPLES.safari.ua).device.company
    ).toBe(CompanyType.Apple);
    expect(detector.getDeviceInfo(OS_EXAMPLES.macos14.ua).device.company).toBe(
      CompanyType.Apple
    );
  });

  it('应正确识别华为设备', () => {
    const detector = new DeviceDetector(DEVICE_EXAMPLES.huaweiPhone.ua);
    const info = detector.getDeviceInfo();

    expect(info.device.company).toBe(CompanyType.Huawei);
    expect(info.device.vendor).toBe('Huawei');

    expect(
      detector.getDeviceInfo(DEVICE_EXAMPLES.huaweiPC.ua).device.company
    ).toBe(CompanyType.Huawei);
    expect(
      detector.getDeviceInfo(DEVICE_EXAMPLES.huaweiWatch.ua).device.company
    ).toBe(CompanyType.Huawei);
  });

  it('应正确识别小米设备', () => {
    const detector = new DeviceDetector(DEVICE_EXAMPLES.xiaomiPhone.ua);
    const info = detector.getDeviceInfo();

    expect(info.device.company).toBe(CompanyType.Xiaomi);
    expect(info.device.vendor).toBe('Xiaomi');

    expect(
      detector.getDeviceInfo(DEVICE_EXAMPLES.xiaomiPC.ua).device.company
    ).toBe(CompanyType.Xiaomi);
    expect(
      detector.getDeviceInfo(DEVICE_EXAMPLES.xiaomiPad.ua).device.company
    ).toBe(CompanyType.Xiaomi);
  });

  it('应正确识别腾讯产品', () => {
    const detector = new DeviceDetector(BROWSER_EXAMPLES.qqbrowser.ua);
    const info = detector.getDeviceInfo();

    expect(info.device.company).toBe(CompanyType.Tencent);

    expect(
      detector.getDeviceInfo(BROWSER_EXAMPLES.wechatMiniProgram.ua).device
        .company
    ).toBe(CompanyType.Tencent);
  });

  it('应正确识别谷歌设备', () => {
    const detector = new DeviceDetector(
      'Mozilla/5.0 (Linux; Android 14; Pixel 8)'
    );
    const info = detector.getDeviceInfo();

    expect(info.device.company).toBe(CompanyType.Google);
    expect(info.device.vendor).toBe('Google');
  });

  it('应正确识别三星设备', () => {
    const detector = new DeviceDetector(
      'Mozilla/5.0 (Linux; Android 13; SM-T870)'
    );
    const info = detector.getDeviceInfo();

    expect(info.device.company).toBe(CompanyType.Samsung);
    expect(info.device.vendor).toBe('Samsung');
  });

  it('应正确识别黑莓设备', () => {
    const detector = new DeviceDetector(
      'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.35+ (KHTML, like Gecko) Version/10.3.3.2205 Mobile Safari/537.35+'
    );
    const info = detector.getDeviceInfo();

    expect(info.device.company).toBe(CompanyType.BlackBerry);
  });

  it('应处理未知公司', () => {
    const detector = new DeviceDetector('Unknown Device');
    const info = detector.getDeviceInfo();

    expect(info.device.company).toBe(CompanyType.Unknown);
    expect(info.device.vendor).toBe('');
  });
});
