import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';
import { AdminTeamPage } from 'api/model';
import Dialog from 'components/dialog';
import { DialogActions } from '@mui/material';
import FormProvider, { RHFTextField } from 'components/hook-form';
import { TeamModel, useTeamPointForm } from '../model';

const TeamDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data?: AdminTeamPage;
}> = ({ open, onClose, data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { addPoint, isLoading } = TeamModel.useTeamPoint();
  const methods = useTeamPointForm();

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (values) => {
    if (data?.id) {
      await addPoint({
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
    <Dialog open={open} onClose={onClose} title="增加战队积分" fullWidth maxWidth="xs">
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <RHFTextField name="point" label="积分(增量变更)" placeholder="请输入积分" />
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

export default TeamDialog;
