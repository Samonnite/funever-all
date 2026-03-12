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
 * 包含的用户信息
 */
export interface GameGuessBlockUserItem {
  /** 用户竞猜ID, 为空表示抽水 */
  id?: number;
  /** 用户收款地址 */
  toAddr?: string;
  /** 用户主地址 */
  toOwner?: string;
  /** 用户收款数量 */
  tranQty?: number;
  /** 用户UID,为空表示抽水 */
  uid?: number;
}
