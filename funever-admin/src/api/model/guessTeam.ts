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
 * B队信息
 */
export interface GuessTeam {
  /** 战队Id */
  team?: number;
  /** 战队押注金额 */
  teamAmount?: number;
  /** 战队押注人数 */
  teamCount?: number;
  /** 战队Logo */
  teamLogo?: string;
  /** 战队名称 */
  teamName?: string;
  /** 战队赢得次数 */
  teamWin?: number;
}
