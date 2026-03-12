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
export interface AdminTeamPage {
  /** 创建时间 */
  createTime?: string;
  /** 是否删除 */
  deleted?: boolean;
  /** 游戏图标 */
  gameLogo?: string;
  /** 游戏名称 */
  gameName?: string;
  /** 所属游戏 */
  gid?: number;
  /** 游戏Id */
  id?: number;
  /** 战队简介 */
  intro?: string;
  /** 战队图标 */
  logo?: string;
  /** 战队名称 */
  name?: string;
  /** 积分点数 */
  point?: number;
  /** 雷电关联Id */
  raybetId?: number;
  /** 更新时间 */
  updateTime?: string;
}
