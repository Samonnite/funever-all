/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */

export interface AdminUserLogin {
  /** 用户账号 */
  account?: string;
  /** 谷歌验证码,页面非必填,用户绑定谷歌验证码后才检查 */
  googleCode?: string;
  /** 用户密码 */
  password?: string;
}
