import { AdminUserQuery } from 'api/model';
import { useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useQueryParams } from 'hooks/useQueryParams';
import {
  useAdminUserEdit,
  useAdminUserPwdChange,
  useAdminUserQuery,
  useGetGoogleToken,
  useBindGoogleToken,
} from 'api';
import { useTable } from 'utils';
import { useMemoizedFn } from 'ahooks';
import { AxiosRequestConfig } from 'axios';

export type AdminQueryParams = Omit<AdminUserQuery, 'userAdmin' | 'userEnable'> & {
  userAdmin?: number | string;
  userEnable?: number | string;
};
export const useAdminQueryForm = () => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      keyword: '',
      userAdmin: null,
      userEnable: null,
    },
    resolver: yupResolver(yup.object().shape({})),
  });

  return {
    ...form,
  };
};

export const useAdminEditForm = (defaultValue?: any) => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      account: '',
      name: '',
      userPassword: 'a123456',
      unbindGoogleToken: 0,
      userEnable: 1,
      userAdmin: 1,
    },
    resolver: yupResolver(
      yup.object().shape({
        account: yup.string().required(),
        userEnable: yup.string().required(),
      })
    ),
  });
  const { setValue } = form;

  useEffect(() => {
    if (defaultValue) {
      setValue('account', defaultValue?.account || '');
      setValue('name', defaultValue?.name || '');
      setValue('userEnable', Number(defaultValue?.userEnable));
      setValue('userPassword', defaultValue?.userPassword);
      setValue('userAdmin', Number(defaultValue?.userAdmin));
      setValue('unbindGoogleToken', Number(defaultValue?.unbindGoogleToken));
    }
  }, [defaultValue, setValue]);

  return {
    ...form,
  };
};

export const useProfileEditForm = (defaultValue?: any) => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      name: '',
      remark: '',
    },
  });
  const { setValue } = form;

  useEffect(() => {
    if (defaultValue) {
      setValue('name', defaultValue?.name || '');
      setValue('remark', defaultValue?.remark || '');
    }
  }, [defaultValue, setValue]);

  return {
    ...form,
  };
};

export const useResetPasswordForm = () => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      initPwd: '',
      account: '',
    },
    resolver: yupResolver(
      yup.object().shape({
        initPwd: yup.string().required(),
      })
    ),
  });

  return {
    ...form,
  };
};

export const useAdminUpdateForm = () => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      newPwdRepeat: '',
      googleCode: '',
    },
    resolver: yupResolver(
      yup.object().shape({
        oldPassword: yup.string().required(),
        newPassword: yup.string().required(),
        newPwdRepeat: yup.string().required(),
      })
    ),
  });

  return {
    ...form,
  };
};

export const useAdminBindForm = () => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      newGoogleCode: '',
      oldGoogleCode: '',
    },
    resolver: yupResolver(
      yup.object().shape({
        newGoogleCode: yup.string().required(),
      })
    ),
  });

  return {
    ...form,
  };
};

export const AdministratorModel = (() => ({
  useAdminQuery() {
    const { tableData, setTable } = useTable('AdminUser');
    const { mutateAsync, ...results } = useAdminUserQuery({
      request: {
        emptyStr: false,
      } as AxiosRequestConfig,
    });

    const refetch = useMemoizedFn(async (params: any) => {
      const userEnable = params?.userEnable ? [params?.userEnable === '1'] : undefined;
      const userAdmin = params?.userAdmin ? [params?.userAdmin === '1'] : undefined;
      const data = await mutateAsync({
        data: {
          ...params,
          userEnable,
          userAdmin,
          sortList: [
            {
              field: 'updateTime',
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
      adminList: tableData.data || [],
      ...results,
    };
  },
  useAddAdmin() {
    const { refetch } = this.useAdminQuery();
    const [query] = useQueryParams();
    const { mutateAsync: addAdmin, ...result } = useAdminUserEdit({
      mutation: {
        onSuccess() {
          refetch(query);
        },
      },
    });
    return {
      addAdmin,
      ...result,
    };
  },
  useUpdateAdmin() {
    const { refetch } = this.useAdminQuery();
    const [query] = useQueryParams();
    const { mutateAsync: updateAdmin, ...result } = useAdminUserEdit({
      mutation: {
        onSuccess() {
          refetch(query);
        },
      },
    });
    return {
      updateAdmin,
      ...result,
    };
  },
  useUpdatePassword() {
    const { refetch } = this.useAdminQuery();
    const [query] = useQueryParams();
    const { mutateAsync: updatePassword, ...result } = useAdminUserPwdChange({
      mutation: {
        onSuccess() {
          refetch(query);
        },
      },
    });
    return {
      updatePassword,
      ...result,
    };
  },
  useGetGoogleToken() {
    const { data: res, ...result } = useGetGoogleToken();
    return {
      google: res?.data,
      ...result,
    };
  },
  useBindGoogleToken() {
    const { mutateAsync: bindGoogle, ...result } = useBindGoogleToken();
    return {
      bindGoogle,
      ...result,
    };
  },
}))();
