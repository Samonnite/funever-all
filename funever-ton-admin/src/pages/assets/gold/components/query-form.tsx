import { Grid, IconButton, Paper, TextField } from '@mui/material';
import FormProvider, { RHFQueryAutocomplete, RHFTextField } from 'components/hook-form';
import { LoadingButton } from '@mui/lab';
import Iconify from 'components/iconify';
import { Controller } from 'react-hook-form';
import { DateTimePicker } from '@mui/x-date-pickers';
import { goldStatusObj } from 'model/common';
import { useDepositQueryForm } from '../model/index';

const QueryForm: React.FC<{
  refetch: (values: any) => void;
}> = ({ refetch }) => {
  const methods = useDepositQueryForm();
  const { control, reset, handleSubmit } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(refetch)}>
      <Paper sx={{ my: 2 }}>
        <Grid container spacing={2}>
          <Grid item>
            <RHFTextField name="keyword" label="搜索哈希/转入转出地址" sx={{ width: 180 }} />
          </Grid>
          <Grid item>
            <RHFTextField name="uid" label="用户ID" sx={{ width: 120 }} />
          </Grid>
          <Grid item>
            <RHFQueryAutocomplete
              name="status"
              label="状态"
              handleChange={refetch}
              options={goldStatusObj}
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
