/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { UserGameGuessTranStatus } from "./userGameGuessTranStatus";
import type { UserGameGuessTranType } from "./userGameGuessTranType";

/**
 * 数据
 */
export interface UserGameGuessTran {
  /** 币种 */
  coin?: string;
  /** 创建时间 */
  createTime?: string;
  /** 转出地址 */
  fromOwner?: string;
  /** 交易哈希 */
  hash?: string;
  /** 主键 */
  id?: number;
  /** 币种合约 */
  mint?: string;
  /** 交易数量 */
  qty?: number;
  /** 转账状态 */
  status?: UserGameGuessTranStatus;
  /** 转入地址 */
  toOwner?: string;
  /** 业务类型 */
  type?: UserGameGuessTranType;
  /** 用户竞猜ID */
  ugid?: number;
  /** 用户UID */
  uid?: number;
  /** 更新时间 */
  updateTime?: string;
}
