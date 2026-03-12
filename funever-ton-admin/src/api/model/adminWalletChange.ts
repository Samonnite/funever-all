/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { AdminWalletChangeType } from "./adminWalletChangeType";

export interface AdminWalletChange {
  /** 变更数量，正加负减 */
  qty?: number;
  /** 调整备注 */
  remark?: string;
  /** 钱包类型 */
  type?: AdminWalletChangeType;
  /** 用户Id */
  uid?: number;
}
