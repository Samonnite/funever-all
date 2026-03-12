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
 * 积分类型
 */
export type ConfigPointType =
  (typeof ConfigPointType)[keyof typeof ConfigPointType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ConfigPointType = {
  register: "register",
  login: "login",
  post: "post",
  match: "match",
  stake: "stake",
} as const;
