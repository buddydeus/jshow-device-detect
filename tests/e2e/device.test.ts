import { DeviceDetector } from '@/core/DeviceDetector';
import { devices } from '../fixtures/user-agents';
import { DeviceType } from '@/constants';

describe('设备类型检测', () => {
  Object.entries(devices).forEach(([name, data]) => {
    it(`应正确识别 ${name} 设备`, () => {
      const detector = new DeviceDetector(data.ua);
      const result = detector.getDeviceInfo().device;

      expect(result.type).toBe(data.expect.type);
      expect(result.vendor).toBe(data.expect.vendor);
      expect(result.model).toBe(data.expect.model);
    });
  });

  describe('设备类型辅助函数', () => {
    it('应正确识别移动设备', () => {
      // 手机设备测试
      const phoneDetector = new DeviceDetector(devices.iphone.ua);
      expect(phoneDetector.isPhone()).toBe(true);
      expect(phoneDetector.isMobile()).toBe(true);

      // 平板设备测试
      const tabletDetector = new DeviceDetector(devices.ipad.ua);
      expect(tabletDetector.isPad()).toBe(true);
      expect(tabletDetector.isMobile()).toBe(true);

      // 桌面设备测试
      const desktopDetector = new DeviceDetector(devices.desktop.ua);
      expect(desktopDetector.isDesktop()).toBe(true);
      expect(desktopDetector.isMobile()).toBe(false);
    });

    it('应正确识别可穿戴设备', () => {
      const detector = new DeviceDetector(devices.huaweiWatch.ua);
      expect(detector.isWearable()).toBe(true);
    });
  });

  describe('特殊设备类型检测', () => {
    it('应正确识别智能电视', () => {
      const detector = new DeviceDetector(devices.smartTV.ua);
      expect(detector.isSmartTV()).toBe(true);
      expect(detector.getDeviceInfo().device.type).toBe(DeviceType.SmartTV);
    });

    it('应正确识别游戏主机', () => {
      const detector = new DeviceDetector(devices.playstation5.ua);
      expect(detector.isConsole()).toBe(true);
      expect(detector.getDeviceInfo().device.type).toBe(DeviceType.Console);
    });

    it('应正确识别可穿戴设备', () => {
      const detector = new DeviceDetector(devices.huaweiWatch.ua);
      expect(detector.isWearable()).toBe(true);
      expect(detector.getDeviceInfo().device.type).toBe(DeviceType.Wearable);
    });
  });
});

describe('扩展设备类型检测', () => {
  describe('小米设备检测', () => {
    it('应正确识别小米手机', () => {
      const detector = new DeviceDetector(devices.xiaomiPhone.ua);
      const info = detector.getDeviceInfo();
      expect(info.device.type).toBe(DeviceType.Phone);
      expect(info.device.model).toBe('M2012K11AC');
    });

    it('应正确识别小米平板', () => {
      const detector = new DeviceDetector(devices.xiaomiPad.ua);
      const info = detector.getDeviceInfo();
      expect(info.device.type).toBe(DeviceType.Tablet);
      expect(info.device.model).toBe('Pad 6');
    });
  });
});
