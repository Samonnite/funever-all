/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { GameGuessBlockStatus } from './gameGuessBlockStatus';
import type { GameGuessBlockUser } from './gameGuessBlockUser';

/**
 * 数据
 */
export interface GameGuessBlock {
  /** 创建时间 */
  createTime?: string;
  /** 链上异常信息 */
  error?: string;
  /** 所属竞猜Id */
  gsid?: number;
  /** 转账哈希，可通过hash拼接调整区块链浏览器 */
  hash?: string;
  /** 链上转账Id */
  id?: number;
  /** 链上状态：失败时显示重试按钮 */
  status?: GameGuessBlockStatus;
  /** 转账总金额 */
  tranAmount?: number;
  /** 转账总笔数 */
  tranCount?: number;
  tranUser?: GameGuessBlockUser;
  /** 更新时间 */
  updateTime?: string;
}
