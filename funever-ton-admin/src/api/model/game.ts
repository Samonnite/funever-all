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
export interface Game {
  /** 创建时间 */
  createTime?: string;
  /** 游戏Id */
  id?: number;
  /** 游戏简介 */
  intro?: string;
  /** 游戏图标 */
  logo?: string;
  /** 游戏名称 */
  name?: string;
  /** 雷电Id */
  rid?: number;
  /** 游戏排序 */
  sorted?: number;
  /** 更新时间 */
  updateTime?: string;
}
