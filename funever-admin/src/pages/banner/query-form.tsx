import { Grid, IconButton, Paper } from '@mui/material';
import FormProvider, { RHFQueryAutocomplete, RHFTextField } from 'components/hook-form';
import { LoadingButton } from '@mui/lab';
import { statusListOptions } from 'model/common';
import Iconify from 'components/iconify';
import { DataBannerQuery } from 'api/model';
import { useBannerQueryForm } from './model';

const QueryForm: React.FC<{
  refetch: (values: DataBannerQuery) => void;
}> = ({ refetch }) => {
  const methods = useBannerQueryForm();

  const { reset, handleSubmit } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(refetch)}>
      <Paper sx={{ my: 2 }}>
        <Grid container spacing={2}>
          <Grid item>
            <RHFTextField name="keyword" label="搜索" />
          </Grid>
          <Grid item>
            <RHFQueryAutocomplete
              name="enable"
              label="状态"
              field="value"
              lableKey="label"
              handleChange={refetch}
              options={statusListOptions}
            />
          </Grid>
          <Grid item>
            <LoadingButton variant="contained" type="submit">
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
