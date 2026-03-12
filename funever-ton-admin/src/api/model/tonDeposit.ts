/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { TonDepositStatus } from "./tonDepositStatus";

/**
 * 分页数据
 */
export interface TonDeposit {
  /** 到账金币 */
  arrive?: number;
  /** 币种 */
  coin?: string;
  /** 创建时间 */
  createTime?: string;
  /** 小数位 */
  decimals?: number;
  /** 异常信息 */
  error?: string;
  /** 转出地址 */
  from?: string;
  /** 哈希 */
  hash?: string;
  /** 主键Id */
  id?: number;
  /** 备注Id */
  mid?: number;
  /** 支付金额 */
  qty?: number;
  /** 兑换汇率 */
  ratio?: number;
  /** 重试次数 */
  retry?: number;
  /** 充值状态 */
  status?: TonDepositStatus;
  /** 转入地址 */
  to?: string;
  /** 用户Id */
  uid?: number;
  /** 更新时间 */
  updateTime?: string;
}
