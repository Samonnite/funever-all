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
 * 链上状态：失败时显示重试按钮
 */
export type GameGuessBlockStatus = (typeof GameGuessBlockStatus)[keyof typeof GameGuessBlockStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameGuessBlockStatus = {
  wait: 'wait',
  scuess: 'scuess',
  fail: 'fail',
} as const;
