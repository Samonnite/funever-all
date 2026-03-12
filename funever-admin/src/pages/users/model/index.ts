import { AdminUserClientUpdate, UserClient } from 'api/model';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useQueryParams } from 'hooks/useQueryParams';
import { useQueryClientUser, useUpdateClientUser } from 'api';
import { useEffect } from 'react';

import { useTable } from 'utils';
import { useMemoizedFn } from 'ahooks';
import { AxiosRequestConfig } from 'axios';

export const useClientUserQueryForm = () => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      keyword: '',
      types: null,
    },
  });

  return {
    ...form,
  };
};

export const useClientUserUpdateForm = (defaultValue?: UserClient) => {
  const form = useForm<AdminUserClientUpdate>({
    mode: 'all',
    defaultValues: {
      type: 'normal',
    },
    resolver: yupResolver(
      yup.object().shape({
        type: yup.string().required(),
      })
    ),
  });

  const { setValue } = form;

  useEffect(() => {
    if (defaultValue) {
      setValue('type', defaultValue?.type || 'normal');
    }
  }, [defaultValue, setValue]);

  return {
    ...form,
  };
};

export const ClientUserModel = (() => ({
  useClientUserList() {
    const { tableData, setTable } = useTable('UserClient');
    const { mutateAsync, ...results } = useQueryClientUser({
      request: {
        emptyStr: false,
      } as AxiosRequestConfig,
    });
    const refetch = useMemoizedFn(async (params: any) => {
      const types = params?.types ? [params?.types] : undefined;
      const data = await mutateAsync({
        data: {
          ...params,
          types,
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
      clientUserList: tableData.data || [],
      ...results,
    };
  },

  useClientUserUpdate() {
    const { refetch } = this.useClientUserList();
    const [query] = useQueryParams();
    const { mutateAsync: update, ...result } = useUpdateClientUser({
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
