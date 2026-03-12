import React, { useEffect, useMemo, useState } from 'react';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';
import { AdminGuessPage } from 'api/model';
import Dialog from 'components/dialog';
import { DialogActions, TextField, Grid } from '@mui/material';
import FormProvider, { RHFAutocomplete, RHFTextField } from 'components/hook-form';
import usePaginationAndSearch from 'hooks/usePaginationAndSearch';
import { GameModel } from 'pages/game/model';
import { ContestModel } from 'pages/contest/model';
import { TeamModel } from 'pages/team/model';
import { CoinModel } from 'pages/coin/model';
import { Controller } from 'react-hook-form';
import { DateTimePicker } from '@mui/x-date-pickers';
import LightboxImg from 'components/lightbox/lighibox-img';
import { defaultPaga } from 'model/common';
import { GuessModel, useGuessUpdateForm } from '../model';

const AddDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data?: AdminGuessPage;
}> = ({ open, onClose, data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const methods = useGuessUpdateForm(data);
  const [title, setTitle] = useState(data?.title);

  const { control, handleSubmit, setValue, watch } = methods;
  const gid = watch('gid');
  const ateam = watch('ateam');
  const bteam = watch('bteam');

  const { gameList, refetch: refetchGame } = GameModel.useGameList();
  usePaginationAndSearch({ refetch: refetchGame, isMain: false });

  const { contestList, refetch: refetchContest } = ContestModel.useContestList();
  usePaginationAndSearch({ refetch: refetchContest, immediate: false, isMain: false });

  const { teamList, refetch: refetchTeam } = TeamModel.useTeamList();
  usePaginationAndSearch({ refetch: refetchTeam, immediate: false, isMain: false });

  const { coinList, refetch } = CoinModel.useCoinList();
  usePaginationAndSearch({ refetch, isMain: false });

  const ateamLogo = useMemo(() => {
    if (ateam) {
      const current = teamList?.find((item) => item.id === ateam);
      return current?.logo || '';
    }
    return '';
  }, [ateam, teamList]);

  const bteamLogo = useMemo(() => {
    if (bteam) {
      const current = teamList?.find((item) => item.id === bteam);
      return current?.logo || '';
    }
    return '';
  }, [bteam, teamList]);

  const { add, isLoading: isAddLoading } = GuessModel.useGameGuessAddSubmit();
  const { update, isLoading: isUpdateLoading } = GuessModel.useGameGuessUpdateSubmit();

  useEffect(() => {
    if (gid) {
      refetchContest({ pageNum: 1, pageSize: 10000 });
      refetchTeam({ pageNum: 1, pageSize: 10000 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gid]);

  useEffect(() => {
    if (gameList?.length && data) {
      const current = gameList.find((item) => item.name === data?.game);
      if (current) {
        setValue('gid', current.id);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameList, data]);

  useEffect(() => {
    if (contestList?.length && data) {
      const current = contestList.find((item) => item.name === data?.contest);
      if (current) {
        setValue('cid', current.id);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contestList, data]);

  useEffect(() => {
    if (coinList?.length && data) {
      setValue('coin', data.coin);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coinList, data]);

  const onSubmit = handleSubmit(async (values) => {
    if (data?.id) {
      await update({
        data: {
          id: data?.id,
          ...values,
          startTimestamp: new Date(values?.startTimestamp).valueOf() || data?.startTime,
          dueTimestamp: new Date(values?.dueTimestamp).valueOf() || data?.dueTime,
        },
      });
      enqueueSnackbar('操作成功！');
      onClose();
    } else {
      await add({
        data: {
          ...values,
          startTimestamp: new Date(values?.startTimestamp).valueOf(),
          dueTimestamp: new Date(values?.dueTimestamp).valueOf(),
        },
      });
      enqueueSnackbar('操作成功！');
      onClose();
    }
  });

  return (
    <Dialog open={open} onClose={onClose} title="竞猜编辑" fullWidth maxWidth="sm">
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <RHFAutocomplete
          name="gid"
          label="选择游戏"
          options={gameList?.map((option) => option.id)}
          getOptionLabel={(id: any) => {
            const option = gameList?.find((item) => item.id === id);
            if (option) {
              return `${option?.name}`;
            }
            return '';
          }}
        />
        <RHFAutocomplete
          name="cid"
          label="选择赛事"
          options={contestList?.map((option) => option.id)}
          getOptionLabel={(id: any) => {
            const option = contestList?.find((item) => item.id === id);
            if (option) {
              return `${option?.name}`;
            }
            return '';
          }}
        />
        <RHFTextField
          name="title"
          label="热议标题"
          placeholder="请输入热议标题"
          value={title}
          rows={3}
          multiline
          inputProps={{
            maxLength: 50,
          }}
          onChange={(e: { target: { value: string } }) => {
            const { value } = e.target;
            setTitle(value);
            setValue('title', value);
          }}
        />
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={5}>
            <RHFAutocomplete
              name="ateam"
              label="Team A"
              sx={{ width: '100%' }}
              options={teamList?.map((option) => option.id)}
              getOptionLabel={(id: any) => {
                const option = teamList?.find((item) => item.id === id);
                if (option) {
                  return `${option?.name}`;
                }
                return '';
              }}
            />
          </Grid>
          <Grid item xs={2} textAlign="center" />
          <Grid item xs={5}>
            <RHFAutocomplete
              sx={{ width: '100%' }}
              name="bteam"
              label="Team B"
              options={teamList?.map((option) => option.id)}
              getOptionLabel={(id: any) => {
                const option = teamList?.find((item) => item.id === id);
                if (option) {
                  return `${option?.name}`;
                }
                return '';
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={5}>
            <LightboxImg src={ateamLogo} sx={{ width: 210, height: 210, borderRadius: 1 }} />
          </Grid>
          <Grid item xs={2} textAlign="center">
            VS
          </Grid>
          <Grid item xs={5}>
            <LightboxImg src={bteamLogo} sx={{ width: 210, height: 210, borderRadius: 1 }} />
          </Grid>
        </Grid>
        <Controller
          name="startTimestamp"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DateTimePicker
              label="比赛开始"
              onChange={onChange}
              value={value}
              ampm={false}
              minDate={new Date('2018-01-01')}
              inputFormat="yyyy/MM/dd HH:mm"
              views={['year', 'month', 'day', 'hours', 'minutes']}
              renderInput={(params) => <TextField size="small" fullWidth {...params} />}
            />
          )}
        />
        <Controller
          name="dueTimestamp"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DateTimePicker
              label="竞猜截止"
              onChange={onChange}
              value={value}
              ampm={false}
              minDate={new Date('2018-01-01')}
              inputFormat="yyyy/MM/dd HH:mm"
              views={['year', 'month', 'day', 'hours', 'minutes']}
              renderInput={(params) => <TextField size="small" fullWidth {...params} />}
            />
          )}
        />

        <RHFAutocomplete
          name="coin"
          label="选择币种"
          options={coinList?.map((option) => option.coin)}
          getOptionLabel={(coin: any) => {
            const option = coinList?.find((item) => item.coin === coin);
            if (option) {
              return `${option?.coin}`;
            }
            return '';
          }}
        />
        <RHFTextField name="coinMin" label="最小投注金额" placeholder="请输入最小投注金额" />
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

export default AddDialog;
