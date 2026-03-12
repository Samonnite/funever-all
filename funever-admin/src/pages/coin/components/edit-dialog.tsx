import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';
import { BlockCoin } from 'api/model';
import Dialog from 'components/dialog';
import { DialogActions, Stack, Typography, StackProps, MenuItem } from '@mui/material';
import FormProvider, { RHFSelect, RHFTextField } from 'components/hook-form';
import UploadAws from 'components/upload/upload-aws';
import { statusListOptions } from 'model/common';
import { CoinModel, useCoinUpdateForm } from '../model';

interface BlockProps extends StackProps {
  label?: string;
  children: React.ReactNode;
}
export function Block({ label = 'RHFTextField', sx, children }: BlockProps) {
  return (
    <Stack spacing={1} sx={{ width: 1, ...sx }}>
      <Typography
        variant="caption"
        sx={{
          textAlign: 'left',
          color: 'text.disabled',
        }}
      >
        {label}
      </Typography>
      {children}
    </Stack>
  );
}
const EditDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data?: BlockCoin;
}> = ({ open, onClose, data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { add, isLoading: isAddLoading } = CoinModel.useCoinAdd();
  const { update, isLoading: isUpdateLoading } = CoinModel.useCoinUpdate();
  const methods = useCoinUpdateForm(data);

  const { handleSubmit, setValue } = methods;

  const onSubmit = handleSubmit(async (values) => {
    if (data?.id) {
      await update({
        data: {
          id: data?.id,
          ...values,
          enable: Number(values?.enable) === 1,
        },
      });
      enqueueSnackbar('操作成功！');
      onClose();
    } else {
      await add({
        data: {
          ...values,
          enable: Number(values?.enable) === 1,
        },
      });
      enqueueSnackbar('操作成功！');
      onClose();
    }
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="币种编辑"
      PaperProps={{
        sx: {
          width: '100%',
          minWidth: '500px',
          maxWidth: '500px',
        },
      }}
    >
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <RHFTextField name="coin" label="币种名称" placeholder="请输入币种名称" />
        <RHFTextField name="mint" label="币种合约信息" placeholder="请输入币种合约信息" />
        <Block label="币种Logo" sx={{ mb: 2 }}>
          <UploadAws
            name="logo"
            path="game"
            sx={{
              '&.single-upload': {
                borderRadius: 2,
                width: 80,
                height: 80,
                '.single-upload-zone': {
                  borderRadius: 2,
                },
              },
            }}
            handleFileUpload={(url) => {
              setValue('logo', url);
            }}
            file={data?.logo}
          />
        </Block>
        <RHFSelect name="enable" label="启用状态">
          {statusListOptions.map((pos) => (
            <MenuItem key={pos.label} value={pos.value}>
              {pos.label}
            </MenuItem>
          ))}
        </RHFSelect>
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

export default EditDialog;
