import { Grid, IconButton, Paper, TextField } from '@mui/material';
import FormProvider, { RHFQueryAutocomplete, RHFTextField } from 'components/hook-form';
import { LoadingButton } from '@mui/lab';
import { AdminUserMatchQuery } from 'api/model';
import Iconify from 'components/iconify';
import { GameModel } from 'pages/game/model';
import usePaginationAndSearch from 'hooks/usePaginationAndSearch';
import { guessStatusOptions } from 'model/common';
import { Controller } from 'react-hook-form';
import { DateTimePicker } from '@mui/x-date-pickers';
import { useGuessQueryForm } from '../model/index';

const QueryForm: React.FC<{
  refetch: (values: AdminUserMatchQuery) => void;
}> = ({ refetch }) => {
  const { gameList, refetch: refetchGame } = GameModel.useGameList();
  usePaginationAndSearch({ refetch: refetchGame });
  const methods = useGuessQueryForm();
  const { reset, handleSubmit, control } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(refetch)}>
      <Paper sx={{ my: 2 }}>
        <Grid container spacing={2}>
          <Grid item>
            <RHFTextField name="keyword" label="搜索游戏名称/赛事/币种" sx={{ width: 200 }} />
          </Grid>
          <Grid item>
            <RHFQueryAutocomplete
              name="gid"
              label="所属游戏"
              lableKey="id"
              field="id"
              options={gameList}
              getOptionLabel={(id: any) => {
                const option = gameList?.find((item) => item.id === id);
                if (option) {
                  return `${option?.name}`;
                }
                return '';
              }}
              sx={{ width: 180 }}
              handleChange={(values) => refetch(values)}
            />
          </Grid>
          <Grid item>
            <RHFQueryAutocomplete
              name="status"
              label="竞猜状态"
              field="value"
              lableKey="label"
              handleChange={refetch}
              options={guessStatusOptions}
            />
          </Grid>
          <Grid item>
            <Controller
              name="startTimestamp"
              control={control}
              render={({ field: { onChange, value } }) => (
                <DateTimePicker
                  label="开始时间"
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
          </Grid>
          <Grid item>
            <Controller
              name="startTimestamp"
              control={control}
              render={({ field: { onChange, value } }) => (
                <DateTimePicker
                  label="结束时间"
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
          </Grid>
          <Grid item>
            <LoadingButton variant="contained" type="submit" sx={{ mr: 1 }}>
              查询
            </LoadingButton>
            <IconButton
              onClick={() => {
                reset();
                refetch({});
              }}
              sx={{ ml: 1 }}
            >
              <Iconify icon="carbon:reset" />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </FormProvider>
  );
};

export default QueryForm;
