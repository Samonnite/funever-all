/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { PageSortType } from "./pageSortType";

/**
 * [分页]排序列表，例：[{"field":"createTime", "type":"desc"}]
 */
export interface PageSort {
  /** [分页]排序字段名称 */
  field?: string;
  /** [分页]排序方式：asc=正序 desc=倒序 */
  type?: PageSortType;
}
