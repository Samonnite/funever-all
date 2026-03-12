/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { TonConf } from "./tonConf";

export interface ConfigBase {
  /** 抽水比例，单位100% */
  bonusRate?: number;
  /** 创建时间 */
  createTime?: string;
  /** 平局手续费，单位100% */
  drawFee?: number;
  /** 主键Id */
  id?: number;
  /** 系统图标 */
  systemLogo?: string;
  /** 系统名称 */
  systemName?: string;
  /** 系统编码 */
  systemSn?: string;
  tonConf?: TonConf;
  /** 更新时间 */
  updateTime?: string;
}
