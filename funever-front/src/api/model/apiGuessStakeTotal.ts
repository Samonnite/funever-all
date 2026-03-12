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
export interface ApiGuessStakeTotal {
  /** 游戏竞猜币种 */
  coin?: string;
  /** 游戏竞猜币种图标 */
  coinLogo?: string;
  /** 游戏赛事 */
  contest?: string;
  /** 游戏名称 */
  game?: string;
  /** 游戏图标 */
  gameLogo?: string;
  /** 游戏竞猜Id */
  id?: number;
  /** 游戏竞猜参与金额 */
  userAmount?: number;
  /** 游戏竞猜参与人数 */
  userCount?: number;
}
