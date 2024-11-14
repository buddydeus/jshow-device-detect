/**
 * 设备检测工具库
 * @module device-detector
 */

import { DeviceDetector } from './core';

export { DeviceDetector };

export type { DeviceInfo, Device, OS, Browser } from './types';
export { DeviceType, BrowserType, OSType, CompanyType } from './constants';

/**
 * 默认的设备检测器实例
 * @private
 */
const detector = new DeviceDetector();

/**
 * 获取设备的完整信息
 * @param {string} [ua] - 可选的用户代理字符串
 * @returns {DeviceInfo} 包含设备、操作系统和浏览器的详细信息
 */
export const getDeviceInfo = (ua?: string) => detector.getDeviceInfo(ua);

/**
 * 检查设备是否为桌面设备
 * @param {string} [ua] - 可选的用户代理字符串
 * @returns {boolean} 如果是桌面设备返回 true，否则返回 false
 */
export const isDesktop = (ua?: string) => detector.isDesktop(ua);

/**
 * 检查设备是否为移动设备
 * @param {string} [ua] - 可选的用户代理字符串
 * @returns {boolean} 如果是移动设备返回 true，否则返回 false
 */
export const isMobile = (ua?: string) => detector.isMobile(ua);

/**
 * 检查设备是否为手机
 * @param {string} [ua] - 可选的用户代理字符串
 * @returns {boolean} 如果是手机返回 true，否则返回 false
 */
export const isPhone = (ua?: string) => detector.isPhone(ua);

/**
 * 检查设备是否为平板设备
 * @param {string} [ua] - 可选的用户代理字符串
 * @returns {boolean} 如果是平板设备返回 true，否则返回 false
 */
export const isPad = (ua?: string) => detector.isPad(ua);

/**
 * 检查设备是否为智能电视
 * @param {string} [ua] - 可选的用户代理字符串
 * @returns {boolean} 如果是智能电视返回 true，否则返回 false
 */
export const isSmartTV = (ua?: string) => detector.isSmartTV(ua);

/**
 * 检查设备是否为游戏主机
 * @param {string} [ua] - 可选的用户代理字符串
 * @returns {boolean} 如果是游戏主机返回 true，否则返回 false
 */
export const isConsole = (ua?: string) => detector.isConsole(ua);

/**
 * 检查设备是否为可穿戴设备
 * @param {string} [ua] - 可选的用户代理字符串
 * @returns {boolean} 如果是可穿戴设备返回 true，否则返回 false
 */
export const isWearable = (ua?: string) => detector.isWearable(ua);

/**
 * 默认导出的设备检测器实例
 * @type {DeviceDetector}
 */
export default detector;
