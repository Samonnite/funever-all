import { AdminGameContestPage } from 'api/model';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useQueryParams } from 'hooks/useQueryParams';
import { useGameContestEdit, useGameContestDelete, useGameContestQuery } from 'api';
import { useEffect } from 'react';

import { useTable } from 'utils';
import { useMemoizedFn } from 'ahooks';
import { AxiosRequestConfig } from 'axios';

export const useContestQueryForm = () => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      keyword: '',
      gid: null,
    },
  });

  return {
    ...form,
  };
};

export const useContestUpdateForm = (defaultValue?: AdminGameContestPage) => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      name: '',
      intro: '',
      gid: undefined,
    },
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required(),
        gid: yup.string().required(),
      })
    ),
  });

  const { setValue } = form;

  useEffect(() => {
    if (defaultValue) {
      setValue('name', defaultValue?.name);
      setValue('intro', defaultValue?.intro);
      setValue('gid', defaultValue?.gid);
    }
  }, [defaultValue, setValue]);

  return {
    ...form,
  };
};

export const ContestModel = (() => ({
  useContestList() {
    const { tableData, setTable } = useTable('Contest');
    const { mutateAsync, ...results } = useGameContestQuery({
      request: {
        emptyStr: false,
      } as AxiosRequestConfig,
    });
    const refetch = useMemoizedFn(async (params: any) => {
      const data = await mutateAsync({
        data: {
          ...params,
          deleteds: [false],
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
      contestList: tableData.data || [],
      ...results,
    };
  },
  useContestAdd() {
    const { refetch } = this.useContestList();
    const [query] = useQueryParams();
    const { mutateAsync: add, ...result } = useGameContestEdit({
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
  useContestUpdate() {
    const { refetch } = this.useContestList();
    const [query] = useQueryParams();
    const { mutateAsync: update, ...result } = useGameContestEdit({
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
  useDeleteContest() {
    const { refetch } = this.useContestList();
    const [query] = useQueryParams();
    const { mutateAsync: deleteContest, ...result } = useGameContestDelete({
      mutation: {
        onSuccess() {
          refetch(query);
        },
      },
    });
    return {
      deleteContest,
      ...result,
    };
  },
}))();
