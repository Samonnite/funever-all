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
 * 押注状态：wait=未结算 win=盈利 loss=亏损 draw=平局
 */
export type GameGuessPageGuessStatus =
  (typeof GameGuessPageGuessStatus)[keyof typeof GameGuessPageGuessStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameGuessPageGuessStatus = {
  wait: "wait",
  win: "win",
  loss: "loss",
  draw: "draw",
} as const;
