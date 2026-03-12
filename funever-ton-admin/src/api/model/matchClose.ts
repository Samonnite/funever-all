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
 * 结算信息
 */
export interface MatchClose {
  /** 盈方单位分红 */
  bonusAmount?: number;
  /** 结算时间 */
  closeTime?: string;
  /** 系统抽水 */
  feeAmount?: number;
  /** 败方总金额 */
  lossAmount?: number;
  tlement?: MatchClose;
  /** 盈方总金额 */
  winAmount?: number;
  /** 盈方战队 */
  winTeam?: number;
}
