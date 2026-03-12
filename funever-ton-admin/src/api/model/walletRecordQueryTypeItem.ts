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
export type WalletRecordQueryTypeItem =
  (typeof WalletRecordQueryTypeItem)[keyof typeof WalletRecordQueryTypeItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const WalletRecordQueryTypeItem = {
  coin: "coin",
  point: "point",
  token: "token",
} as const;
