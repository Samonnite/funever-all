import React from 'react';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';
import { UserWallet } from 'api/model';
import Dialog from 'components/dialog';
import { DialogActions, MenuItem } from '@mui/material';
import FormProvider, { RHFSelect, RHFTextField } from 'components/hook-form';
import { walletTypeObj } from 'model/common';
import { WalletModel, useWalletUpdateForm } from '../model';

const EditDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data?: UserWallet;
}> = ({ open, onClose, data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { update, isLoading } = WalletModel.useWalletUpdate();
  const methods = useWalletUpdateForm(data);

  const { handleSubmit, watch } = methods;

  const changeType = watch('changeType');

  const onSubmit = handleSubmit(async (values) => {
    let qty = 0;
    if (changeType === 1) {
      qty = values?.qty;
    }
    if (changeType === 2) {
      qty = -Number(values?.qty);
    }

    if (data?.uid) {
      await update({
        data: {
          uid: data?.uid,
          remark: values?.remark,
          type: values?.type,
          qty,
        },
      });
      enqueueSnackbar('操作成功！');
      onClose();
    }
  });

  return (
    <Dialog open={open} onClose={onClose} title="钱包修改" fullWidth maxWidth="xs">
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <RHFSelect name="type" label="账户选择">
          {Object.entries(walletTypeObj).map((pos) => (
            <MenuItem key={pos[0]} value={pos[0]}>
              {pos[1]}
            </MenuItem>
          ))}
        </RHFSelect>
        <RHFSelect label="资金变动类型" name="changeType">
          <MenuItem value={1}>充值</MenuItem>
          <MenuItem value={2}>扣款</MenuItem>
        </RHFSelect>
        <RHFTextField name="qty" label="数量" />
        <RHFTextField name="remark" label="备注" />
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
