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
 * 业务类型
 */
export type WalletRecordQueryBillItem =
  (typeof WalletRecordQueryBillItem)[keyof typeof WalletRecordQueryBillItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const WalletRecordQueryBillItem = {
  match_stake: "match_stake",
  match_complete: "match_complete",
  admin_change: "admin_change",
  user_sign: "user_sign",
  user_invite: "user_invite",
  user_task: "user_task",
  user_post: "user_post",
  user_match: "user_match",
  user_login: "user_login",
  user_deposit: "user_deposit",
} as const;
