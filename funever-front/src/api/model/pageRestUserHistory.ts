/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { UserHistory } from "./userHistory";

export interface PageRestUserHistory {
  /** 分页数据 */
  data?: UserHistory[];
  /** 异常消息 */
  message?: string;
  /** 当前页 */
  pageNum?: number;
  /** 每页大小 */
  pageSize?: number;
  /** 状态：200=成功 */
  status?: number;
  /** 总条数 */
  total?: number;
  /** 总页数 */
  totalPage?: number;
  /** 追踪Id */
  traceId?: string;
}
