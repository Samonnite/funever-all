/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */

export interface DataBanner {
  /** 内容 */
  content?: string;
  /** 是否启用 */
  enable?: boolean;
  /** 游戏Id */
  id?: number;
  /** 图片地址 */
  imgUrl?: string;
  /** 跳转地址 */
  jumpUrl?: string;
  /** 排序大小，越大越靠前 */
  sorted?: number;
  /** 标题,长度50 */
  title?: string;
}
