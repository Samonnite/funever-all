import useWebSocket from 'react-use-websocket';
import { atom, useAtom } from 'jotai';

const useWebSocketHost = () => {
  const { host } = window.location;
  let wsHost = `wss://${host}`;

  if (host.includes('test') || host.includes('localhost')) {
    wsHost = 'wss://api.airbridgedev.com';
  }

  return wsHost;
};

const connectAtom = atom<boolean>(true);

export const useSocket = () => {
  const [connect, setConnect] = useAtom(connectAtom);
  const token = localStorage.getItem('accessToken');
  const wsHost = useWebSocketHost();
  const socketUrl = `${wsHost}/push/admin/${token}`;

  const webSocket = useWebSocket(
    socketUrl,
    {
      share: true,
      retryOnError: true,
      reconnectInterval: 2000,
      reconnectAttempts: 5,
      onOpen: (e) => {
        const socket = e.target as WebSocket;
        if (socket) {
          socket.binaryType = 'arraybuffer';
        }
      },
      shouldReconnect: (closeEvent) => true,
      onReconnectStop: (numAttempts: number) => {
        setConnect(false);
      },
    },
    connect
  );

  return { connect, setConnect, ...webSocket };
};
