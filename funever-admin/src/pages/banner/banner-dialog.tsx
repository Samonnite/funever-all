import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { DataBanner } from 'api/model';
import { DialogActions, MenuItem } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import FormProvider, { RHFSelect, RHFTextField } from 'components/hook-form';
import Dialog from 'components/dialog';
import { Block } from 'pages/coin/components/edit-dialog';
import UploadAws from 'components/upload/upload-aws';
import { statusListOptions } from 'model/common';
import { BannerModel, useBannerEditForm } from './model';

const BannerDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  data?: DataBanner;
}> = ({ open, onClose, data }) => {
  const [content, setContent] = useState(data?.content);
  const { enqueueSnackbar } = useSnackbar();
  const { addBanner, isLoading: isAddLoading } = BannerModel.useAddBanner();
  const { updateBanner, isLoading: isUpdateLoading } = BannerModel.useUpdateBanner();

  const methods = useBannerEditForm(data);

  const { setValue, handleSubmit } = methods;

  const onSubmit = handleSubmit(async (values) => {
    if (data?.id) {
      await updateBanner({
        data: {
          ...data,
          ...values,
          sorted: Number(values.sorted),
          enable: Number(values?.enable) === 1,
        },
      });
    } else {
      await addBanner({
        data: {
          ...values,
          sorted: Number(values.sorted),
          enable: Number(values?.enable) === 1,
        },
      });
    }
    enqueueSnackbar('操作成功！');
    onClose();
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={data ? '编辑Banner' : '新增Banner'}
      fullWidth
      maxWidth="xs"
    >
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <RHFTextField label="标题" name="title" />
        <RHFTextField label="跳转地址" name="jumpUrl" />
        <RHFTextField
          label="内容"
          value={content}
          rows={5}
          multiline
          inputProps={{
            maxLength: 2000,
          }}
          name="content"
          onChange={(e: { target: { value: string } }) => {
            const { value } = e.target;
            setContent(value);
            setValue('content', value);
          }}
        />
        <Block label="图片" sx={{ mb: 2 }}>
          <UploadAws
            name="imgUrl"
            path="banner"
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
              setValue('imgUrl', url);
            }}
            file={data?.imgUrl}
          />
        </Block>

        <RHFSelect name="enable" label="状态">
          {statusListOptions.map((pos) => (
            <MenuItem key={pos.label} value={pos.value}>
              {pos.label}
            </MenuItem>
          ))}
        </RHFSelect>
        <RHFTextField label="排序" name="sorted" />

        <DialogActions>
          <LoadingButton color="info" onClick={onClose}>
            取消
          </LoadingButton>
          <LoadingButton
            variant="contained"
            type="submit"
            loading={isAddLoading || isUpdateLoading}
          >
            保存
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
};

export default BannerDialog;
