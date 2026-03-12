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
 * 用户押注状态
 */
export type AdminUserGuessPageStatus =
  (typeof AdminUserGuessPageStatus)[keyof typeof AdminUserGuessPageStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AdminUserGuessPageStatus = {
  wait: 'wait',
  win: 'win',
  loss: 'loss',
  draw: 'draw',
} as const;
