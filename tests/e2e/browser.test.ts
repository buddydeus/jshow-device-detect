import { DeviceDetector } from '@/core/DeviceDetector';
import { browsers } from '../fixtures/user-agents';
import { EngineType } from '@/constants';

describe('浏览器和引擎检测', () => {
  describe('浏览器检测', () => {
    Object.entries(browsers).forEach(([name, data]) => {
      it(`应正确识别 ${name} 浏览器`, () => {
        const detector = new DeviceDetector(data.ua);
        const result = detector.getDeviceInfo().browser;

        expect(result.name).toBe(data.expect.name);
        expect(result.version).toBe(data.expect.version);
        expect(result.type).toBe(data.expect.type);
      });
    });

    it('应正确识别 Opera 浏览器', () => {
      const detector = new DeviceDetector(browsers.opera.ua);
      const info = detector.getDeviceInfo();
      expect(info.browser.name).toBe('Opera');
      expect(info.browser.type).toBe('Opera');
    });

    it('应正确识别微信小程序环境', () => {
      const detector = new DeviceDetector(browsers.wechatMiniProgram.ua);
      const info = detector.getDeviceInfo();
      expect(info.browser.name).toBe('WeChat Mini Program');
      expect(info.browser.type).toBe('MiniProgram');
    });

    it('应处理未知浏览器', () => {
      const detector = new DeviceDetector('Unknown Browser');
      const result = detector.getDeviceInfo().browser;

      expect(result.name).toBe('unknown');
      expect(result.type).toBe('unknown');
    });
  });

  describe('浏览器引擎检测', () => {
    it('应正确识别 WebKit 引擎', () => {
      const detector = new DeviceDetector(browsers.safari.ua);
      expect(detector.getDeviceInfo().engine.type).toBe(EngineType.WebKit);
    });

    it('应正确识别 Gecko 引擎', () => {
      const detector = new DeviceDetector(browsers.firefox.ua);
      expect(detector.getDeviceInfo().engine.type).toBe(EngineType.Gecko);
    });

    it('应正确识别 Blink 引擎', () => {
      const detector = new DeviceDetector(browsers.chrome.ua);
      expect(detector.getDeviceInfo().engine.type).toBe(EngineType.Blink);
    });

    it('应正确识别 EdgeHTML 引擎', () => {
      const detector = new DeviceDetector(browsers.edgeHtml.ua);
      expect(detector.getDeviceInfo().engine.type).toBe(EngineType.EdgeHTML);
    });

    it('应处理未知引擎', () => {
      const detector = new DeviceDetector('Unknown Engine');
      expect(detector.getDeviceInfo().engine.type).toBe(EngineType.Unknown);
    });
  });
});
