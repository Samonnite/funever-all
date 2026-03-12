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
export type UserGameGuessTranType =
  (typeof UserGameGuessTranType)[keyof typeof UserGameGuessTranType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserGameGuessTranType = {
  betting: "betting",
  settlement: "settlement",
} as const;
