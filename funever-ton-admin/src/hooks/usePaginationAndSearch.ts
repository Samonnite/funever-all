import { defaultPaga } from 'model/common';
import { useMount } from 'ahooks';
import { useQueryParams } from './useQueryParams';

type RefetchFunction = (values: any) => Promise<any>;

const usePaginationAndSearch = <T>({
  refetch,
  defaultParams,
  immediate = true,
  isMain = true,
  id = 'default',
}: {
  refetch: RefetchFunction;
  defaultParams?: T;
  immediate?: boolean;
  isMain?: boolean;
  id?: string;
}) => {
  const [query, setQuery] = useQueryParams(id);
  useMount(() => {
    if (immediate) {
      if (isMain) {
        setQuery({ ...defaultParams, ...defaultPaga });
      }
      refetch({ ...defaultParams, ...defaultPaga } as T);
    }
  });

  const handleChangePage = (pageParams: { pageNum?: number; pageSize?: number }, values?: T) => {
    const params = {
      ...(values || query),
      ...pageParams,
      pageNum: pageParams?.pageNum || 1,
      pageSize: pageParams?.pageSize || defaultPaga.pageSize,
    };
    setQuery(params);
    refetch(params);
  };

  const handleSearch = async (values: T) => {
    handleChangePage({ ...defaultParams, ...defaultPaga, pageNum: 1 }, values);
  };

  return {
    handleChangePage,
    handleSearch,
  };
};

export default usePaginationAndSearch;
