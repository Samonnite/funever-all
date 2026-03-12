/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */

/**
 * 数据
 */
export interface UploadLog {
  /** 是否是客户端 */
  client?: boolean;
  /** 创建时间 */
  createTime?: string;
  /** 上传过期时间 */
  expireTime?: string;
  /** 文件名称路径 */
  fileKey?: string;
  /** 文件MD5 */
  fileMd5?: string;
  /** 文件大小，单位bytes */
  fileSize?: number;
  /** 访问链接 */
  frontUrl?: string;
  /** 赛事Id */
  id?: number;
  /** 用户UID */
  uid?: string;
  /** 更新时间 */
  updateTime?: string;
  /** 上传链接 */
  uploadUrl?: string;
  /** 客户端 */
  userAgent?: string;
  /** 用户IP */
  userIp?: string;
  /** 来源页面 */
  userReferer?: string;
}
