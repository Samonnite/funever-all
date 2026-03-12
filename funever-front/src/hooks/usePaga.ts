import { useUpdateEffect } from "ahooks";
import { useEffect, useState } from "react";

import { usePageBottom } from "./usePageBottom";

export default function usePage<T>(
  fn: (v: any) => Promise<{
    data?: T[];
    total?: number;
  }>,
  v?: any
) {
  const reachedBottom = usePageBottom();
  const [list, setList] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [pageNum, setpageNum] = useState(1);
  const [total, setTotal] = useState(0);

  const getList = async (newValue?: any) => {
    try {
      if (pageNum === 1) {
        setLoading(true);
      }
      const res = await fn({
        pageNum,
        pageSize: 10,
        sortList: [
          {
            field: "createTime",
            type: "desc",
          },
        ],
        ...v,
        ...newValue,
      });
      if (pageNum === 1) {
        setList(res?.data || []);
      } else {
        setList((pre) => pre?.concat(res?.data || []));
      }
      setTotal(res?.total || 0);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const reset = (newValue?: any) => {
    setpageNum(1);
    getList({
      pageNum: 1,
      ...newValue,
    });
  };

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useUpdateEffect(() => {
    if (reachedBottom && total > list.length) {
      setpageNum((page) => page + 1);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reachedBottom]);

  useUpdateEffect(() => {
    if (total > list.length) {
      getList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  return {
    loading,
    list,
    total,
    reset,
    getList,
  };
}
