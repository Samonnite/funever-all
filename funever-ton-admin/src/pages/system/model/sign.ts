import { getGetConfigSignQueryKey, useUpdateConfigSign, useGetConfigSign } from 'api';
import { useInvalidate } from 'hooks/useInvalidate';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';

export const useSignEditForm = (defaultValue?: any) => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      day: '',
      rewardCoin: '',
      rewardPoint: '',
    },
    resolver: yupResolver(
      yup.object().shape({
        day: yup.number().required().typeError('请输入数字'),
        rewardCoin: yup.number().required().typeError('请输入数字'),
        rewardPoint: yup.number().required().typeError('请输入数字'),
      })
    ),
  });
  const { setValue } = form;

  useEffect(() => {
    if (defaultValue) {
      setValue('day', defaultValue?.day);
      setValue('rewardCoin', defaultValue?.rewardCoin);
      setValue('rewardPoint', defaultValue?.rewardPoint);
    }
  }, [defaultValue, setValue]);

  return {
    ...form,
  };
};

export const SystemSignModel = (() => ({
  useInvalidateSign() {
    const invalidate = useInvalidate();
    return () => invalidate(...getGetConfigSignQueryKey());
  },
  useSystemSign() {
    const { data: res, ...result } = useGetConfigSign();
    return {
      systemSign: res?.data,
      ...result,
    };
  },
  useUpdateSign() {
    const invalidate = this.useInvalidateSign();
    const { mutateAsync: updateSign, ...result } = useUpdateConfigSign({
      mutation: {
        onSuccess() {
          invalidate();
        },
      },
    });
    return {
      updateSign,
      ...result,
    };
  },
}))();
