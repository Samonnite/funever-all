/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */

export interface AdminUserEdit {
  /** 用户账户 */
  account?: string;
  /** 用户名称 */
  name?: string;
  /** 用户UID，不传表示新增 */
  uid?: number;
  /** 解除谷歌绑定 */
  unbindGoogleToken?: boolean;
  /** 超级管理员 */
  userAdmin?: boolean;
  /** 用户启用 */
  userEnable?: boolean;
  /** 用户新密码,不传则不更新密码(新增时不传使用默认密码：a123456) */
  userPassword?: string;
}
