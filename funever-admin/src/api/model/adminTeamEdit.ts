/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */

export interface AdminTeamEdit {
  /** 是否删除 */
  deleted?: boolean;
  /** 所属游戏 */
  gid?: number;
  /** 战队Id */
  id?: number;
  /** 战队简介 */
  intro?: string;
  /** 战队图标 */
  logo?: string;
  /** 战队名称 */
  name?: string;
}
