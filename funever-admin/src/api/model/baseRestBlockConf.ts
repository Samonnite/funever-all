/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { BlockConf } from './blockConf';

export interface BaseRestBlockConf {
  data?: BlockConf;
  /** 异常消息 */
  message?: string;
  /** 状态：200=成功 */
  status?: number;
  /** 追踪Id */
  traceId?: string;
}
