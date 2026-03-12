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

export interface AdminGameEdit {
  /** 是否删除 */
  deleted?: boolean;
  /** 游戏Id */
  id?: number;
  /** 游戏简介 */
  intro?: string;
  mates?: GameMate;
  /** 游戏名称 */
  name?: string;
  /** 热度权重，排名等级 */
  rank?: number;
}
