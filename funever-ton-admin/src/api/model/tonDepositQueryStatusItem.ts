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
 * 状态列表
 */
export type TonDepositQueryStatusItem =
  (typeof TonDepositQueryStatusItem)[keyof typeof TonDepositQueryStatusItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TonDepositQueryStatusItem = {
  await: "await",
  ok: "ok",
  fail: "fail",
  timeout: "timeout",
} as const;
