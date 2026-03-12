/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { GuessTeam } from './guessTeam';
import type { AdminGuessPageStatus } from './adminGuessPageStatus';

/**
 * 分页数据
 */
export interface AdminGuessPage {
  ateam?: GuessTeam;
  /** 链上状态：false=异常 true=正常 */
  blockOk?: boolean;
  /** 盈方单位分红 */
  bonusAmount?: number;
  bteam?: GuessTeam;
  /** 结算时间 */
  closeTime?: string;
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
  /** 系统抽水 */
  feeAmount?: number;
  /** 游戏名称 */
  game?: string;
  /** 游戏Logo */
  gameLogo?: string;
  /** 竞猜Id */
  id?: number;
  /** 败方总金额 */
  lossAmount?: number;
  /** 雷电关联Id */
  raybetId?: number;
  /** 游戏开始时间 */
  startTime?: string;
  /** 游戏竞猜状态 */
  status?: AdminGuessPageStatus;
  /** 热议标题 */
  title?: string;
  /** 盈方总金额 */
  winAmount?: number;
  /** 盈方战队 */
  winTeam?: number;
  /** 盈方战队名称 */
  winTeamName?: string;
}
