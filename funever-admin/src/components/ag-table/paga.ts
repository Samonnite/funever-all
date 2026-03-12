import { useMemoizedFn } from 'ahooks';
import { useEffect, useState } from 'react';

export default function useTable({
  pageNum,
  pageSize,
  refetch,
}: {
  pageNum: number;
  pageSize: number;
  refetch?: <T>(values: T) => void;
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pageSize || 10);

  const onChangePage = useMemoizedFn((event: unknown, newPage: number) => {
    setPage(newPage);
    if (refetch) {
      refetch({ pageNum: newPage + 1, pageSize: rowsPerPage });
    }
  });

  const onChangeRowsPerPage = useMemoizedFn((event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
    if (refetch) {
      refetch({ pageSize: parseInt(event.target.value, 10) });
    }
  });

  useEffect(() => {
    setRowsPerPage(pageSize || 10);
  }, [pageSize]);

  return {
    page,
    rowsPerPage,
    onChangePage,
    onChangeRowsPerPage,
  };
}
