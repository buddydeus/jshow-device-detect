import { DeviceDetector } from '@/core/DeviceDetector';
import { devices } from '../fixtures/user-agents';

describe('Device Detection', () => {
  Object.entries(devices).forEach(([name, data]) => {
    it(`should detect ${name} device correctly`, () => {
      const detector = new DeviceDetector(data.ua);
      const result = detector.getDeviceInfo().device;

      expect(result.type).toBe(data.expect.type);
      expect(result.vendor).toBe(data.expect.vendor);
      expect(result.model).toBe(data.expect.model);
    });
  });

  describe('Device Type Helpers', () => {
    it('should detect mobile device', () => {
      const detector = new DeviceDetector(devices.iphone.ua);
      expect(detector.isMobile()).toBe(true);
      expect(detector.isTablet()).toBe(false);
      expect(detector.isDesktop()).toBe(false);
    });

    it('should detect tablet device', () => {
      const detector = new DeviceDetector(devices.ipad.ua);
      expect(detector.isMobile()).toBe(false);
      expect(detector.isTablet()).toBe(true);
      expect(detector.isDesktop()).toBe(false);
    });

    it('should detect desktop device', () => {
      const detector = new DeviceDetector(devices.desktop.ua);
      expect(detector.isMobile()).toBe(false);
      expect(detector.isTablet()).toBe(false);
      expect(detector.isDesktop()).toBe(true);
    });
  });
});
