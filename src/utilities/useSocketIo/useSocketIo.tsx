/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  setDisplayMessage,
  setNavigationLocations,
  setIsConfirmationNeeded,
} from 'state/ui/ui.slice';
import { io, type Socket } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from 'types/socket';

export default function useSocketIo(dispatch: any) {
  const [returnSocket, setReturnSocket] =
    React.useState<Socket<ServerToClientEvents, ClientToServerEvents>>();
  let socket: Socket<ServerToClientEvents, ClientToServerEvents>;

  React.useEffect(() => {
    if (!socket) {
      const initializeSocketConnection = () => {
        // TODO: Swap to localhost:3000 for R2C2 server
        socket = io('http://localhost:5000');
        setReturnSocket(socket);

        socket.on('connect', () => {
          console.info('Socket.IO client has connected successfully.');
          socket.emit('pong');
        });

        socket.onAny((eventName, ...args) => {
          console.info(eventName, args);
        });

        socket.on('ping', () => {
          console.info('Ping: Connected to server');
          // TODO: Is this needed?
          // socket.emit('pong');
        });

        socket.on('display_message', (message) => {
          dispatch(setDisplayMessage(message));
        });

        socket.on('navigation_goals', ({ goals }) => {
          dispatch(setNavigationLocations(goals));
        });

        socket.on('display_confirm', ({ confirm_text }) => {
          dispatch(setDisplayMessage(confirm_text));
          dispatch(setIsConfirmationNeeded(true));
        });
      };

      initializeSocketConnection();
    }
  }, [dispatch]);

  return returnSocket;
}
