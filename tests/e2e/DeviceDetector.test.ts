import { DeviceDetector } from '@/core/DeviceDetector';
import { devices } from '../fixtures/user-agents';

describe('DeviceDetector 类测试', () => {
  describe('设备信息缓存机制', () => {
    let detector: DeviceDetector;

    beforeEach(() => {
      detector = new DeviceDetector(devices.desktop.ua);
    });

    it('多次获取设备信息应返回相同引用', () => {
      const info1 = detector.getDeviceInfo();
      const info2 = detector.getDeviceInfo();

      expect(info1).toBe(info2);
    });

    it('使用新UA不应影响原有实例', () => {
      const originalInfo = detector.getDeviceInfo();
      const newInfo = detector.getDeviceInfo(devices.iphone.ua);

      expect(originalInfo).not.toEqual(newInfo);
      expect(detector.getDeviceInfo()).toBe(originalInfo);
    });
  });

  describe('公共方法测试', () => {
    it('设备类型判断方法应正确工作', () => {
      const detector = new DeviceDetector(devices.iphone.ua);

      expect(detector.isMobile()).toBe(true);
      expect(detector.isDesktop()).toBe(false);
      expect(detector.isPad()).toBe(false);
      expect(detector.isWearable()).toBe(false);
    });

    it('传入新UA时应返回正确结果', () => {
      const detector = new DeviceDetector(devices.desktop.ua);

      expect(detector.isMobile(devices.iphone.ua)).toBe(true);
      expect(detector.isMobile()).toBe(false);
    });
  });
});
