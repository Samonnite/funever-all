import { Stack, Card } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// @types
import { AdministratorModel, useAdminUpdateForm } from 'pages/system/model/administrator';
// components
import Iconify from '../../../../components/iconify';
import { useSnackbar } from '../../../../components/snackbar';
import FormProvider, { RHFTextField } from '../../../../components/hook-form';

// ----------------------------------------------------------------------

export default function AccountChangePassword() {
  const { enqueueSnackbar } = useSnackbar();

  const { updatePassword, isLoading } = AdministratorModel.useUpdatePassword();

  const methods = useAdminUpdateForm();
  const { reset, handleSubmit } = methods;

  const onSubmit = handleSubmit(async (values) => {
    await updatePassword({
      data: {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
        googleCode: values.googleCode,
      },
    });
    reset();
    enqueueSnackbar('保存成功!');
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Card>
        <Stack spacing={3} alignItems="flex-end" sx={{ p: 3 }}>
          <RHFTextField name="oldPassword" type="password" label="旧密码" />

          <RHFTextField name="newPassword" type="password" label="新密码" />

          <RHFTextField name="newPwdRepeat" type="password" label="确认新密码" />
          <RHFTextField name="googleCode" placeholder="请输入谷歌验证码" label="谷歌验证码" />
          <LoadingButton type="submit" variant="contained" loading={isLoading}>
            保存
          </LoadingButton>
        </Stack>
      </Card>
    </FormProvider>
  );
}
