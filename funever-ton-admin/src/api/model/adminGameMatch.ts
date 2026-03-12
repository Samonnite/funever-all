/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { ApiGameTeam } from "./apiGameTeam";
import type { MatchClose } from "./matchClose";
import type { AdminGameMatchStatus } from "./adminGameMatchStatus";

/**
 * 分页数据
 */
export interface AdminGameMatch {
  ateam?: ApiGameTeam;
  bteam?: ApiGameTeam;
  close?: MatchClose;
  /** 赛事名称 */
  contest?: string;
  /** 押注截止日期 */
  dueTime?: string;
  /** 游戏名称 */
  game?: string;
  /** 游戏图标 */
  gameLogo?: string;
  /** 比赛Id */
  id?: number;
  /** 最小押注 */
  min?: number;
  /** 比赛开始日期 */
  startTime?: string;
  /** 比赛状态 */
  status?: AdminGameMatchStatus;
  /** 热议主题 */
  topic?: string;
}
