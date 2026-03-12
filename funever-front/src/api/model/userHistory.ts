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
export interface UserHistory {
  /** 发生金额 */
  amount?: number;
  /** 交易对 */
  coin?: string;
  /** 创建时间 */
  createTime?: string;
  /** 历史Id */
  id?: number;
  /** 历史备注 */
  remark?: string;
  /** 历史类型：1=竞猜押注 2=竞猜结束 */
  type?: number;
  /** 用户UID */
  uid?: number;
  /** 更新时间 */
  updateTime?: string;
}
