/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */

export interface AdminUserPwdChange {
  /** 谷歌验证码,页面非必填,用户绑定谷歌验证码后才检查 */
  googleCode?: string;
  /** 用户新密码 */
  newPassword?: string;
  /** 用户老密码 */
  oldPassword?: string;
}
