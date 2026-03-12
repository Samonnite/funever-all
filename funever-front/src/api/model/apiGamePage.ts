/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { GameMate } from "./gameMate";

/**
 * 分页数据
 */
export interface ApiGamePage {
  /** 游戏Id */
  id?: number;
  mates?: GameMate;
  /** 游戏名称 */
  name?: string;
  /** 排序等级 */
  rank?: number;
}
