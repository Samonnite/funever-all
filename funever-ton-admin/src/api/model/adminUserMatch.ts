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
import type { UserMatchDetail } from "./userMatchDetail";
import type { AdminUserMatchStatus } from "./adminUserMatchStatus";

/**
 * 分页数据
 */
export interface AdminUserMatch {
  /** 结算总金额 */
  amount?: number;
  ateam?: ApiGameTeam;
  bteam?: ApiGameTeam;
  /** 结算时间 */
  closeTime?: string;
  /** 赛事名称 */
  contest?: string;
  /** 押注创建时间 */
  createTime?: string;
  detail?: UserMatchDetail;
  /** 押注截止日期 */
  dueTime?: string;
  /** 结算手续费 */
  fee?: number;
  /** 游戏名称 */
  game?: string;
  /** 游戏图标 */
  gameLogo?: string;
  /** 主键Id */
  id?: number;
  /** 比赛Id */
  mid?: number;
  /** 最小押注 */
  min?: number;
  /** 奖励积分 */
  point?: number;
  /** 押注收益 */
  profit?: number;
  /** 押注本金 */
  stake?: number;
  /** 比赛开始日期 */
  startTime?: string;
  /** 押注状态：wait=未结算 win=盈利 loss=亏损 draw=平局 */
  status?: AdminUserMatchStatus;
  /** 押注战队Id */
  team?: number;
  /** 用户Id */
  uid?: number;
}
