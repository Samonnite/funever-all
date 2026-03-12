/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { PageSort } from "./pageSort";

export interface ApiUserNoticeQuery {
  /** 关键字，查询消息主题 */
  keyword?: string;
  /** [分页]当前页，默认为1 */
  pageNum?: number;
  /** [分页]每页大小，默认25，最大10000 */
  pageSize?: number;
  /** 是否已读，false=未读  true=已读 */
  read?: boolean[];
  /** [分页]排序列表，例：[{"field":"createTime", "type":"desc"}] */
  sortList?: PageSort[];
}
