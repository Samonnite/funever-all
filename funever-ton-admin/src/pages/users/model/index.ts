import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useQueryAdminUser, useQueryFriends, useGetFriendSummary } from 'api';
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

export const ClientUserModel = (() => ({
  useClientUserList() {
    const { tableData, setTable } = useTable('AdminClientUser');
    const { mutateAsync, ...results } = useQueryAdminUser({
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
  useQueryFriends() {
    const { tableData, setTable } = useTable('UserFriends');
    const { mutateAsync, ...results } = useQueryFriends({
      request: {
        emptyStr: false,
      } as AxiosRequestConfig,
    });
    const refetch = useMemoizedFn(async (params: any) => {
      const data = await mutateAsync({
        data: {
          ...params,
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
      userFriendList: tableData.data || [],
      ...results,
    };
  },
  useFriendSummary(uid: number) {
    const { data: res, ...result } = useGetFriendSummary({
      uid,
    });
    return {
      friendSummary: res?.data,
      ...result,
    };
  },
}))();
