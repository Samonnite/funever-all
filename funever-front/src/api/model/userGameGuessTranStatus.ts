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
 * 转账状态
 */
export type UserGameGuessTranStatus =
  (typeof UserGameGuessTranStatus)[keyof typeof UserGameGuessTranStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserGameGuessTranStatus = {
  wait: "wait",
  scuess: "scuess",
  fail: "fail",
} as const;
