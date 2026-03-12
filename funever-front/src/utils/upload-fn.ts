import SparkMD5 from "spark-md5";

import { uploadApply } from "api";
import { hexToBase64, randomString } from "utils/index";

export const uploadFn = (file: File) =>
  new Promise(
    (
      resolve: ({ localUrl, url }: { localUrl: string; url: string }) => void,
      reject
    ) => {
      const fileName = file?.name?.replace(/\s*/g, "");
      const spark = new SparkMD5.ArrayBuffer();
      const fileReader = new FileReader();
      const fileKey = `funever/h5/${randomString(4)}${fileName}`.replace(
        /\s*/g,
        ""
      );

      fileReader.onload = (e) => {
        spark.append(e.target?.result as any);
        const hex = spark.end();
        const hash = hexToBase64(hex);

        uploadApply({
          fileKey,
          fileSize: file.size,
          fileMd5: hash,
        })
          .then((res) => {
            const url = res.data?.frontUrl || "";
            const localUrl = URL.createObjectURL(file);
            resolve({
              localUrl,
              url,
            });
          })
          .catch(() => reject());
      };

      fileReader.onerror = () => reject();

      fileReader.readAsArrayBuffer(file);
    }
  );
