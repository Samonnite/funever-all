import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';
import { AdminGameMatch } from 'api/model';
import Dialog from 'components/dialog';
import { DialogActions, Grid } from '@mui/material';
import FormProvider, { RHFTextField } from 'components/hook-form';
import { GuessModel, useGuessCompeteForm } from '../model';

const EditDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data?: AdminGameMatch;
}> = ({ open, onClose, data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { complete, isLoading } = GuessModel.useGuessComplete();
  const methods = useGuessCompeteForm();

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (values) => {
    if (data?.id) {
      await complete({
        data: {
          id: data?.id,
          ...values,
        },
      });
      enqueueSnackbar('操作成功！');
      onClose();
    }
  });

  return (
    <Dialog open={open} onClose={onClose} title="竞猜结算" fullWidth maxWidth="xs">
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={5}>
            <RHFTextField
              name="ateamWin"
              label={`输入${data?.ateam?.name}比分`}
              placeholder={`请输入${data?.ateam?.name}比分`}
            />
          </Grid>
          <Grid item xs={1}>
            VS
          </Grid>
          <Grid item xs={5}>
            <RHFTextField
              name="bteamWin"
              label={`输入${data?.bteam?.name}比分`}
              placeholder={`请输入${data?.bteam?.name}比分`}
            />
          </Grid>
        </Grid>

        <DialogActions>
          <LoadingButton color="info" onClick={onClose}>
            取消
          </LoadingButton>
          <LoadingButton type="submit" variant="contained" loading={isLoading}>
            确认
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
};

export default EditDialog;
