import { Grid, IconButton, Paper } from '@mui/material';
import FormProvider, { RHFQueryAutocomplete, RHFTextField } from 'components/hook-form';
import { LoadingButton } from '@mui/lab';
import { AdminUserClientQuery } from 'api/model';
import Iconify from 'components/iconify';
import { GameModel } from 'pages/game/model';
import usePaginationAndSearch from 'hooks/usePaginationAndSearch';
import { guessStatusOptions, blockOkOptions } from 'model/common';
import { useGuessQueryForm } from '../model/index';

const QueryForm: React.FC<{
  refetch: (values: AdminUserClientQuery) => void;
}> = ({ refetch }) => {
  const { gameList, refetch: refetchGame } = GameModel.useGameList();
  usePaginationAndSearch({ refetch: refetchGame });
  const methods = useGuessQueryForm();
  const { reset, handleSubmit } = methods;

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
            <RHFQueryAutocomplete
              name="blockOk"
              label="链上状态"
              field="value"
              lableKey="label"
              handleChange={refetch}
              options={blockOkOptions}
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
