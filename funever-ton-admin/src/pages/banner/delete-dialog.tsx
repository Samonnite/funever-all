import React from 'react';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';

import ConfirmDialog from 'components/confirm-dialog';
import { ConfigBanner } from 'api/model';
import { BannerModel } from './model';

const DeleteDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data?: ConfigBanner;
}> = ({ open, onClose, data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { deleteBanner, isLoading } = BannerModel.useDeleteBanner();

  const handleConfirm = async () => {
    await deleteBanner({
      params: {
        id: data?.id as number,
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
      content="确认删除Banner？"
      onKeyUp={() => handleConfirm()}
      action={
        <LoadingButton variant="contained" loading={isLoading} onClick={() => handleConfirm()}>
          确认
        </LoadingButton>
      }
    />
  );
};

export default DeleteDialog;
