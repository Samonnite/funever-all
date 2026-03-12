import SparkMD5 from 'spark-md5';
import { hexToBase64, isChinese, randomString } from 'utils';
import { uploadApply } from 'api';
import dayjs from 'dayjs';
import axios from 'axios';

export const originPathMap: Record<string, string> = {
  game: 'manager/game/',
  team: 'manager/team/',
  contest: 'manager/contest/',
  setting: 'manger/setting/',
  default: `${dayjs().format('YYYY-MM-DD')}-${randomString(4)}/`,
};

export const uploadFn = (file: File, path?: string) =>
  new Promise((resolve: ({ localUrl, url }: { localUrl: string; url: string }) => void, reject) => {
    const fileName = file?.name?.replace(/\s*/g, '');
    if (isChinese(fileName)) {
      throw new Error('文件名不能含有中文');
    }
    const spark = new SparkMD5.ArrayBuffer();
    const fileReader = new FileReader();
    const originPath = `funever/${originPathMap[path || 'default'] || path}`;
    const fileKey = `${originPath}${randomString(4)}${fileName}`.replace(/\s*/g, '');

    fileReader.onload = (e) => {
      spark.append(e.target?.result);
      const hex = spark.end();
      const hash = hexToBase64(hex);

      uploadApply({
        fileKey,
        fileSize: file.size,
        fileMd5: hash,
      })
        .then((res) => {
          axios
            .put(res.data?.uploadUrl!, file, {
              headers: { 'Content-MD5': hash, 'Content-type': file.type },
            })
            .then(() => {
              const url = res.data?.frontUrl!;
              const localUrl = URL.createObjectURL(file);
              resolve({
                localUrl,
                url,
              });
            })
            .catch(() => {
              reject();
            });
        })
        .catch(() => reject());
    };

    fileReader.onerror = () => reject();

    fileReader.readAsArrayBuffer(file);
  });
