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
 * 数据
 */
export interface GameGuessStat {
  /** 累计盈亏金额 */
  amount?: number;
  /** 平局次数 */
  drawCount?: number;
  /** 亏损次数 */
  lossCount?: number;
  /** 盈利次数 */
  profitCount?: number;
  /** 胜率，单位：100% */
  winRate?: number;
}
