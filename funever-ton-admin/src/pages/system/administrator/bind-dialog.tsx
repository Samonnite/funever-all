import { Box, DialogActions, Grid } from '@mui/material';
import React from 'react';
import { useSnackbar } from 'notistack';
import QRCode from 'react-qr-code';
import FormProvider, { RHFTextField } from 'components/hook-form';
import Dialog from 'components/dialog';
import { LoadingButton } from '@mui/lab';
import { AdministratorModel, useAdminBindForm } from '../model/administrator';

const BindDialog: React.FC<{
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { google } = AdministratorModel.useGetGoogleToken();
  const { bindGoogle, isLoading } = AdministratorModel.useBindGoogleToken();

  const methods = useAdminBindForm();

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (values) => {
    await bindGoogle({
      data: {
        ...values,
      },
    });
    enqueueSnackbar('操作成功！');
    onClose();
  });

  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose} title="绑定谷歌验证码">
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Box sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>私钥</Box>
            <div>{google?.secretKey}</div>
          </Grid>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Box sx={{ color: 'rgba(255, 255, 255, 0.5)', pb: 1 }}>私钥二维码</Box>
            <Box
              sx={{
                width: '200px',
                height: '200px',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: 1,
              }}
            >
              {google?.secretUri && (
                <QRCode
                  size={200}
                  style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                  value={google?.secretUri || ''}
                  viewBox="0 0 200 200"
                />
              )}
            </Box>
          </Grid>
          <RHFTextField
            name="oldGoogleCode"
            placeholder="请输入旧的谷歌验证码"
            label="旧的谷歌验证码(未绑定过不需填写)"
          />
          <RHFTextField
            name="newGoogleCode"
            placeholder="请输入新的谷歌验证码"
            label="新的谷歌验证码"
          />
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

export default BindDialog;
