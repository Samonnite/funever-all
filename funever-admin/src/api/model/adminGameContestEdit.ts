/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */

export interface AdminGameContestEdit {
  /** 是否删除 */
  deleted?: boolean;
  /** 所属游戏Id */
  gid?: number;
  /** 赛事Id */
  id?: number;
  /** 赛事简介 */
  intro?: string;
  /** 赛事名称 */
  name?: string;
}
