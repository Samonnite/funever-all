import { useDropzone, DropzoneOptions } from 'react-dropzone';
// material
import { styled } from '@mui/material/styles';
import { Box, CircularProgress, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
// utils
import Iconify from 'components/iconify/Iconify';
import zIndex from '@mui/material/styles/zIndex';
//

// ----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  width: 60,
  height: 60,
  margin: 'auto',
  borderRadius: '50%',
  padding: theme.spacing(0.25),
  border: `1px dashed ${theme.palette.grey[500]}`,
}));

const DropZoneStyle = styled('div')({
  zIndex: 0,
  width: '100%',
  height: '100%',
  outline: 'none',
  display: 'flex',
  overflow: 'hidden',
  borderRadius: '50%',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  '& > *': { width: '100%', height: '100%' },
  '&:hover': {
    cursor: 'pointer',
    '& .placeholder': {
      zIndex: 9,
    },
  },
});
const PlaceholderStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.neutral,
  transition: theme.transitions.create('opacity', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': { opacity: 0.72 },
}));

// ----------------------------------------------------------------------

interface CustomFile extends File {
  path?: string;
}

interface UploadSingleFileProps extends DropzoneOptions {
  error?: boolean;
  file: CustomFile | string | null;
  helperText?: React.ReactNode;
  tip?: React.ReactNode;
  sx?: SxProps<Theme>;
  loading?: boolean;
}
export default function UploadSingleFile({
  error = false,
  file,
  sx,
  helperText,
  tip,
  loading,
  ...other
}: UploadSingleFileProps) {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    multiple: false,
    ...other,
  });

  return (
    <>
      <RootStyle sx={sx} className="single-upload">
        <DropZoneStyle
          {...getRootProps()}
          className="single-upload-zone"
          sx={{
            ...(isDragActive && { opacity: 0.72 }),
            ...((isDragReject || error) && {
              color: 'error.main',
              borderColor: 'error.light',
              bgcolor: 'error.lighter',
            }),
            ...(file && { padding: '12% 0' }),
          }}
        >
          <input {...getInputProps()} />

          <PlaceholderStyle
            className="placeholder"
            sx={{
              ...(file &&
                !loading && {
                  opacity: 0,
                  color: 'common.white',
                  bgcolor: 'grey.900',
                  '&:hover': { opacity: 0.72 },
                }),
              zIndex: 999,
            }}
          >
            {loading ? (
              <CircularProgress size="1em" color="inherit" />
            ) : (
              <Box
                component={Iconify}
                icon="material-symbols:upload"
                sx={{ width: 24, height: 24 }}
              />
            )}
          </PlaceholderStyle>

          {file && (
            <Box
              component="img"
              alt="file preview"
              src={file as string}
              sx={{
                top: 0,
                borderRadius: 1,
                objectFit: 'cover',
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
            />
          )}
        </DropZoneStyle>
      </RootStyle>
      {tip && tip}
      {helperText && helperText}
    </>
  );
}
