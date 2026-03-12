import pako from 'pako';
import { useMemoizedFn, useSafeState } from 'ahooks';
import { useEffect } from 'react';
import { isArray } from 'lodash';
import PQueue from 'p-queue';
import { useAuthContext } from 'auth/useAuthContext';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useSocket } from './useSocket';

export const useSocketMessage = ({ ch, event }: { ch: string; event?: string }) => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const queue = new PQueue({ concurrency: 1, autoStart: true });
  const { lastMessage, sendJsonMessage, setConnect, ...rest } = useSocket();
  const [filteredMessagesData, setFilteredMessagesData] = useSafeState<any[]>([]);

  const processMessages = useMemoizedFn(({ message }: { message: any }) => {
    try {
      const responseMessage = JSON.parse(pako.inflate(message, { to: 'string' }));
      if (responseMessage?.ch === ch && responseMessage?.data) {
        const data = isArray(responseMessage.data)
          ? responseMessage.data
          : [responseMessage.data.value];

        if (!event || responseMessage.data.event === event) {
          return data;
        }
      }
      if (responseMessage.ch === 'login' && responseMessage.code !== '200') {
        setConnect(false);
        enqueueSnackbar(responseMessage.msg, { variant: 'error' });
        logout?.();
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
    return [];
  });

  useEffect(() => {
    const messageData = lastMessage?.data;
    if (messageData) {
      queue.add(async () => {
        const newData = await processMessages({ message: messageData });
        setFilteredMessagesData(newData);
      });
    }
    return () => queue.clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastMessage?.data]);

  const unsubscribe = () => {
    queue.clear();
  };

  return { lastMessage: filteredMessagesData, sendJsonMessage, unsubscribe, ...rest };
};
