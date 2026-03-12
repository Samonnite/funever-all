export const isChinese = (s: string) => /.*[\u4e00-\u9fa5]+.*$/.test(s);

export const hexToBase64 = (str: any) =>
  btoa(
    String.fromCharCode.apply(
      null,
      str
        .replace(/\r|\n/g, "")
        .replace(/([\da-fA-F]{2}) ?/g, "0x$1 ")
        .replace(/ +$/, "")
        .split(" ")
    )
  );

export const randomString = (
  length: number,
  chars = "0123456789abcdefghijklmnopqrstuvwxyz"
) => {
  let result = "";
  for (let i = length; i > 0; i -= 1)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

export const removeLeadingZeros = (s: string) => {
  const oldLen = s.length;
  s = s.replace(/^0+/, ""); // 移除前导零
  // 全为 0 的情况，留一个 0
  if (s.length === 0 && oldLen > 0) {
    s = "0";
  }
  return s;
};
