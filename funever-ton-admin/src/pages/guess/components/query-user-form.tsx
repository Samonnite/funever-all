import { Grid, IconButton, Paper } from '@mui/material';
import FormProvider, { RHFQueryAutocomplete, RHFTextField } from 'components/hook-form';
import { LoadingButton } from '@mui/lab';
import Iconify from 'components/iconify';
import { userGuessQueryText } from 'model/common';
import { useGuessUserQueryForm } from '../model/index';

const QueryForm: React.FC<{
  refetch: (values: any) => void;
}> = ({ refetch }) => {
  const methods = useGuessUserQueryForm();
  const { reset, handleSubmit } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(refetch)}>
      <Paper sx={{ my: 2 }}>
        <Grid container spacing={2}>
          <Grid item>
            <RHFTextField name="uid" label="用户ID" sx={{ width: 120 }} />
          </Grid>
          <Grid item>
            <RHFQueryAutocomplete
              name="status"
              label="竞猜状态"
              handleChange={refetch}
              options={userGuessQueryText}
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
