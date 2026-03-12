import React from 'react';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';

import ConfirmDialog from 'components/confirm-dialog';
import { ConfigBanner } from 'api/model';
import { SystemTaskModel } from '../model/task';

const DeleteDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data?: ConfigBanner;
}> = ({ open, onClose, data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { deleteTask, isLoading } = SystemTaskModel.useDeleteTask();

  const handleConfirm = async () => {
    await deleteTask({
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
      content="确认删除任务？"
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
