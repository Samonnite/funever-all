const defaultLan = navigator.language.includes("zh") ? "zh_cn" : "en_gb";

export const defaultLang = localStorage.getItem("i18nextLng") || defaultLan; // 默认语言

export const defaultLanConfig = {
  label: "English",
  value: "en_gb",
  dayjsValue: "en-gb",
};

export const dayjsLocaleMap: Record<string, any> = {
  zh_cn: "zh-cn",
  en_gb: "en-gb",
  zh_hk: "zh-hk",
  th_th: "th",
  vi_vi: "vi",
  fr_fr: "fr",
  id_id: "id",
  it_it: "it",
  ko_kr: "ko",
  ja_jp: "ja",
};
