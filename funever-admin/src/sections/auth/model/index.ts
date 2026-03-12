import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAdminUserLogin } from 'api';

export type FormValuesProps = {
  account: string;
  password: string;
  googleCode: string;
  afterSubmit?: string;
};

export const useLoginForm = () => {
  const { register, handleSubmit, ...other } = useForm<FormValuesProps>({
    mode: 'all',
    defaultValues: {
      account: '',
      password: '',
      googleCode: '',
    },
    resolver: yupResolver(
      yup.object().shape({
        account: yup.string().required('Account is required'),
        password: yup.string().required('Password is required'),
      })
    ),
  });

  return {
    register,
    handleSubmit,
    ...other,
  };
};

export const useLogin = () => {
  const { mutateAsync: onLogin, ...results } = useAdminUserLogin();
  return {
    onLogin,
    ...results,
  };
};
