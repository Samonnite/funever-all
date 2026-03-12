import { Box, DialogActions, Grid } from '@mui/material';
import React from 'react';
import { useSnackbar } from 'notistack';

import FormProvider, { RHFTextField } from 'components/hook-form';
import Dialog from 'components/dialog';
import { LoadingButton } from '@mui/lab';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SystemSettingModel } from '../model/system-config';

const BonusDialog: React.FC<{
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { updateBouns, isLoading } = SystemSettingModel.useUpdateBouns();

  const methods = useForm<{ addrBonus: any; googleCode: string }>({
    mode: 'all',
    defaultValues: {
      addrBonus: '',
      googleCode: '',
    },
    resolver: yupResolver(
      yup.object().shape({
        addrBonus: yup.string().required(),
      })
    ),
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async ({ addrBonus, googleCode }) => {
    await updateBouns({
      data: {
        addrBonus,
        googleCode,
      },
    });
    enqueueSnackbar('更新成功！');
    onClose();
  });

  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose} title="更新抽成账户">
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Grid container>
          <RHFTextField name="addrBonus" label="抽成账户地址" placeholder="请输入抽成账户地址" />
          <RHFTextField name="googleCode" label="谷歌验证码" placeholder="请输入谷歌验证码" />
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

export default BonusDialog;
