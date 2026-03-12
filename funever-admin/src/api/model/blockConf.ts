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
export interface BlockConf {
  /** 抽水账户 */
  addrBonus?: string;
  /** 游戏地址 */
  addrPool?: string;
  /** 抽水比例，单位100% */
  bonusRate?: number;
  /** 平局手续费，单位100% */
  drawFee?: number;
  /** 前台登陆验证签名 */
  loginSign?: boolean;
  /** 节点 */
  node?: string;
  /** 节点订阅 */
  nodeWss?: string;
  /** 区块链浏览器 */
  solscan?: string;
  /** 系统图标 */
  systemLogo?: string;
  /** 系统名称 */
  systemName?: string;
  /** 系统编码 */
  systemSn?: string;
}
