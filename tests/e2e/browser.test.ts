import { DeviceDetector } from '@/core/DeviceDetector';
import { BROWSER_EXAMPLES } from '../fixtures/user-agents';
import { EngineType } from '@/constants';

describe('浏览器和引擎检测', () => {
  describe('浏览器检测', () => {
    Object.entries(BROWSER_EXAMPLES).forEach(([name, data]) => {
      it(`应正确识别 ${name} 浏览器`, () => {
        const detector = new DeviceDetector(data.ua);
        const result = detector.getDeviceInfo().browser;

        expect(result.name).toBe(data.expect.name);
        expect(result.version).toBe(data.expect.version);
        expect(result.type).toBe(data.expect.type);
        expect(result.engine).toBe(data.expect.engine);
      });
    });

    it('应处理未知浏览器', () => {
      const detector = new DeviceDetector('Unknown Browser');
      const result = detector.getDeviceInfo().browser;

      expect(result.name).toBe('unknown');
      expect(result.type).toBe('unknown');
      expect(result.engine).toBe(EngineType.Unknown);
    });
  });
});
