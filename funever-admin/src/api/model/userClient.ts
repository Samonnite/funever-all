/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { UserClientType } from './userClientType';

/**
 * 分页数据
 */
export interface UserClient {
  /** 钱包主地址 */
  addr?: string;
  /** 创建时间 */
  createTime?: string;
  /** 成功参与质押 */
  joinStake?: boolean;
  /** 登录时间 */
  loginTime?: string;
  /** 头像 */
  logo?: string;
  /** 名称 */
  name?: string;
  /** 邀请路径 */
  path?: string;
  /** 邀请路径深度深度 */
  pathLevel?: number;
  /** 上次登录奖励时间 */
  pointTime?: number;
  /** 上级UID */
  puid?: number;
  /** 用户类型：1=一般用户 2=管理员 */
  type?: UserClientType;
  /** 邀请码 */
  ucode?: string;
  /** 用户UID */
  uid?: number;
  /** 更新时间 */
  updateTime?: string;
}
