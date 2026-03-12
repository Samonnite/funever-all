import { Grid, IconButton, Paper } from '@mui/material';
import FormProvider from 'components/hook-form';
import { AdminUserClientQuery } from 'api/model';
import Iconify from 'components/iconify';
import { useBlockQueryForm } from '../model/index';

const QueryForm: React.FC<{
  refetch: (values: AdminUserClientQuery) => void;
}> = ({ refetch }) => {
  const methods = useBlockQueryForm();
  const { handleSubmit } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(refetch)}>
      <Paper sx={{ my: 2 }}>
        <Grid container spacing={2}>
          <Grid item>
            <IconButton type="submit" sx={{ ml: 1 }}>
              <Iconify icon="carbon:reset" />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </FormProvider>
  );
};

export default QueryForm;
