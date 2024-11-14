import { DeviceDetector } from '@/core/DeviceDetector';
import { OS_EXAMPLES } from '../fixtures/user-agents';
import { OSType } from '@/constants';

describe('操作系统检测', () => {
  Object.entries(OS_EXAMPLES).forEach(([name, data]) => {
    it(`应正确识别 ${name} 操作系统`, () => {
      const detector = new DeviceDetector(data.ua);
      const result = detector.getDeviceInfo().os;

      expect(result.name).toBe(data.expect.name);
      expect(result.version).toBe(data.expect.version);
      expect(result.type).toBe(data.expect.type);
    });
  });

  describe('Apple 操作系统版本检测', () => {
    const iosVersions = ['ios13', 'ios14', 'ios15', 'ios16', 'ios17', 'ios18'];
    const ipadosVersions = ['ipados15', 'ipados16', 'ipados17', 'ipados18'];
    const macosVersions = ['macos13', 'macos14', 'macos15'];

    describe('iOS 版本检测', () => {
      iosVersions.forEach((version) => {
        it(`应正确识别 ${version}`, () => {
          const detector = new DeviceDetector(OS_EXAMPLES[version].ua);
          const result = detector.getDeviceInfo().os;

          expect(result.name).toBe('iOS');
          expect(result.version).toBe(OS_EXAMPLES[version].expect.version);
          expect(result.type).toBe(OSType.IOS);
        });
      });
    });

    describe('iPadOS 版本检测', () => {
      ipadosVersions.forEach((version) => {
        it(`应正确识别 ${version}`, () => {
          const detector = new DeviceDetector(OS_EXAMPLES[version].ua);
          const result = detector.getDeviceInfo().os;

          expect(result.name).toBe('iPadOS');
          expect(result.version).toBe(OS_EXAMPLES[version].expect.version);
          expect(result.type).toBe(OSType.IPadOS);
        });
      });
    });

    describe('macOS 版本检测', () => {
      macosVersions.forEach((version) => {
        it(`应正确识别 ${version}`, () => {
          const detector = new DeviceDetector(OS_EXAMPLES[version].ua);
          const result = detector.getDeviceInfo().os;

          expect(result.name).toBe('macOS');
          expect(result.version).toBe(OS_EXAMPLES[version].expect.version);
          expect(result.type).toBe(OSType.MacOS);
        });
      });
    });
  });
});
