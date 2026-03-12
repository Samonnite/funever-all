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
export interface UserNotice {
  /** 消息内容 */
  content?: string;
  /** 创建时间 */
  createTime?: string;
  /** 赛事Id */
  id?: number;
  /** 是否已读 */
  read?: boolean;
  /** 消息主题 */
  topic?: string;
  /** 用户UID */
  uid?: number;
  /** 更新时间 */
  updateTime?: string;
}
