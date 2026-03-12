import { LoadingButton } from '@mui/lab';
import { Alert } from '@mui/material';
import useResponsive from 'hooks/useResponsive';
import { useSocket } from 'hooks/useSocket';
import { useSnackbar } from 'notistack';
import { useEffect, useMemo, useState } from 'react';

const SocketError = () => {
  const isDesktop = useResponsive('up', 'lg');
  const { setConnect, readyState } = useSocket();
  const [isReconnect, setIsReconnect] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const isOpen = useMemo(() => readyState === WebSocket.OPEN, [readyState]);

  const isClose = useMemo(
    () => readyState === WebSocket.CLOSING || readyState === WebSocket.CLOSED,
    [readyState]
  );

  const isConnecting = useMemo(() => readyState === WebSocket.CONNECTING, [readyState]);

  useEffect(() => {
    if (isOpen && isReconnect) {
      enqueueSnackbar('消息推送重连成功！');
    }
    return () => setIsReconnect(false);
  }, [isOpen, isReconnect, enqueueSnackbar]);

  return (
    <>
      {isClose && isDesktop && (
        <Alert
          variant="filled"
          severity="error"
          sx={{ width: 700 }}
          action={
            <LoadingButton
              color="inherit"
              size="small"
              loading={isConnecting}
              onClick={() => {
                setConnect(true);
                setTimeout(() => {
                  if (isOpen) {
                    setIsReconnect(true);
                  }
                }, 2000);
              }}
            >
              连接
            </LoadingButton>
          }
        >
          消息推送连接中断，请重新连接
        </Alert>
      )}
    </>
  );
};

export default SocketError;
