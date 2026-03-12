import { Button, Grid, IconButton, Paper } from '@mui/material';
import FormProvider, { RHFQueryAutocomplete, RHFTextField } from 'components/hook-form';
import { adminList, statusListOptions } from 'model/common';
import Iconify from 'components/iconify';
import { AdminQueryParams, useAdminQueryForm } from '../model/administrator';

const QueryForm: React.FC<{
  refetch: (values: AdminQueryParams) => void;
}> = ({ refetch }) => {
  const methods = useAdminQueryForm();
  const { reset, handleSubmit } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(refetch)}>
      <Paper sx={{ my: 2 }}>
        <Grid container spacing={2}>
          <Grid item>
            <RHFTextField name="keyword" label="管理员账号" sx={{ width: 130 }} />
          </Grid>
          <Grid item>
            <RHFQueryAutocomplete
              name="userEnable"
              label="状态"
              field="value"
              lableKey="label"
              handleChange={refetch}
              options={statusListOptions}
            />
          </Grid>
          <Grid item>
            <RHFQueryAutocomplete
              name="userAdmin"
              label="管理员类型"
              field="value"
              lableKey="label"
              handleChange={refetch}
              options={adminList}
              sx={{ width: 180 }}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit" sx={{ mr: 1 }}>
              查询
            </Button>
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
        <Grid container sx={{ mt: 2, ml: 3 }} />
      </Paper>
    </FormProvider>
  );
};

export default QueryForm;
