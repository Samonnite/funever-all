import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';
import { Game } from 'api/model';
import Dialog from 'components/dialog';
import { DialogActions, Stack, Typography, StackProps } from '@mui/material';
import FormProvider, { RHFAutocomplete, RHFTextField } from 'components/hook-form';
import UploadAws from 'components/upload/upload-aws';
import { isArray } from 'lodash';
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
    const tags = isArray(values?.mates?.tags) ? values?.mates?.tags : [values?.mates?.tags || ''];
    if (data?.id) {
      await update({
        data: {
          id: data?.id,
          ...values,
          mates: {
            ...values?.mates,
            tags,
            logo: values?.logo,
          },
        },
      });
      enqueueSnackbar('操作成功！');
      onClose();
    } else {
      await add({
        data: {
          ...values,
          mates: {
            ...values?.mates,
            tags,
            logo: values?.logo,
          },
        },
      });
      enqueueSnackbar('操作成功！');
      onClose();
    }
  });

  return (
    <Dialog open={open} onClose={onClose} title="游戏编辑" fullWidth maxWidth="xs">
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
        <RHFAutocomplete
          name="mates.tags"
          label="游戏标签(回车键录入)"
          multiple
          freeSolo
          options={data?.mates?.tags?.map((option) => option) || []}
          sx={{ width: '100%' }}
        />
        <Block label="游戏画册" sx={{ mb: 2 }}>
          <UploadAws
            name="mates.banner"
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
              setValue(`mates.banner.${0}`, url);
            }}
            file={data?.mates?.banner?.[0]}
          />
        </Block>
        <RHFTextField name="rank" label="热度权重" placeholder="请输入热度权重" />
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
