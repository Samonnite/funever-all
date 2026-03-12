import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useQueryParams } from 'hooks/useQueryParams';
import { useBlockCoinQuery, useBlockCoinEdit } from 'api';
import { useEffect } from 'react';

import { useTable } from 'utils';
import { useMemoizedFn } from 'ahooks';
import { AxiosRequestConfig } from 'axios';

export const useCoinQueryForm = () => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      keyword: '',
      enable: null,
    },
  });

  return {
    ...form,
  };
};

export const useCoinUpdateForm = (defaultValue?: any) => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      coin: '',
      logo: '',
      mint: '',
      enable: '1',
      ...defaultValue,
    },
    resolver: yupResolver(
      yup.object().shape({
        coin: yup.string().required(),
        logo: yup.string().required(),
      })
    ),
  });

  const { setValue } = form;

  useEffect(() => {
    if (defaultValue) {
      setValue('coin', defaultValue?.coin);
      setValue('logo', defaultValue?.logo);
      setValue('mint', defaultValue?.mint);
      setValue('enable', Number(defaultValue?.enable));
    }
  }, [defaultValue, setValue]);

  return {
    ...form,
  };
};

export const CoinModel = (() => ({
  useCoinList() {
    const { tableData, setTable } = useTable('AdminCoinPage');
    const { mutateAsync, ...results } = useBlockCoinQuery({
      request: {
        emptyStr: false,
      } as AxiosRequestConfig,
    });
    const refetch = useMemoizedFn(async (params: any) => {
      const enable = params?.enable ? [params?.enable === '1'] : undefined;
      const data = await mutateAsync({
        data: {
          ...params,
          enable,
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
      coinList: tableData.data || [],
      ...results,
    };
  },
  useCoinAdd() {
    const { refetch } = this.useCoinList();
    const [query] = useQueryParams();
    const { mutateAsync: add, ...result } = useBlockCoinEdit({
      mutation: {
        onSuccess() {
          refetch(query);
        },
      },
    });
    return {
      add,
      ...result,
    };
  },
  useCoinUpdate() {
    const { refetch } = this.useCoinList();
    const [query] = useQueryParams();
    const { mutateAsync: update, ...result } = useBlockCoinEdit({
      mutation: {
        onSuccess() {
          refetch(query);
        },
      },
    });
    return {
      update,
      ...result,
    };
  },
}))();
