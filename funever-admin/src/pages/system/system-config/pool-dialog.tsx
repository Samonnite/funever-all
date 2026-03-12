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

const PoolDialog: React.FC<{
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { updatePool, isLoading } = SystemSettingModel.useUpdatePool();

  const methods = useForm<{ privatePool: string; googleCode: string }>({
    mode: 'all',
    defaultValues: {
      privatePool: '',
      googleCode: '',
    },
    resolver: yupResolver(
      yup.object().shape({
        privatePool: yup.string().required(),
      })
    ),
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async ({ privatePool, googleCode }) => {
    await updatePool({
      data: {
        privatePool,
        googleCode,
      },
    });
    enqueueSnackbar('更新成功！');
    onClose();
  });

  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose} title="更新游戏池">
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Grid container>
          <Box sx={{ color: '#ff005c', pb: 0.5 }}>
            更换地址时要保证余额大于0.5SOL，否则无法进行链上交互
          </Box>
          <Box sx={{ color: '#ff005c' }}>请确保网络安全，且没有未完成的游戏竞猜</Box>
          <RHFTextField
            name="privatePool"
            type="password"
            label="游戏池私钥"
            placeholder="请输入Base58编码的Solana链私钥"
          />
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

export default PoolDialog;
