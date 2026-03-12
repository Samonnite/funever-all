import { DialogActions, Grid } from '@mui/material';
import { useSnackbar } from 'notistack';
import FormProvider, { RHFTextField } from 'components/hook-form';
import Dialog from 'components/dialog';
import { LoadingButton } from '@mui/lab';
import { ConfigPoint } from 'api/model';
import { SystemSignModel, useSignEditForm } from '../model/sign';

const ConfigDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data?: ConfigPoint;
}> = ({ open, onClose, data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { updateSign, isLoading } = SystemSignModel.useUpdateSign();

  const methods = useSignEditForm(data);

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (values) => {
    await updateSign({
      data: {
        ...data,
        ...values,
      },
    });
    enqueueSnackbar('操作成功！');
    onClose();
  });

  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose} title="编辑签到">
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Grid container>
          <RHFTextField name="day" placeholder="请输入奖励天数" label="奖励天数" />
          <RHFTextField name="rewardPoint" placeholder="请输入奖励积分" label="奖励积分" />
          <RHFTextField name="rewardCoin" placeholder="请输入奖励金币" label="奖励金币" />
        </Grid>
        <DialogActions>
          <LoadingButton color="info" onClick={onClose}>
            取消
          </LoadingButton>
          <LoadingButton type="submit" variant="contained" loading={isLoading}>
            保存
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
};

export default ConfigDialog;
