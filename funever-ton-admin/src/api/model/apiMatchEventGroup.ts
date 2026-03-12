/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { ApiMatchEventDetail } from "./apiMatchEventDetail";

/**
 * 事件列表
 */
export interface ApiMatchEventGroup {
  /** 事件分组详情 */
  events?: ApiMatchEventDetail[];
  /** 事件分组名称 */
  group?: string;
}
