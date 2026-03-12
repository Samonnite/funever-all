import React from 'react';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';

import ConfirmDialog from 'components/confirm-dialog';
import { GuessModel } from '../model/index';

const DeleteDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data: number;
}> = ({ open, onClose, data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { deleteGuess, isLoading } = GuessModel.useGameGuessDelete();
  const handleConfirm = async () => {
    await deleteGuess({
      params: {
        id: data,
      },
    });
    enqueueSnackbar('操作成功');
    onClose();
  };

  return (
    <ConfirmDialog
      open={open}
      onClose={onClose}
      title="操作确认"
      content="确认进行删除竞猜？"
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
