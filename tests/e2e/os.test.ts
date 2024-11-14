import { DeviceDetector } from '@/core/DeviceDetector';
import { operatingSystems } from '../fixtures/user-agents';

describe('Operating System Detection', () => {
  Object.entries(operatingSystems).forEach(([name, data]) => {
    it(`should detect ${name} OS correctly`, () => {
      const detector = new DeviceDetector(data.ua);
      const result = detector.getDeviceInfo().os;

      expect(result.name).toBe(data.expect.name);
      expect(result.version).toBe(data.expect.version);
      expect(result.type).toBe(data.expect.type);
    });
  });

  it('should handle unknown OS', () => {
    const detector = new DeviceDetector('Unknown OS');
    const result = detector.getDeviceInfo().os;

    expect(result.name).toBe('unknown');
    expect(result.type).toBe('unknown');
  });
});
