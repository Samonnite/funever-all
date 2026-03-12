/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */

export interface PoolAddrUpdate {
  /** 谷歌验证码,非强制输入，后台会提示 */
  googleCode?: string;
  /** Base58编码的Solana链私钥 */
  privatePool?: string;
}
