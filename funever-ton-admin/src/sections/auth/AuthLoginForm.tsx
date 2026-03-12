import { useState } from 'react';
// form
// @mui
import { Stack, Alert, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// components
import Iconify from '../../components/iconify';
import FormProvider, { RHFTextField } from '../../components/hook-form';

import { FormValuesProps, useLogin, useLoginForm } from './model';

// ----------------------------------------------------------------------

export default function AuthLoginForm() {
  const { login } = useAuthContext();

  const [showPassword, setShowPassword] = useState(false);

  const methods = useLoginForm();

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const { onLogin, isLoading } = useLogin();

  const onSubmit = async (data: FormValuesProps) => {
    try {
      const { data: res } = await onLogin({
        data: {
          account: data.account,
          password: data.password,
          googleCode: data?.googleCode,
        },
      });
      if (res) {
        await login(res);
      }
    } catch (err) {
      // reset();
      setError('afterSubmit', {
        ...err,
        message: err?.data?.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

        <RHFTextField name="account" label="用户名" InputLabelProps={{ shrink: true }} />

        <RHFTextField
          name="password"
          label="密码"
          type={showPassword ? 'text' : 'password'}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <RHFTextField name="googleCode" label="谷歌验证码" InputLabelProps={{ shrink: true }} />
      </Stack>

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isLoading}
        sx={{
          mt: 3,
          bgcolor: 'text.primary',
          color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
          '&:hover': {
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
          },
        }}
      >
        登录
      </LoadingButton>
    </FormProvider>
  );
}
