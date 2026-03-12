import React from 'react';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';

import ConfirmDialog from 'components/confirm-dialog';
import { Game } from 'api/model';
import { getIds } from 'utils';
import { GameModel } from '../model/index';

const DeleteDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data?: Game[];
}> = ({ open, onClose, data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { deleteGame, isLoading } = GameModel.useDeleteGame();
  const handleConfirm = async () => {
    await deleteGame({
      data: getIds(data),
    });
    enqueueSnackbar('删除成功');
    onClose();
  };

  return (
    <ConfirmDialog
      open={open}
      onClose={onClose}
      title="操作确认"
      content="确认删除游戏？"
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
