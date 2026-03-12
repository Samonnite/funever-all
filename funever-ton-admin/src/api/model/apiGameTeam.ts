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
 * B战队信息
 */
export interface ApiGameTeam {
  /** 参与总额 */
  amount?: number;
  /** 参与人数 */
  count?: number;
  /** 战队Id */
  id?: number;
  /** 战队图标 */
  logo?: string;
  /** 战队名称 */
  name?: string;
  /** 战队赢场 */
  win?: number;
}
