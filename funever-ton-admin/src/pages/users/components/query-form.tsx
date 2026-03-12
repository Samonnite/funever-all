import { Grid, IconButton, Paper } from '@mui/material';
import FormProvider, { RHFTextField } from 'components/hook-form';
import { LoadingButton } from '@mui/lab';
import { AdminUserQuery } from 'api/model';
import Iconify from 'components/iconify';
import { useClientUserQueryForm } from '../model';

const QueryForm: React.FC<{
  refetch: (values: AdminUserQuery) => void;
}> = ({ refetch }) => {
  const methods = useClientUserQueryForm();
  const { reset, handleSubmit } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(refetch)}>
      <Paper sx={{ my: 2 }}>
        <Grid container spacing={2}>
          <Grid item>
            <RHFTextField name="keyword" label="搜索账" sx={{ width: 180 }} />
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
