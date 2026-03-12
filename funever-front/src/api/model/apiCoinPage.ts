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
export interface ApiCoinPage {
  /** 币种符号 */
  coin?: string;
  /** 创建时间 */
  createTime?: string;
  /** 小数位 */
  decimals?: number;
  /** 赛事Id */
  id?: number;
  /** 币种图标 */
  logo?: string;
  /** 代币信息，空表示主币 */
  mint?: string;
  /** 更新时间 */
  updateTime?: string;
}
