import { useForm } from 'react-hook-form';
import { useQueryWalletRecordForApi } from 'api';

import { useTable } from 'utils';
import { useMemoizedFn } from 'ahooks';
import { AxiosRequestConfig } from 'axios';

export const useWalletRecordQueryForm = () => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      keyword: '',
      uid: '',
      type: null,
      bill: null,
      startTimestamp: null,
      endTimestamp: null,
    },
  });

  return {
    ...form,
  };
};

export const WalletRecordModel = (() => ({
  useWalletRecordList() {
    const { tableData, setTable } = useTable('Game');
    const { mutateAsync, ...results } = useQueryWalletRecordForApi({
      request: {
        emptyStr: false,
      } as AxiosRequestConfig,
    });
    const refetch = useMemoizedFn(async (params: any) => {
      const type = params?.type ? [params?.type] : undefined;
      const bill = params?.bill ? [params?.bill] : undefined;
      const data = await mutateAsync({
        data: {
          ...params,
          type,
          bill,
          startTimestamp: params?.startTimestamp?.valueOf(),
          endTimestamp: params?.endTimestamp?.valueOf(),
          sortList: [
            {
              field: 'createTime',
              type: 'desc',
            },
          ],
        },
      });
      setTable(data);
      return data;
    });

    return {
      refetch,
      ...tableData,
      recordList: tableData.data || [],
      ...results,
    };
  },
}))();
