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
 * 比赛状态
 */
export type AdminGameMatchStatus =
  (typeof AdminGameMatchStatus)[keyof typeof AdminGameMatchStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AdminGameMatchStatus = {
  betting: "betting",
  process: "process",
  completed: "completed",
} as const;
