/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */

export interface AdminCoinEdit {
  /** 币种名称 */
  coin?: string;
  /** 启用状态：false=停用 true=启用 */
  enable?: boolean;
  /** 币种Id，为空表示新增 */
  id?: number;
  /** 币种图标 */
  logo?: string;
  /** 币种合约，空表示SOL */
  mint?: string;
}
