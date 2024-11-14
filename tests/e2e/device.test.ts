import { DeviceDetector } from '@/core/DeviceDetector';
import { DEVICE_EXAMPLES } from '../fixtures/user-agents';
import { DeviceType } from '@/constants';

describe('设备类型检测', () => {
  Object.entries(DEVICE_EXAMPLES).forEach(([name, data]) => {
    it(`应正确识别 ${name} 设备`, () => {
      const detector = new DeviceDetector(data.ua);
      const result = detector.getDeviceInfo().device;

      expect(result.type).toBe(data.expect.type);
      expect(result.vendor).toBe(data.expect.vendor);
      expect(result.model).toBe(data.expect.model);
      expect(result.company).toBe(data.expect.company);
    });
  });

  describe('设备类型辅助函数', () => {
    it('应正确识别移动设备', () => {
      const phoneDetector = new DeviceDetector(DEVICE_EXAMPLES.iphone.ua);
      expect(phoneDetector.isPhone()).toBe(true);
      expect(phoneDetector.isMobile()).toBe(true);

      const tabletDetector = new DeviceDetector(DEVICE_EXAMPLES.ipad.ua);
      expect(tabletDetector.isPad()).toBe(true);
      expect(tabletDetector.isMobile()).toBe(true);

      const desktopDetector = new DeviceDetector(DEVICE_EXAMPLES.desktop.ua);
      expect(desktopDetector.isDesktop()).toBe(true);
      expect(desktopDetector.isMobile()).toBe(false);
    });

    it('应正确识别特殊设备', () => {
      // 可穿戴设备
      const wearableDetector = new DeviceDetector(
        DEVICE_EXAMPLES.huaweiWatch.ua
      );
      expect(wearableDetector.isWearable()).toBe(true);
      expect(wearableDetector.getDeviceInfo().device.type).toBe(
        DeviceType.Wearable
      );
    });
  });
});
