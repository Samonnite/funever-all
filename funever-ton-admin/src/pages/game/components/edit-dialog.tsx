import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';
import { Game } from 'api/model';
import Dialog from 'components/dialog';
import { DialogActions, Stack, Typography, StackProps } from '@mui/material';
import FormProvider, { RHFTextField } from 'components/hook-form';
import UploadAws from 'components/upload/upload-aws';
import { GameModel, useGameUpdateForm } from '../model';

interface BlockProps extends StackProps {
  label?: string;
  children: React.ReactNode;
}
export function Block({ label = 'RHFTextField', sx, children }: BlockProps) {
  return (
    <Stack spacing={1} sx={{ width: 1, ...sx }}>
      <Typography
        variant="caption"
        sx={{
          textAlign: 'left',
          color: 'text.disabled',
        }}
      >
        {label}
      </Typography>
      {children}
    </Stack>
  );
}
const EditDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data?: Game;
}> = ({ open, onClose, data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { add, isLoading: isAddLoading } = GameModel.useGameAdd();
  const { update, isLoading: isUpdateLoading } = GameModel.useGameUpdate();
  const methods = useGameUpdateForm(data);
  const [intro, setIntro] = useState(data?.intro);

  const { handleSubmit, setValue } = methods;

  const onSubmit = handleSubmit(async (values) => {
    if (data?.id) {
      await update({
        data: {
          id: data?.id,
          ...values,
          logo: values?.logo,
        },
      });
      enqueueSnackbar('操作成功！');
      onClose();
    } else {
      await add({
        data: {
          ...values,
          logo: values?.logo,
        },
      });
      enqueueSnackbar('操作成功！');
      onClose();
    }
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={data?.id ? '游戏编辑' : '游戏添加'}
      fullWidth
      maxWidth="xs"
    >
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <RHFTextField name="name" label="游戏名称" placeholder="请输入游戏名称" />
        <RHFTextField
          name="intro"
          label="游戏简介"
          placeholder="请输入游戏简介"
          value={intro}
          rows={3}
          multiline
          inputProps={{
            maxLength: 2000,
          }}
          onChange={(e: { target: { value: string } }) => {
            const { value } = e.target;
            setIntro(value);
            setValue('intro', value);
          }}
        />
        <Block label="游戏Logo" sx={{ mb: 2 }}>
          <UploadAws
            name="logo"
            path="game"
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
              setValue('logo', url);
            }}
            file={data?.logo}
          />
        </Block>
        <RHFTextField name="sorted" label="游戏排序" placeholder="请输入游戏排序" />
        <DialogActions>
          <LoadingButton color="info" onClick={onClose}>
            取消
          </LoadingButton>
          <LoadingButton
            type="submit"
            variant="contained"
            loading={isAddLoading || isUpdateLoading}
          >
            确认
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
};

export default EditDialog;
