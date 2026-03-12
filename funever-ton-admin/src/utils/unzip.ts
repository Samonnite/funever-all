import pako from 'pako';

export const unzip = (value: Blob) => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(value);
  return new Promise((resolve) => {
    reader.onload = () => {
      const content = reader.result as ArrayBuffer;
      const msg = JSON.parse(pako.inflate(content, { to: 'string' }));
      resolve(msg);
    };
  });
};

export const getMessage = async (message: any) => {
  if (message && message.data) {
    const response = await unzip(message.data);
    return response;
  }
  return undefined;
};
