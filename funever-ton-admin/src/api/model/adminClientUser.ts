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
export interface AdminClientUser {
  /** 创建时间 */
  createTime?: string;
  /** 登录时间 */
  loginTime?: string;
  /** 比赛质押时间 */
  matchTime?: string;
  /** 名称 */
  name?: string;
  /** 头像 */
  photo?: string;
  /** 登录奖励时间 */
  pointTime?: string;
  /** 上级Id */
  puid?: number;
  /** 电报Id */
  tuid?: string;
  /** 邀请码 */
  ucode?: string;
  /** 用户Id */
  uid?: number;
  /** 更新时间 */
  updateTime?: string;
}
