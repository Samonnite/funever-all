/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { GameGuessBlockUserItem } from './gameGuessBlockUserItem';

/**
 * 转账用户
 */
export interface GameGuessBlockUser {
  /** 币种名称 */
  coin?: string;
  /** 小数位 */
  decimals?: number;
  /** 转出地址 */
  fromOwner?: string;
  /** 代币地址，为空表示主币 */
  mint?: string;
  /** 包含的用户信息 */
  users?: GameGuessBlockUserItem[];
}
