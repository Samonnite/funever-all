/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { LoggerChangeWrap } from './loggerChangeWrap';
import type { BlockLoggerType } from './blockLoggerType';

/**
 * 分页数据
 */
export interface BlockLogger {
  change?: LoggerChangeWrap;
  /** 日志内容 */
  content?: string;
  /** 创建时间 */
  createTime?: string;
  /** 创建者Id */
  creatorId?: number;
  /** 创建者名称 */
  creatorName?: string;
  /** Id */
  id?: number;
  /** 日志主题 */
  topic?: string;
  /** 日志类型 */
  type?: BlockLoggerType;
  /** 更新时间 */
  updateTime?: string;
}
