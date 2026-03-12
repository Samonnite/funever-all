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
 * [分页]排序方式：asc=正序 desc=倒序
 */
export type PageSortType = (typeof PageSortType)[keyof typeof PageSortType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PageSortType = {
  asc: "asc",
  desc: "desc",
} as const;
