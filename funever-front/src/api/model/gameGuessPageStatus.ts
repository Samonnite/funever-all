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
 * 游戏竞猜状态
 */
export type GameGuessPageStatus =
  (typeof GameGuessPageStatus)[keyof typeof GameGuessPageStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameGuessPageStatus = {
  betting: "betting",
  process: "process",
  settlement: "settlement",
  completed: "completed",
} as const;
