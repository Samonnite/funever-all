import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormHelperText, SxProps, Theme } from '@mui/material';
import { Accept } from 'react-dropzone';
import { useSnackbar } from 'notistack';

import UploadSingleFile from './UploadSingleFile';
import { uploadFn } from './upload-fn';

const UploadAws = ({
  file,
  name,
  helperText,
  accept,
  handleFileUpload,
  path,
  ...other
}: {
  accept?: Accept;
  name: string;
  file?: string;
  helperText?: string;
  tip?: React.ReactNode;
  sx?: SxProps<Theme>;
  path?: string;
  handleFileUpload: (fileId: string) => void;
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const { control } = useFormContext();
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState('');
  const onDrop = async (files: File[]) => {
    const fileToUpload = files[0];
    setLoading(true);
    uploadFn(fileToUpload, path)
      .then(({ localUrl, url }) => {
        setImage(localUrl);
        handleFileUpload(url);
        enqueueSnackbar('上传成功！');
      })
      .catch((err) => {
        enqueueSnackbar(err.message || '上传失败', {
          variant: 'error',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <UploadSingleFile
          accept={accept || { 'image/*': [] }}
          file={image || field.value}
          maxSize={104857600}
          onDrop={onDrop}
          error={!!error}
          loading={loading}
          helperText={
            (!!error || helperText) && (
              <FormHelperText error={!!error} sx={{ px: 2 }}>
                {error ? error?.message : helperText}
              </FormHelperText>
            )
          }
          {...other}
        />
      )}
    />
  );
};

export default UploadAws;
