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
 * 分页数据
 */
export interface AdminUser {
  /** 账户 */
  account?: string;
  /** 创建时间 */
  createTime?: string;
  /** 登录时间 */
  loginTime?: string;
  /** 名称 */
  name?: string;
  /** 用户UID */
  uid?: number;
  /** 更新时间 */
  updateTime?: string;
  /** 超级管理员 */
  userAdmin?: boolean;
  /** 启用状态 */
  userEnable?: boolean;
}
