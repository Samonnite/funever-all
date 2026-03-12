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
 * 数据
 */
export interface LoginApply {
  /** 传入的地址 */
  addr?: string;
  /** 登录关键字 */
  key?: string;
  /** 是否校验签名 */
  loginSign?: boolean;
  /** 签名信息 */
  text?: string;
}
