/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */

export interface AwsUploadParam {
  /** 文件名称，支持带path，如：user/head.jpg */
  fileKey?: string;
  /** 文件MD5值(Base64编码) */
  fileMd5?: string;
  /** 文件大小，单位byte */
  fileSize?: number;
}
