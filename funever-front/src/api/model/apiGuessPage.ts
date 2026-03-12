/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { GuessTeam } from "./guessTeam";
import type { ApiGuessPageStatus } from "./apiGuessPageStatus";

/**
 * 分页数据
 */
export interface ApiGuessPage {
  ateam?: GuessTeam;
  bteam?: GuessTeam;
  /** 币种 */
  coin?: string;
  /** 币种Logo */
  coinLogo?: string;
  /** 最小押注量 */
  coinMin?: number;
  /** 游戏赛事 */
  contest?: string;
  /** 押注结束时间 */
  dueTime?: string;
  /** 游戏名称 */
  game?: string;
  /** 游戏Logo */
  gameLogo?: string;
  /** 竞猜Id */
  id?: number;
  /** 是否参与 */
  join?: boolean;
  /** 游戏开始时间 */
  startTime?: string;
  /** 游戏竞猜状态 */
  status?: ApiGuessPageStatus;
  /** 热议标题 */
  title?: string;
}
