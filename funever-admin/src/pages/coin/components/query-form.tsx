import { Grid, IconButton, Paper } from '@mui/material';
import FormProvider, { RHFQueryAutocomplete, RHFTextField } from 'components/hook-form';
import { LoadingButton } from '@mui/lab';
import { AdminUserClientQuery } from 'api/model';
import Iconify from 'components/iconify';
import { statusListOptions } from 'model/common';
import { useCoinQueryForm } from '../model/index';

const QueryForm: React.FC<{
  refetch: (values: AdminUserClientQuery) => void;
}> = ({ refetch }) => {
  const methods = useCoinQueryForm();
  const { reset, handleSubmit } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(refetch)}>
      <Paper sx={{ my: 2 }}>
        <Grid container spacing={2}>
          <Grid item>
            <RHFTextField name="keyword" label="搜索币种名称" sx={{ width: 180 }} />
          </Grid>
          <Grid item>
            <RHFQueryAutocomplete
              name="enable"
              label="启用状态"
              field="value"
              lableKey="label"
              handleChange={refetch}
              options={statusListOptions}
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
