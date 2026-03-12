/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { AdminUserWalletRecordWalletBill } from "./adminUserWalletRecordWalletBill";
import type { AdminUserWalletRecordWalletType } from "./adminUserWalletRecordWalletType";

/**
 * 分页数据
 */
export interface AdminUserWalletRecord {
  /** 业务类型文本 */
  billText?: string;
  /** 后台备注 */
  comment?: string;
  /** 创建时间 */
  createTime?: string;
  /** 主键Id */
  id?: number;
  /** 发生金额 */
  qty?: number;
  /** 历史备注 */
  remark?: string;
  /** 钱包类型文本 */
  typeText?: string;
  /** 用户Id */
  uid?: number;
  /** 更新时间 */
  updateTime?: string;
  /** 业务类型 */
  walletBill?: AdminUserWalletRecordWalletBill;
  /** 钱包类型 */
  walletType?: AdminUserWalletRecordWalletType;
}
