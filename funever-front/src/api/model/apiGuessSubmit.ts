/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */

export interface ApiGuessSubmit {
  /** A队Id */
  ateam?: number;
  /** B队Id */
  bteam?: number;
  /** 所属赛事Id */
  cid?: number;
  /** 币种名称 */
  coin?: string;
  /** 币种最小押注 */
  coinMin?: number;
  /** 押注截止时间 */
  dueTimestamp?: number;
  /** 所属游戏Id */
  gid?: number;
  /** 竞猜Id */
  id?: number;
  /** 比赛开始时间 */
  startTimestamp?: number;
  /** 热议标题 */
  title?: string;
}
