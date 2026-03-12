/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { AdminUserGuessBlockStatus } from './adminUserGuessBlockStatus';

/**
 * 链上转账记录
 */
export interface AdminUserGuessBlock {
  /** 币种符号 */
  coin?: string;
  /** 创建时间 */
  createTime?: string;
  /** 转出地址 */
  fromOwner?: string;
  /** 用户转账哈希 */
  hash?: string;
  /** 用户转账数量 */
  qty?: number;
  /** 用户转账状态 */
  status?: AdminUserGuessBlockStatus;
  /** 转入地址 */
  toOwner?: string;
  /** 用户转账类型：1=下注 2=盈利 */
  type?: number;
  /** 用户竞猜ID */
  ugid?: number;
  /** 更新时间 */
  updateTime?: string;
}
