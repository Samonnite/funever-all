import { DialogActions, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';

import FormProvider, { RHFTextField } from 'components/hook-form';
import Dialog from 'components/dialog';
import { LoadingButton } from '@mui/lab';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ConfigBase } from 'api/model';
import set from 'lodash/set';
import get from 'lodash/get';
import { SystemSettingModel } from '../model/system-config';

const UpdateDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data?: string;
  systemSetting?: ConfigBase;
  type: 'string' | 'number' | 'array';
}> = ({ open, onClose, data, systemSetting, type }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { updateSetting, isLoading } = SystemSettingModel.useUpdateSetting();

  const methods = useForm<{ value: any }>({
    mode: 'all',
    defaultValues: {
      value:
        type === 'array'
          ? (get(systemSetting, data as keyof ConfigBase) as any)?.join(',')
          : get(systemSetting, data as keyof ConfigBase),
    },
    resolver: yupResolver(
      yup.object().shape({
        value:
          type === 'number'
            ? yup
                .number()
                .required()
                .typeError('请输入数字')
                .when(['aa'], ([a], schema) => schema.min(0))
            : yup.string().required(),
      })
    ),
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async ({ value }) => {
    const updatedSetting = { ...systemSetting };
    if (!data) return;
    let newValue = value;
    if (type === 'array') {
      newValue = newValue.split(',');
    }
    set(updatedSetting, data, newValue); // 这里的 data 是嵌套路径

    await updateSetting({
      data: updatedSetting,
    });
    enqueueSnackbar('更新成功！');
    onClose();
  });

  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose} title="更新配置">
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Grid container>
          <RHFTextField name="value" />
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

export default UpdateDialog;
