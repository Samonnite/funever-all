import { Game } from 'api/model';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useQueryParams } from 'hooks/useQueryParams';
import { useGameQuery, useGameEdit } from 'api';
import { useEffect } from 'react';

import { useTable } from 'utils';
import { useMemoizedFn } from 'ahooks';
import { AxiosRequestConfig } from 'axios';

export const useGameQueryForm = () => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      keyword: '',
    },
  });

  return {
    ...form,
  };
};

export const useGameUpdateForm = (defaultValue?: Game) => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      logo: '',
      name: '',
      intro: '',
      sorted: 0,
    },
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required(),
        logo: yup.string().required(),
        sorted: yup.number().typeError('请输入数字'),
      })
    ),
  });

  const { setValue } = form;

  useEffect(() => {
    if (defaultValue) {
      setValue('logo', defaultValue?.logo);
      setValue('name', defaultValue?.name);
      setValue('intro', defaultValue?.intro);
      setValue('sorted', `${defaultValue?.sorted}`);
      setValue('logo', defaultValue?.logo);
    }
  }, [defaultValue, setValue]);

  return {
    ...form,
  };
};

export const GameModel = (() => ({
  useGameList() {
    const { tableData, setTable } = useTable('Game');
    const { mutateAsync, ...results } = useGameQuery({
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
      gameList: tableData.data || [],
      ...results,
    };
  },
  useGameAdd() {
    const { refetch } = this.useGameList();
    const [query] = useQueryParams();
    const { mutateAsync: add, ...result } = useGameEdit({
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
  useGameUpdate() {
    const { refetch } = this.useGameList();
    const [query] = useQueryParams();
    const { mutateAsync: update, ...result } = useGameEdit({
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
