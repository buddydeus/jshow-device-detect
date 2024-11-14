import { DeviceDetector } from '@/core/DeviceDetector';
import { operatingSystems } from '../fixtures/user-agents';
import { CPUArchitecture, OSType } from '@/constants';

describe('操作系统和CPU检测', () => {
  describe('CPU架构检测', () => {
    it('应正确识别 x86 架构', () => {
      const detector = new DeviceDetector(
        'Mozilla/5.0 (Windows NT 10.0; i686)'
      );
      expect(detector.getDeviceInfo().cpu.architecture).toBe(
        CPUArchitecture.x86
      );
    });

    it('应正确识别 x64 架构', () => {
      const detector = new DeviceDetector('Mozilla/5.0 (Windows NT 10.0; x64)');
      expect(detector.getDeviceInfo().cpu.architecture).toBe(
        CPUArchitecture.x64
      );
    });

    it('应正确识别 ARM 架构', () => {
      const detector = new DeviceDetector('Mozilla/5.0 (Linux; arm)');
      expect(detector.getDeviceInfo().cpu.architecture).toBe(
        CPUArchitecture.ARM
      );
    });

    it('应正确识别 ARM64 架构', () => {
      const detector = new DeviceDetector(
        'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)'
      );
      expect(detector.getDeviceInfo().cpu.architecture).toBe(
        CPUArchitecture.ARM64
      );
    });

    it('应处理未知架构', () => {
      const detector = new DeviceDetector('Unknown Architecture');
      expect(detector.getDeviceInfo().cpu.architecture).toBe(
        CPUArchitecture.Unknown
      );
    });
  });

  describe('操作系统检测', () => {
    Object.entries(operatingSystems).forEach(([name, data]) => {
      it(`应正确识别 ${name} 操作系统`, () => {
        const detector = new DeviceDetector(data.ua);
        const result = detector.getDeviceInfo().os;

        expect(result.name).toBe(data.expect.name);
        expect(result.version).toBe(data.expect.version);
        expect(result.type).toBe(data.expect.type);
      });
    });

    it('应处理未知操作系统', () => {
      const detector = new DeviceDetector('Unknown OS');
      const result = detector.getDeviceInfo().os;

      expect(result.name).toBe('unknown');
      expect(result.type).toBe('unknown');
    });
  });

  describe('扩展操作系统检测', () => {
    it('应正确识别 Windows Server', () => {
      const detector = new DeviceDetector(operatingSystems.windowsServer.ua);
      const info = detector.getDeviceInfo();
      expect(info.os.name).toBe('Windows Server');
      expect(info.os.type).toBe('Windows Server');
    });

    it('应正确识别 iPadOS', () => {
      const detector = new DeviceDetector(operatingSystems.ipados.ua);
      const info = detector.getDeviceInfo();
      expect(info.os.name).toBe('iPadOS');
      expect(info.os.type).toBe('iPadOS');
    });

    it('应正确识别 watchOS', () => {
      const detector = new DeviceDetector(operatingSystems.watchos.ua);
      const info = detector.getDeviceInfo();
      expect(info.os.name).toBe('watchOS');
      expect(info.os.type).toBe('watchOS');
    });
  });

  describe('Apple 操作系统版本检测', () => {
    describe('iOS 版本检测', () => {
      const iosVersions = [
        'ios13',
        'ios14',
        'ios15',
        'ios16',
        'ios17',
        'ios18',
      ];

      iosVersions.forEach((version) => {
        it(`应正确识别 ${version}`, () => {
          const detector = new DeviceDetector(operatingSystems[version].ua);
          const result = detector.getDeviceInfo().os;

          expect(result.name).toBe('iOS');
          expect(result.version).toBe(operatingSystems[version].expect.version);
          expect(result.type).toBe('iOS');
        });
      });
    });

    describe('iPadOS 版本检测', () => {
      const ipadosVersions = ['ipados15', 'ipados16', 'ipados17', 'ipados18'];

      ipadosVersions.forEach((version) => {
        it(`应正确识别 ${version}`, () => {
          const detector = new DeviceDetector(operatingSystems[version].ua);
          const result = detector.getDeviceInfo().os;

          expect(result.name).toBe('iPadOS');
          expect(result.version).toBe(operatingSystems[version].expect.version);
          expect(result.type).toBe('iPadOS');
        });
      });
    });

    describe('macOS 版本检测', () => {
      const macosVersions = ['macos13', 'macos14', 'macos15'];

      macosVersions.forEach((version) => {
        it(`应正确识别 ${version}`, () => {
          const detector = new DeviceDetector(operatingSystems[version].ua);
          const result = detector.getDeviceInfo().os;

          expect(result.name).toBe('macOS');
          expect(result.version).toBe(operatingSystems[version].expect.version);
          expect(result.type).toBe('macOS');
        });
      });
    });
  });
});
