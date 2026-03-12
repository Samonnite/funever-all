/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { UserWalletType } from "./userWalletType";

/**
 * 分页数据
 */
export interface UserWallet {
  /** 可用余额 */
  balance?: number;
  /** 创建时间 */
  createTime?: string;
  /** 累计划入数量 */
  transferIn?: number;
  /** 累计划出数量 */
  transferOut?: number;
  /** 钱包类型 */
  type?: UserWalletType;
  /** 用户UID */
  uid?: number;
  /** 更新时间 */
  updateTime?: string;
}
