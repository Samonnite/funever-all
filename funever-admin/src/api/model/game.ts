/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { GameMate } from './gameMate';

/**
 * 数据
 */
export interface Game {
  /** 搜索权重，计算热搜 */
  click?: number;
  /** 创建时间 */
  createTime?: string;
  /** 是否删除 */
  deleted?: boolean;
  /** 游戏Id */
  id?: number;
  /** 游戏简介 */
  intro?: string;
  /** 游戏图标 */
  logo?: string;
  mates?: GameMate;
  /** 游戏名称 */
  name?: string;
  /** 热度权重，计算等级 */
  rank?: number;
  /** 雷电关联Id */
  raybetId?: number;
  /** 更新时间 */
  updateTime?: string;
}
