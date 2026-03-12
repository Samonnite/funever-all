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
 * 用户转账状态
 */
export type AdminUserGuessBlockStatus =
  (typeof AdminUserGuessBlockStatus)[keyof typeof AdminUserGuessBlockStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AdminUserGuessBlockStatus = {
  wait: 'wait',
  scuess: 'scuess',
  fail: 'fail',
} as const;
