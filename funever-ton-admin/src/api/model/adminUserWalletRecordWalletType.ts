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
export type AdminUserWalletRecordWalletType =
  (typeof AdminUserWalletRecordWalletType)[keyof typeof AdminUserWalletRecordWalletType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AdminUserWalletRecordWalletType = {
  coin: "coin",
  point: "point",
  token: "token",
} as const;
