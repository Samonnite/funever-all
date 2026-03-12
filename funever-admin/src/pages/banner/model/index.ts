import { DataBannerQuery } from 'api/model';
import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useQueryParams } from 'hooks/useQueryParams';

import { useQueryBanner, useDeleteBanner, useSaveBanner, useUpdateBanner } from 'api';
import { useTable } from 'utils';
import { useMemoizedFn } from 'ahooks';
import { AxiosRequestConfig } from 'axios';

export const useBannerQueryForm = (defaultValue?: any) => {
  const form = useForm<DataBannerQuery>({
    mode: 'all',
    defaultValues: {
      ...defaultValue,
      keyword: '',
      enable: null,
    },
    resolver: yupResolver(yup.object().shape({})),
  });

  return {
    ...form,
  };
};

export const useBannerEditForm = (defaultValue?: any) => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      ...defaultValue,
      title: '',
      content: '',
      enable: '1',
      imgUrl: '',
      jumpUrl: '',
      sorted: 0,
    },
    resolver: yupResolver(
      yup.object().shape({
        title: yup.string().required(),
        imgUrl: yup.string().required(),
        sorted: yup.number().integer().default(0).typeError('请输入整数'),
      })
    ),
  });
  const { setValue } = form;

  useEffect(() => {
    if (defaultValue) {
      setValue('enable', Number(defaultValue?.enable));
      setValue('title', defaultValue?.title || '');
      setValue('content', defaultValue?.content || '');
      setValue('imgUrl', defaultValue?.imgUrl || '');
      setValue('jumpUrl', defaultValue?.jumpUrl || '');
      setValue('sorted', defaultValue?.sorted || 0);
    }
  }, [defaultValue, setValue]);

  return {
    ...form,
  };
};

export const BannerModel = (() => ({
  useBannerQuery() {
    const { tableData, setTable } = useTable('DataBanner');
    const { mutateAsync, ...results } = useQueryBanner({
      request: {
        emptyStr: false,
      } as AxiosRequestConfig,
    });

    const refetch = useMemoizedFn(async (params: any) => {
      const enable = params?.enable ? Number(params?.enable) === 1 : undefined;
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
      bannerList: tableData.data || [],
      ...results,
    };
  },
  useAddBanner() {
    const { refetch } = this.useBannerQuery();
    const [query] = useQueryParams();
    const { mutateAsync: addBanner, ...result } = useSaveBanner({
      mutation: {
        onSuccess() {
          refetch(query);
        },
      },
    });
    return {
      addBanner,
      ...result,
    };
  },
  useUpdateBanner() {
    const { refetch } = this.useBannerQuery();
    const [query] = useQueryParams();
    const { mutateAsync: updateBanner, ...result } = useUpdateBanner({
      mutation: {
        onSuccess() {
          refetch(query);
        },
      },
    });
    return {
      updateBanner,
      ...result,
    };
  },
  useDeleteBanner() {
    const { refetch } = this.useBannerQuery();
    const [query] = useQueryParams();
    const { mutateAsync: deleteBanner, ...result } = useDeleteBanner({
      mutation: {
        onSuccess() {
          refetch(query);
        },
      },
    });
    return {
      deleteBanner,
      ...result,
    };
  },
}))();
