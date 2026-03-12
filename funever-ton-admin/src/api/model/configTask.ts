/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { ConfigTaskTaskType } from "./configTaskTaskType";

export interface ConfigTask {
  /** 创建时间 */
  createTime?: string;
  /** 每日重复 */
  dayRepeat?: boolean;
  /** 任务Id */
  id?: number;
  /** 延迟分钟 */
  minDelay?: number;
  /** 奖励金币 */
  rewardCoin?: number;
  /** 奖励积分 */
  rewardPoint?: number;
  /** 任务图标 */
  taskLogo?: string;
  /** 任务名称 */
  taskName?: string;
  /** 任务目标 */
  taskTarget?: string;
  /** 任务类型 */
  taskType?: ConfigTaskTaskType;
  /** 更新时间 */
  updateTime?: string;
}
