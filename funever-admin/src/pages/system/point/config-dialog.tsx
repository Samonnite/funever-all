import { DialogActions, Grid } from '@mui/material';
import { useSnackbar } from 'notistack';
import FormProvider, { RHFTextField } from 'components/hook-form';
import Dialog from 'components/dialog';
import { LoadingButton } from '@mui/lab';
import { PointConf } from 'api/model';
import { pointTypeText } from 'model/common';
import { SystemPointModel, usePointEditForm } from '../model/point';

const ConfigDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data?: PointConf;
}> = ({ open, onClose, data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { updatePoint, isLoading } = SystemPointModel.useUpdatePoint();

  const methods = usePointEditForm(data);

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (values) => {
    if (data?.id) {
      const params = new FormData();
      params.append('type', data?.type || '');
      params.append('point', values?.point);
      await updatePoint({
        data: params as any,
      });
    }
    enqueueSnackbar('操作成功！');
    onClose();
  });

  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose} title="编辑积分">
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Grid container>
          <RHFTextField
            name="type"
            label="积分类型"
            disabled
            value={pointTypeText[data?.type as keyof typeof pointTypeText]}
          />
          <RHFTextField name="point" placeholder="请输入积分" label="积分" />
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
