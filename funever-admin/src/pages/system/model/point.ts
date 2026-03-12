import { getGetPointConfListQueryKey, useUpdatePointConf, useGetPointConfList } from 'api';
import { useInvalidate } from 'hooks/useInvalidate';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';

export const usePointEditForm = (defaultValue?: any) => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      point: '',
    },
    resolver: yupResolver(
      yup.object().shape({
        point: yup.number().required().typeError('请输入数字'),
      })
    ),
  });
  const { setValue } = form;

  useEffect(() => {
    if (defaultValue) {
      setValue('point', defaultValue?.point);
    }
  }, [defaultValue, setValue]);

  return {
    ...form,
  };
};

export const SystemPointModel = (() => ({
  useInvalidatePoint() {
    const invalidate = useInvalidate();
    return () => invalidate(...getGetPointConfListQueryKey());
  },
  useSystemPoint() {
    const { data: res, ...result } = useGetPointConfList();
    return {
      systemPoint: res?.data,
      ...result,
    };
  },
  useUpdatePoint() {
    const invalidate = this.useInvalidatePoint();
    const { mutateAsync: updatePoint, ...result } = useUpdatePointConf({
      mutation: {
        onSuccess() {
          invalidate();
        },
      },
      request: {
        isFormData: true,
      } as AxiosRequestConfig,
    });
    return {
      updatePoint,
      ...result,
    };
  },
}))();
