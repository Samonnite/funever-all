/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */

/**
 * 日志类型
 */
export type BlockLoggerType = (typeof BlockLoggerType)[keyof typeof BlockLoggerType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BlockLoggerType = {
  error: 'error',
  info: 'info',
  waring: 'waring',
} as const;
