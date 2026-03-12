import { DialogActions, Grid } from '@mui/material';
import React from 'react';
import { useSnackbar } from 'notistack';

import FormProvider, { RHFTextField } from 'components/hook-form';
import Dialog from 'components/dialog';
import { LoadingButton } from '@mui/lab';
import { AdministratorModel, useAdminUpdateForm } from '../model/administrator';

const UpdateDialog: React.FC<{
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { updatePassword, isLoading } = AdministratorModel.useUpdatePassword();

  const methods = useAdminUpdateForm();

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (values) => {
    await updatePassword({
      data: {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
        googleCode: values.googleCode,
      },
    });
    enqueueSnackbar('操作成功！');
    onClose();
  });

  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose} title="修改密码">
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Grid container>
          <RHFTextField
            name="oldPassword"
            type="password"
            placeholder="请输入旧密码"
            label="旧密码"
          />
          <RHFTextField
            name="newPassword"
            type="password"
            placeholder="请输入新密码"
            label="新密码"
          />
          <RHFTextField
            name="newPwdRepeat"
            type="password"
            placeholder="请确认新密码"
            label="确认新密码"
          />
          <RHFTextField name="googleCode" placeholder="请输入谷歌验证码" label="谷歌验证码" />
        </Grid>
        <DialogActions>
          <LoadingButton color="info" onClick={onClose}>
            取消
          </LoadingButton>
          <LoadingButton type="submit" variant="contained" loading={isLoading}>
            保存
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
};

export default UpdateDialog;
