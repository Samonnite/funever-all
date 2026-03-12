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
export interface AdminGameContestPage {
  /** 创建时间 */
  createTime?: string;
  /** 是否删除 */
  deleted?: boolean;
  /** 游戏名称 */
  gameName?: string;
  /** 所属游戏Id */
  gid?: number;
  /** 赛事Id */
  id?: number;
  /** 赛事简介 */
  intro?: string;
  /** 赛事名称 */
  name?: string;
  /** 雷电关联Id */
  raybetId?: number;
  /** 更新时间 */
  updateTime?: string;
}
