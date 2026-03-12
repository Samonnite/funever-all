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
 * 用户类型
 */
export type UserBaseType = (typeof UserBaseType)[keyof typeof UserBaseType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserBaseType = {
  normal: "normal",
  admin: "admin",
} as const;
