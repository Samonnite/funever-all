/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { WalletRecordQueryBillItem } from "./walletRecordQueryBillItem";
import type { PageSort } from "./pageSort";
import type { WalletRecordQueryTypeItem } from "./walletRecordQueryTypeItem";

export interface WalletRecordQuery {
  /** 业务类型 */
  bill?: WalletRecordQueryBillItem[];
  /** 结束时间戳 */
  endTimestamp?: number;
  /** [分页]当前页，默认为1 */
  pageNum?: number;
  /** [分页]每页大小，默认50，最大2000 */
  pageSize?: number;
  /** [分页]排序列表，例：[{"field":"createTime", "type":"desc"}] */
  sortList?: PageSort[];
  /** 开始时间戳 */
  startTimestamp?: number;
  /** 钱包类型 */
  type?: WalletRecordQueryTypeItem[];
  /** 用户Id[前端勿传] */
  uid?: number;
}
