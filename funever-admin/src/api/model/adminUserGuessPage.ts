/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { AdminUserGuessPageStatus } from './adminUserGuessPageStatus';
import type { AdminUserGuessBlock } from './adminUserGuessBlock';

/**
 * 分页数据
 */
export interface AdminUserGuessPage {
  /** 用户地址 */
  addr?: string;
  /** 结算总金额 */
  amount?: number;
  /** 结算时间 */
  closeTime?: string;
  /** 竞猜币种 */
  coin?: string;
  /** 创建时间 */
  createTime?: string;
  /** 结算手续费 */
  fee?: number;
  /** 主键Id */
  id?: number;
  /** 赠送积分 */
  point?: number;
  /** 用户押注收益 */
  profit?: number;
  /** 用户押注总金额 */
  stake?: number;
  /** 用户押注状态 */
  status?: AdminUserGuessPageStatus;
  /** 用户押注战队Id */
  team?: number;
  /** 用户押注战队名称 */
  teamName?: string;
  /** 链上转账记录 */
  tranBlock?: AdminUserGuessBlock[];
  /** 用户UID */
  uid?: number;
  /** 更新时间 */
  updateTime?: string;
}
