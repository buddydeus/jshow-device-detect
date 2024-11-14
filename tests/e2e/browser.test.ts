import { DeviceDetector } from '@/core/DeviceDetector';
import { browsers } from '../fixtures/user-agents';

describe('Browser Detection', () => {
  Object.entries(browsers).forEach(([name, data]) => {
    it(`should detect ${name} browser correctly`, () => {
      const detector = new DeviceDetector(data.ua);
      const result = detector.getDeviceInfo().browser;

      expect(result.name).toBe(data.expect.name);
      expect(result.version).toBe(data.expect.version);
      expect(result.type).toBe(data.expect.type);
    });
  });

  it('should handle unknown browser', () => {
    const detector = new DeviceDetector('Unknown Browser');
    const result = detector.getDeviceInfo().browser;

    expect(result.name).toBe('unknown');
    expect(result.type).toBe('unknown');
  });
});
