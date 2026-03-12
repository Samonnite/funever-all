import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { getGetTonCoinListQueryKey, useGetTonCoinList, useUpdateTonCoin } from 'api';
import { useEffect } from 'react';

import { useInvalidate } from 'hooks/useInvalidate';

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
      decimals: '',
      ...defaultValue,
    },
    resolver: yupResolver(
      yup.object().shape({
        coin: yup.string().required(),
        logo: yup.string().required(),
        decimals: yup.number().integer().default(0).typeError('请输入整数'),
      })
    ),
  });

  const { setValue } = form;

  useEffect(() => {
    if (defaultValue) {
      setValue('coin', defaultValue?.coin);
      setValue('logo', defaultValue?.logo);
      setValue('mint', defaultValue?.mint);
      setValue('decimals', defaultValue?.decimals);
      setValue('enable', Number(defaultValue?.enable));
    }
  }, [defaultValue, setValue]);

  return {
    ...form,
  };
};

export const CoinModel = (() => ({
  useInvalidateCoin() {
    const invalidate = useInvalidate();
    return () => invalidate(...getGetTonCoinListQueryKey());
  },
  useCoinList() {
    const { data: res, ...result } = useGetTonCoinList();
    return {
      coinList: res?.data,
      ...result,
    };
  },
  useCoinAdd() {
    const invalidate = this.useInvalidateCoin();
    const { mutateAsync: add, ...result } = useUpdateTonCoin({
      mutation: {
        onSuccess() {
          invalidate();
        },
      },
    });
    return {
      add,
      ...result,
    };
  },
  useCoinUpdate() {
    const invalidate = this.useInvalidateCoin();
    const { mutateAsync: update, ...result } = useUpdateTonCoin({
      mutation: {
        onSuccess() {
          invalidate();
        },
      },
    });
    return {
      update,
      ...result,
    };
  },
}))();
