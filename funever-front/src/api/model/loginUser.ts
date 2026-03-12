/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { LoginUserType } from "./loginUserType";

/**
 * 数据
 */
export interface LoginUser {
  addr?: string;
  loginTime?: string;
  loginToken?: string;
  type?: LoginUserType;
  ucode?: string;
  uid?: number;
}
