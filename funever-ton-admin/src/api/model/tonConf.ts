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
 * TON链配置
 */
export interface TonConf {
  /** 金币数量选项 */
  coinOptions?: number[];
  /** 收款地址 */
  receipt?: string;
  /** 金币兑换比例,1USDT=usdtCoin个金币 */
  usdtCoin?: number;
}
