import { AdminTeamEdit, AdminTeamPage } from 'api/model';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useQueryParams } from 'hooks/useQueryParams';
import { useTeamPageQuery, useTeamEdit, useTeamDelete, useTeamPointChange } from 'api';
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

export const useTeamUpdateForm = (defaultValue?: AdminTeamPage) => {
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
    const { mutateAsync, ...results } = useTeamPageQuery({
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
      teamList: tableData.data || [],
      ...results,
    };
  },
  useTeamAdd() {
    const { refetch } = this.useTeamList();
    const [query] = useQueryParams();
    const { mutateAsync: add, ...result } = useTeamEdit({
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
    const { mutateAsync: update, ...result } = useTeamEdit({
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
  useDeleteTeam() {
    const { refetch } = this.useTeamList();
    const [query] = useQueryParams();
    const { mutateAsync: deleteTeam, ...result } = useTeamDelete({
      mutation: {
        onSuccess() {
          refetch(query);
        },
      },
    });
    return {
      deleteTeam,
      ...result,
    };
  },
  useTeamPoint() {
    const { refetch } = this.useTeamList();
    const [query] = useQueryParams();
    const { mutateAsync: addPoint, ...result } = useTeamPointChange({
      mutation: {
        onSuccess() {
          refetch(query);
        },
      },
    });
    return {
      addPoint,
      ...result,
    };
  },
}))();
