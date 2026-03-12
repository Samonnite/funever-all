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
import type { GameGuessPageGuessStatus } from "./gameGuessPageGuessStatus";
import type { GameGuessPageStatus } from "./gameGuessPageStatus";

/**
 * 分页数据
 */
export interface GameGuessPage {
  /** 结算总金额 */
  amount?: number;
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
  /** 创建时间 */
  createTime?: string;
  /** 押注结束时间 */
  dueTime?: string;
  /** 结算手续费 */
  fee?: number;
  /** 游戏名称 */
  game?: string;
  /** 游戏竞猜Id */
  gameGuessId?: number;
  /** 游戏Logo */
  gameLogo?: string;
  /** 结算时间 */
  guessCloseTime?: string;
  /** 个人竞猜Id */
  guessId?: number;
  /** 押注收益 */
  guessProfit?: number;
  /** 押注金额 */
  guessStake?: number;
  /** 押注状态：wait=未结算 win=盈利 loss=亏损 draw=平局 */
  guessStatus?: GameGuessPageGuessStatus;
  /** 押注战队 */
  guessTeam?: string;
  /** 游戏开始时间 */
  startTime?: string;
  /** 游戏竞猜状态 */
  status?: GameGuessPageStatus;
}
