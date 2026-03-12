import React from 'react';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';

import ConfirmDialog from 'components/confirm-dialog';
import { AdminGameContestPage } from 'api/model';
import { getIds } from 'utils';
import { ContestModel } from '../model/index';

const DeleteDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data?: AdminGameContestPage[];
}> = ({ open, onClose, data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { deleteContest, isLoading } = ContestModel.useDeleteContest();
  const handleConfirm = async () => {
    await deleteContest({
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
      content="确认删除赛事？"
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
