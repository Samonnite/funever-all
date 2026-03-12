// @mui
import { Box, Grid, Card, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// auth
import { AdministratorModel, useAdminBindForm } from 'pages/system/model/administrator';
import QRCode from 'react-qr-code';

// components
import { useSnackbar } from '../../../../components/snackbar';
import FormProvider, { RHFTextField } from '../../../../components/hook-form';

export default function AccountGeneral() {
  const { enqueueSnackbar } = useSnackbar();

  const { google } = AdministratorModel.useGetGoogleToken();
  const { bindGoogle, isLoading } = AdministratorModel.useBindGoogleToken();

  const methods = useAdminBindForm();
  const { reset, handleSubmit } = methods;

  const onSubmit = handleSubmit(async (values) => {
    await bindGoogle({
      data: {
        ...values,
      },
    });
    reset();
    enqueueSnackbar('保存成功!');
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
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
                  sx={{ mb: 3 }}
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
            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isLoading}>
                保存
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
