// eslint-disable-next-line import/no-extraneous-dependencies
import { atom, useAtom } from 'jotai';
import jsonlint from 'jsonlint-mod';

export const isJsonString = (str: string): { valid: boolean; error?: string } => {
  try {
    jsonlint.parse(str);
    return { valid: true };
  } catch (e) {
    return { valid: false, error: e.message };
  }
};

export const getIds = <T>(list?: T[]): number[] => list?.map((item: any) => item?.id) || [];
export const getPIds = <T>(list?: T[]): number[] => list?.map((item: any) => item?.pid) || [];

const selectedAtom = atom<{ [key: string]: any[] }>({});

export const useSelected = (id: string) => {
  const [selectedObj, setList] = useAtom(selectedAtom);

  const setSelected = (data: any[]) => {
    setList((prevList) => ({
      ...prevList,
      ...{ [id]: data },
    }));
  };
  const selected = selectedObj[id];
  return { selected, setSelected };
};

type TableType = {
  data: any[];
  total: number;
  pageNum: number;
  pageSize: number;
};
const tableAtom = atom<{ [key: string]: TableType }>({});
export const useTable = (id: string) => {
  const [tableDataAtom, setTableData] = useAtom(tableAtom);

  const setTable = (data: any) => {
    setTableData((prev) => ({
      ...prev,
      ...{
        [id]: {
          ...data,
          total: Number(data.total) || -1,
          pageNum: Number(data.pageNum) || 1,
          pageSize: Number(data.pageSize) || 100,
        },
      },
    }));
  };

  const destroy = () => {
    setTableData((prev) => {
      // Create a copy of the current state
      const newState = { ...prev };

      // Remove the entry with the given id
      delete newState[id];

      // Return the new state
      return newState;
    });
  };

  const tableData = tableDataAtom[id] || { data: [], total: 0, pageNum: 1, pageSize: 100 };
  return { tableData, setTable, destroy };
};

export const isChinese = (s: string) => /.*[\u4e00-\u9fa5]+.*$/.test(s);

export const hexToBase64 = (str: any) =>
  btoa(
    String.fromCharCode.apply(
      null,
      str
        .replace(/\r|\n/g, '')
        .replace(/([\da-fA-F]{2}) ?/g, '0x$1 ')
        .replace(/ +$/, '')
        .split(' ')
    )
  );

export const randomString = (length: number, chars = '0123456789abcdefghijklmnopqrstuvwxyz') => {
  let result = '';
  for (let i = length; i > 0; i -= 1) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};
