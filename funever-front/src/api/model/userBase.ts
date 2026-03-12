/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { UserBaseType } from "./userBaseType";

/**
 * 数据
 */
export interface UserBase {
  /** 钱包地址 */
  addr?: string;
  /** 用户头像,可更新 */
  logo?: string;
  /** 用户昵称,可更新 */
  name?: string;
  /** 用户类型 */
  type?: UserBaseType;
  /** 邀请码 */
  ucode?: string;
  /** 用户UID */
  uid?: number;
}
