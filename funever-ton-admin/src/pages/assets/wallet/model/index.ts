import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useQueryParams } from 'hooks/useQueryParams';
import { useUpdateWalletForAdmin, useQueryWalletForAdmin } from 'api';
import { useEffect } from 'react';

import { useTable } from 'utils';
import { useMemoizedFn } from 'ahooks';
import { AxiosRequestConfig } from 'axios';

export const useWalletQueryForm = () => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      uid: '',
      type: null,
    },
  });

  return {
    ...form,
  };
};

export const useWalletUpdateForm = (defaultValue?: any) => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      type: '',
      qty: '',
      remark: '',
    },
    resolver: yupResolver(
      yup.object().shape({
        type: yup.string().required(),
        qty: yup.number().typeError('请输入数字'),
        remark: yup.string().required(),
      })
    ),
  });

  const { setValue } = form;

  useEffect(() => {
    if (defaultValue) {
      setValue('type', defaultValue?.type);
      setValue('qty', defaultValue?.qty);
      setValue('remark', defaultValue?.remark);
    }
  }, [defaultValue, setValue]);

  return {
    ...form,
  };
};

export const WalletModel = (() => ({
  useWalletList() {
    const { tableData, setTable } = useTable('Wallet');
    const { mutateAsync, ...results } = useQueryWalletForAdmin({
      request: {
        emptyStr: false,
      } as AxiosRequestConfig,
    });
    const refetch = useMemoizedFn(async (params: any) => {
      const type = params?.type ? [params?.type] : undefined;
      const data = await mutateAsync({
        data: {
          ...params,
          type,
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
      walletList: tableData.data || [],
      ...results,
    };
  },
  useWalletUpdate() {
    const { refetch } = this.useWalletList();
    const [query] = useQueryParams();
    const { mutateAsync: update, ...result } = useUpdateWalletForAdmin({
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
