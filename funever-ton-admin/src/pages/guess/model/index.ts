import { GameMatchComplete } from 'api/model';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useQueryParams } from 'hooks/useQueryParams';
import {
  useGameMatchQueryForAdmin,
  useGameMatchComplete,
  useGameMatchUserQuery,
  useGameMatchEdit,
  useGameGuessDelete,
} from 'api';

import { useTable } from 'utils';
import { useMemoizedFn } from 'ahooks';
import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';

export const useGuessQueryForm = () => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      keyword: '',
      gid: null,
      status: null,
      startTimestamp: null,
      endTimestamp: null,
    },
  });

  return {
    ...form,
  };
};

export const useGuessUpdateForm = (defaultValue: any) => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      ...defaultValue,
      gid: '',
      cid: '',
      min: '',
      title: '',
      ateam: '',
      bteam: '',
      startTimestamp: null,
      dueTimestamp: null,
    },
    resolver: yupResolver(
      yup.object().shape({
        gid: yup.string().required(),
        cid: yup.string().required(),
        title: yup.string().required(),
        ateam: yup
          .string()
          .required()
          .notOneOf([yup.ref('bteam')], 'A战队与B战队不能相同'),
        bteam: yup
          .string()
          .required()
          .notOneOf([yup.ref('ateam')], 'A战队与B战队不能相同'),
        startTimestamp: yup.string().required(),
        dueTimestamp: yup.string().required(),
        min: yup.number().default(0).typeError('请输入数字'),
      })
    ),
  });

  const { setValue } = form;

  useEffect(() => {
    if (defaultValue) {
      setValue('gid', defaultValue?.gid);
      setValue('cid', defaultValue?.cid);
      setValue('title', defaultValue?.title);
      setValue('ateam', defaultValue?.ateam?.id);
      setValue('bteam', defaultValue?.bteam?.id);
      setValue('startTimestamp', Number(defaultValue?.startTime));
      setValue('dueTimestamp', Number(defaultValue?.dueTime));
      setValue('min', defaultValue?.min);
    }
  }, [defaultValue, setValue]);

  return {
    ...form,
  };
};

export const useBlockQueryForm = () => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {},
  });

  return {
    ...form,
  };
};
export const useGuessUserQueryForm = () => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      addr: '',
      status: null,
    },
  });

  return {
    ...form,
  };
};

export const useGuessCompeteForm = () => {
  const form = useForm<GameMatchComplete>({
    mode: 'all',
    defaultValues: {
      ateamWin: 0,
      bteamWin: 0,
    },
    resolver: yupResolver(
      yup.object().shape({
        ateamWin: yup.number().integer().default(0).typeError('请输入整数'),
        bteamWin: yup.number().integer().default(0).typeError('请输入整数'),
      })
    ),
  });

  return {
    ...form,
  };
};

export const useGuessPointForm = () => {
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

export const GuessModel = (() => ({
  useGuessList() {
    const { tableData, setTable } = useTable('AdminGameMatch');
    const { mutateAsync, ...results } = useGameMatchQueryForAdmin({
      request: {
        emptyStr: false,
      } as AxiosRequestConfig,
    });
    const refetch = useMemoizedFn(async (params: any) => {
      const status = params?.status ? [params?.status] : undefined;
      const data = await mutateAsync({
        data: {
          ...params,
          status,
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
      guessList: tableData.data || [],
      ...results,
    };
  },
  useGuessUserList() {
    const { tableData, setTable } = useTable('AdminUserMatch');
    const { mutateAsync, ...results } = useGameMatchUserQuery({
      request: {
        emptyStr: false,
      } as AxiosRequestConfig,
    });
    const refetch = useMemoizedFn(async (params: any) => {
      const status = params?.status ? [params?.status] : undefined;
      const data = await mutateAsync({
        data: {
          ...params,
          status,
          startTimestamp: params?.startTimestamp?.valueOf(),
          endTimestamp: params?.endTimestamp?.valueOf(),
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
      guessUserList: tableData.data || [],
      ...results,
    };
  },
  useGameGuessAddSubmit() {
    const { refetch } = this.useGuessList();
    const [query] = useQueryParams();
    const { mutateAsync: add, ...result } = useGameMatchEdit({
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
  useGameGuessUpdateSubmit() {
    const { refetch } = this.useGuessList();
    const [query] = useQueryParams();
    const { mutateAsync: update, ...result } = useGameMatchEdit({
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
  useGameGuessDelete() {
    const { refetch } = this.useGuessList();
    const [query] = useQueryParams();
    const { mutateAsync: deleteGuess, ...result } = useGameGuessDelete({
      mutation: {
        onSuccess() {
          refetch(query);
        },
      },
    });
    return {
      deleteGuess,
      ...result,
    };
  },
  useGuessComplete() {
    const { refetch } = this.useGuessList();
    const [query] = useQueryParams();
    const { mutateAsync: complete, ...result } = useGameMatchComplete({
      mutation: {
        onSuccess() {
          refetch(query);
        },
      },
    });
    return {
      complete,
      ...result,
    };
  },
}))();
