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
 * 用户类型：1=一般用户 2=管理员
 */
export type UserClientType = (typeof UserClientType)[keyof typeof UserClientType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserClientType = {
  normal: 'normal',
  admin: 'admin',
} as const;
