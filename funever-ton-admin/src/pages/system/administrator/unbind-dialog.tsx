import React from 'react';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';

import ConfirmDialog from 'components/confirm-dialog';
import { AdminUser } from 'api/model';
import { AdministratorModel } from '../model/administrator';

const UnbindDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data?: AdminUser;
}> = ({ open, onClose, data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { updateAdmin, isLoading } = AdministratorModel.useUpdateAdmin();

  const handleConfirm = async () => {
    await updateAdmin({
      data: {
        ...data,
        unbindGoogleToken: true,
      },
    });
    enqueueSnackbar('操作成功！');
    onClose();
  };

  return (
    <ConfirmDialog
      open={open}
      onClose={onClose}
      title="操作确认"
      content="确认解除谷歌绑定？"
      onKeyUp={() => handleConfirm()}
      action={
        <LoadingButton variant="contained" loading={isLoading} onClick={() => handleConfirm()}>
          确认
        </LoadingButton>
      }
    />
  );
};

export default UnbindDialog;
