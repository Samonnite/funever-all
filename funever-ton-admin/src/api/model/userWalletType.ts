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
 * 钱包类型
 */
export type UserWalletType =
  (typeof UserWalletType)[keyof typeof UserWalletType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserWalletType = {
  coin: "coin",
  point: "point",
  token: "token",
} as const;
