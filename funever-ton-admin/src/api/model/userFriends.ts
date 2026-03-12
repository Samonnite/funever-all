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
export interface UserFriends {
  /** 奖励金币 */
  coin?: number;
  /** 创建时间 */
  createTime?: string;
  /** 上级Id */
  fuid?: number;
  /** 主键Id */
  id?: number;
  /** 奖励积分 */
  point?: number;
  /** 是否奖励 */
  status?: boolean;
  /** 用户Id */
  uid?: number;
  /** 更新时间 */
  updateTime?: string;
}
