/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { PageSort } from './pageSort';
import type { AdminGuessQueryStatusItem } from './adminGuessQueryStatusItem';

export interface AdminGuessQuery {
  /** 链上状态：false=异常 true=正常, 用于筛选结算过程中链上转账异常的竞猜 */
  blockOk?: boolean[];
  /** 游戏Id */
  gid?: number;
  /** 关键字，查询游戏名称和游戏赛事以及币种 */
  keyword?: string;
  /** [分页]当前页，默认为1 */
  pageNum?: number;
  /** [分页]每页大小，默认25，最大10000 */
  pageSize?: number;
  /** [分页]排序列表，例：[{"field":"createTime", "type":"desc"}] */
  sortList?: PageSort[];
  /** 竞猜状态 */
  status?: AdminGuessQueryStatusItem[];
}
