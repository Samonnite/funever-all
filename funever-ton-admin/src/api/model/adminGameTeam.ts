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
export interface AdminGameTeam {
  /** 创建时间 */
  createTime?: string;
  /** 游戏图标 */
  gameLogo?: string;
  /** 游戏名称 */
  gameName?: string;
  /** 游戏Id */
  gid?: number;
  /** 战队Id */
  id?: number;
  /** 战队简介 */
  intro?: string;
  /** 战队图标 */
  logo?: string;
  /** 战队名称 */
  name?: string;
  /** 雷电Id */
  rid?: number;
  /** 更新时间 */
  updateTime?: string;
}
