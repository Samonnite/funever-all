import { GameTeam } from 'api/model';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useQueryParams } from 'hooks/useQueryParams';
import { useGameTeamQuery, useGameTeamEdit } from 'api';
import { useEffect } from 'react';

import { useTable } from 'utils';
import { useMemoizedFn } from 'ahooks';
import { AxiosRequestConfig } from 'axios';

export const useTeamQueryForm = () => {
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

export const useTeamUpdateForm = (defaultValue?: GameTeam) => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      logo: '',
      name: '',
      intro: '',
      gid: undefined,
    },
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required(),
        logo: yup.string().required(),
        gid: yup.string().required(),
      })
    ),
  });

  const { setValue } = form;

  useEffect(() => {
    if (defaultValue) {
      setValue('logo', defaultValue?.logo);
      setValue('name', defaultValue?.name);
      setValue('intro', defaultValue?.intro);
      setValue('gid', defaultValue?.gid);
    }
  }, [defaultValue, setValue]);

  return {
    ...form,
  };
};

export const useTeamPointForm = () => {
  const form = useForm({
    mode: 'all',
    defaultValues: {
      point: 0,
    },
    resolver: yupResolver(
      yup.object().shape({
        point: yup.number().integer().default(0).typeError('请输入整数'),
      })
    ),
  });

  return {
    ...form,
  };
};

export const TeamModel = (() => ({
  useTeamList() {
    const { tableData, setTable } = useTable('AdminTeamPage');
    const { mutateAsync, ...results } = useGameTeamQuery({
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
      teamList: tableData.data || [],
      ...results,
    };
  },
  useTeamAdd() {
    const { refetch } = this.useTeamList();
    const [query] = useQueryParams();
    const { mutateAsync: add, ...result } = useGameTeamEdit({
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
  useTeamUpdate() {
    const { refetch } = this.useTeamList();
    const [query] = useQueryParams();
    const { mutateAsync: update, ...result } = useGameTeamEdit({
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
