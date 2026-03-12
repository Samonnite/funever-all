import { useForm } from 'react-hook-form';
import { useTonDepositQuery } from 'api';

import { useTable } from 'utils';
import { useMemoizedFn } from 'ahooks';
import { AxiosRequestConfig } from 'axios';

export const useDepositQueryForm = () => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      keyword: '',
      uid: '',
      status: null,
      startTimestamp: null,
      endTimestamp: null,
    },
  });

  return {
    ...form,
  };
};

export const GoldDepositModel = (() => ({
  useDepositList() {
    const { tableData, setTable } = useTable('TonDeposit');
    const { mutateAsync, ...results } = useTonDepositQuery({
      request: {
        emptyStr: false,
      } as AxiosRequestConfig,
    });
    const refetch = useMemoizedFn(async (params: any) => {
      const status = params?.status ? [params?.status] : undefined;
      const data = await mutateAsync({
        data: {
          ...params,
          status,
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
      goldRecordList: tableData.data || [],
      ...results,
    };
  },
}))();
