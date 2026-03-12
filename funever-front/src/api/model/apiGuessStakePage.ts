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
 * 分页数据
 */
export interface ApiGuessStakePage {
  /** 钱包主地址 */
  addr?: string;
  /** 游戏竞猜币种 */
  coin?: string;
  /** 首次押注时间 */
  createTime?: string;
  /** 押注总金额 */
  stake?: number;
  /** 押注战队Id */
  team?: number;
  /** 押注战队名称 */
  teamName?: string;
}
