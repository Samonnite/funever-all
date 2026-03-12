import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';
import { AdminGameContestPage } from 'api/model';
import Dialog from 'components/dialog';
import { DialogActions } from '@mui/material';
import FormProvider, { RHFAutocomplete, RHFTextField } from 'components/hook-form';
import { GameModel } from 'pages/game/model';
import usePaginationAndSearch from 'hooks/usePaginationAndSearch';
import { ContestModel, useContestUpdateForm } from '../model';

const EditDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data?: AdminGameContestPage;
}> = ({ open, onClose, data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { gameList, refetch } = GameModel.useGameList();
  usePaginationAndSearch({ refetch, isMain: false });
  const { add, isLoading: isAddLoading } = ContestModel.useContestAdd();
  const { update, isLoading: isUpdateLoading } = ContestModel.useContestUpdate();
  const methods = useContestUpdateForm(data);
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
    <Dialog open={open} onClose={onClose} title="赛事编辑" fullWidth maxWidth="xs">
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
        <RHFTextField name="name" label="赛事名称" placeholder="请输入赛事名称" />
        <RHFTextField
          name="intro"
          label="赛事简介"
          placeholder="请输入赛事简介"
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
