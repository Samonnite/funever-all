import React from 'react';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';
import { UserClient } from 'api/model';
import Dialog from 'components/dialog';
import { DialogActions, MenuItem } from '@mui/material';
import FormProvider, { RHFSelect } from 'components/hook-form';
import { typeList } from 'model/common';
import { ClientUserModel, useClientUserUpdateForm } from '../model';

const StatusDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data?: UserClient;
}> = ({ open, onClose, data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { update, isLoading } = ClientUserModel.useClientUserUpdate();
  const methods = useClientUserUpdateForm(data);

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (values) => {
    if (data?.uid) {
      await update({
        data: {
          uid: data?.uid,
          ...values,
        },
      });
      enqueueSnackbar('操作成功！');
      onClose();
    }
  });

  return (
    <Dialog open={open} onClose={onClose} title="用户编辑" fullWidth maxWidth="xs">
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <RHFSelect name="type" label="用户类型">
          {typeList.map((pos) => (
            <MenuItem key={pos.label} value={pos.value}>
              {pos.label}
            </MenuItem>
          ))}
        </RHFSelect>
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

export default StatusDialog;
