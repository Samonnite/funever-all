import { DialogActions, Grid, MenuItem } from '@mui/material';
import { useSnackbar } from 'notistack';
import FormProvider, { RHFSelect, RHFTextField } from 'components/hook-form';
import Dialog from 'components/dialog';
import { LoadingButton } from '@mui/lab';
import { ConfigTask } from 'api/model';
import UploadAws from 'components/upload/upload-aws';
import { Block } from 'pages/coin/components/edit-dialog';
import { SystemTaskModel, useTaskEditForm } from '../model/task';

const ConfigDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data?: ConfigTask;
}> = ({ open, onClose, data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { addTask, isLoading } = SystemTaskModel.useAddTask();
  const { updateTask, isLoading: isUpdateLoading } = SystemTaskModel.useUpdateTask();

  const methods = useTaskEditForm(data);

  const { handleSubmit, setValue } = methods;

  const onSubmit = handleSubmit(async (values) => {
    if (data?.id) {
      await updateTask({
        data: {
          ...data,
          ...values,
          dayRepeat: Number(values?.dayRepeat) === 1,
        },
      });
    } else {
      await addTask({
        data: {
          ...values,
          dayRepeat: Number(values?.dayRepeat) === 1,
        },
      });
    }
    enqueueSnackbar('操作成功！');
    onClose();
  });

  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose} title="编辑任务">
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Grid container>
          <RHFTextField name="taskName" placeholder="请输入任务名称" label="任务名称" />
          <Block label="任务图标" sx={{ mb: 2 }}>
            <UploadAws
              name="taskLogo"
              path="task"
              sx={{
                '&.single-upload': {
                  borderRadius: 2,
                  width: 80,
                  height: 80,
                  '.single-upload-zone': {
                    borderRadius: 2,
                  },
                },
              }}
              handleFileUpload={(url) => {
                setValue('taskLogo', url);
              }}
              file={data?.taskLogo}
            />
          </Block>
          <RHFSelect name="taskType" label="任务类型">
            {[
              {
                label: '邀请好友',
                value: 'invite',
              },
              {
                label: '跳转链接',
                value: 'target',
              },
            ].map((pos) => (
              <MenuItem key={pos.label} value={pos.value}>
                {pos.label}
              </MenuItem>
            ))}
          </RHFSelect>
          <RHFTextField name="taskTarget" placeholder="请输入任务目标" label="任务目标" />
          <RHFSelect name="dayRepeat" label="是否每日重复">
            {[
              {
                label: '是',
                value: '1',
              },
              {
                label: '否',
                value: '0',
              },
            ].map((pos) => (
              <MenuItem key={pos.label} value={pos.value}>
                {pos.label}
              </MenuItem>
            ))}
          </RHFSelect>
          <RHFTextField name="minDelay" placeholder="请输入延迟分钟" label="延迟分钟" />
          <RHFTextField name="rewardPoint" placeholder="请输入奖励积分" label="奖励积分" />
          <RHFTextField name="rewardCoin" placeholder="请输入奖励金币" label="奖励金币" />
        </Grid>
        <DialogActions>
          <LoadingButton color="info" onClick={onClose}>
            取消
          </LoadingButton>
          <LoadingButton type="submit" variant="contained" loading={isLoading || isUpdateLoading}>
            保存
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
};

export default ConfigDialog;
