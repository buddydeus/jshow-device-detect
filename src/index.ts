/**
 * 设备检测工具库
 * @module DeviceDetector
 */

import { DeviceDetector } from './core/DeviceDetector';

export { DeviceDetector } from './core/DeviceDetector';
export * from './types';
export * from './constants/enums/device';

// 创建默认实例
const detector = new DeviceDetector();

/**
 * 检查当前设备是否为移动设备
 * @returns {boolean} 是否为移动设备
 */
export const isMobile = () => detector.isMobile();

/**
 * 检查当前设备是否为平板设备
 * @returns {boolean} 是否为平板设备
 */
export const isTablet = () => detector.isTablet();

/**
 * 检查当前设备是否为桌面设备
 * @returns {boolean} 是否为桌面设备
 */
export const isDesktop = () => detector.isDesktop();

/**
 * 获取当前设备的完整信息
 * @returns {DeviceInfo} 设备信息对象
 */
export const getDeviceInfo = () => detector.getDeviceInfo();
