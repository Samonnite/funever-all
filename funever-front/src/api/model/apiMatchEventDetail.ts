/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */

/**
 * 事件分组详情
 */
export interface ApiMatchEventDetail {
  /** 事件名称 */
  eventName?: string;
  /** 事件结果，-1=无结果 0=false 1=true */
  eventResult?: number;
  /** 事件赔率 */
  odds?: string;
}
