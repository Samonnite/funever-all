/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { ConfigPointType } from "./configPointType";

export interface ConfigPoint {
  /** 创建时间 */
  createTime?: string;
  /** 奖励积分 */
  rewardPoint?: number;
  /** 积分类型 */
  type?: ConfigPointType;
  /** 积分类型文本 */
  typeText?: string;
  /** 更新时间 */
  updateTime?: string;
}
