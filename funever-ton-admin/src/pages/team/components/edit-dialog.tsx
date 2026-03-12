import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';
import { GameTeam } from 'api/model';
import Dialog from 'components/dialog';
import { DialogActions, Stack, Typography, StackProps } from '@mui/material';
import FormProvider, { RHFAutocomplete, RHFTextField } from 'components/hook-form';
import UploadAws from 'components/upload/upload-aws';
import { GameModel } from 'pages/game/model';
import usePaginationAndSearch from 'hooks/usePaginationAndSearch';
import { TeamModel, useTeamUpdateForm } from '../model';

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
  data?: GameTeam;
}> = ({ open, onClose, data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { gameList, refetch } = GameModel.useGameList();
  usePaginationAndSearch({ refetch, isMain: false });
  const { add, isLoading: isAddLoading } = TeamModel.useTeamAdd();
  const { update, isLoading: isUpdateLoading } = TeamModel.useTeamUpdate();
  const methods = useTeamUpdateForm(data);
  const [intro, setIntro] = useState(data?.intro);

  const { handleSubmit, setValue } = methods;

  const onSubmit = handleSubmit(async (values) => {
    if (data?.id) {
      await update({
        data: {
          id: data?.id,
          ...values,
        },
      });
      enqueueSnackbar('操作成功！');
      onClose();
    } else {
      await add({
        data: {
          ...values,
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
      title={data?.id ? '战队编辑' : '战队添加'}
      fullWidth
      maxWidth="xs"
    >
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <RHFAutocomplete
          name="gid"
          label="所属游戏"
          options={gameList.map((option) => option.id)}
          getOptionLabel={(id: any) => {
            const option = gameList?.find((item) => item.id === id);
            if (option) {
              return `${option?.name}`;
            }
            return '';
          }}
        />
        <RHFTextField name="name" label="战队名称" placeholder="请输入战队名称" />
        <RHFTextField
          name="intro"
          label="战队简介"
          placeholder="请输入战队简介"
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
        <Block label="战队Logo" sx={{ mb: 2 }}>
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
