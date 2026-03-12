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
 * 结算状态
 */
export type AdminUserMatchQueryStatusItem =
  (typeof AdminUserMatchQueryStatusItem)[keyof typeof AdminUserMatchQueryStatusItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AdminUserMatchQueryStatusItem = {
  wait: "wait",
  win: "win",
  loss: "loss",
  draw: "draw",
} as const;
