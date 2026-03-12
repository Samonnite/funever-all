/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { ApiMatchEventStage } from "./apiMatchEventStage";

/**
 * 数据
 */
export interface ApiMatchEvent {
  对战队伍?: string;
  比赛场次事件列表?: ApiMatchEventStage[];
  比赛场次标签列表?: string[];
}
