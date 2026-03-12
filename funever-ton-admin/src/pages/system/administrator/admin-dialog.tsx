import { DialogActions, Grid, MenuItem } from '@mui/material';
import React from 'react';
import { useSnackbar } from 'notistack';

import FormProvider, { RHFTextField, RHFSelect } from 'components/hook-form';
import Dialog from 'components/dialog';
import { LoadingButton } from '@mui/lab';
import { AdminUser } from 'api/model';
import { adminList, statusListOptions } from 'model/common';
import { AdministratorModel, useAdminEditForm } from '../model/administrator';

const AdminDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data?: AdminUser;
}> = ({ open, onClose, data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { addAdmin, isLoading: isAddLoading } = AdministratorModel.useAddAdmin();
  const { updateAdmin, isLoading: isUpdateLoading } = AdministratorModel.useUpdateAdmin();

  const methods = useAdminEditForm(data);

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (values) => {
    if (data?.uid) {
      await updateAdmin({
        data: {
          ...values,
          uid: data?.uid,
          userEnable: Number(values?.userEnable) === 1,
          userAdmin: Number(values?.userAdmin) === 1,
        },
      });
    } else {
      await addAdmin({
        data: {
          ...values,
          userEnable: Number(values?.userEnable) === 1,
          userAdmin: Number(values?.userAdmin) === 1,
        },
      });
    }
    enqueueSnackbar('操作成功！');
    onClose();
  });

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="xs"
      onClose={onClose}
      title={data ? '编辑管理员账号' : '添加管理员账号'}
    >
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Grid container>
          <RHFTextField name="name" placeholder="请输入管理员姓名" label="管理员姓名" />
          <RHFTextField name="account" placeholder="请输入管理员账号" label="管理员账号" />
          <RHFSelect name="userAdmin" label="角色" placeholder="请选择角色">
            {adminList?.map((pos) => (
              <MenuItem key={pos.value} value={pos.value}>
                {pos.label}
              </MenuItem>
            ))}
          </RHFSelect>
          <RHFTextField name="userPassword" placeholder="请输入密码" label="密码" />
          <RHFSelect name="userEnable" label="状态">
            {statusListOptions.map((pos) => (
              <MenuItem key={pos.label} value={pos.value}>
                {pos.label}
              </MenuItem>
            ))}
          </RHFSelect>
        </Grid>
        <DialogActions>
          <LoadingButton color="info" onClick={onClose}>
            取消
          </LoadingButton>
          <LoadingButton
            type="submit"
            variant="contained"
            loading={isAddLoading || isUpdateLoading}
          >
            保存
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
};

export default AdminDialog;
