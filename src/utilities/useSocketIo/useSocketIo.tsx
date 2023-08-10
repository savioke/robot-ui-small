/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  setDisplayMessage,
  setNavigationLocations,
  setIsConfirmationNeeded,
  setDisplayScreen,
} from 'state/ui/ui.slice';
import { io, type Socket } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from 'types/socket';
import { DisplayMessageOptions, DisplayScreenOptions } from 'appConstants';
import { IntlShape } from 'react-intl';

export default function useSocketIo(dispatch?: any, intl?: IntlShape) {
  const [returnSocket, setReturnSocket] =
    React.useState<Socket<ServerToClientEvents, ClientToServerEvents>>();
  let socket: Socket<ServerToClientEvents, ClientToServerEvents>;

  React.useEffect(() => {
    if (!socket) {
      const initializeSocketConnection = () => {
        // TODO: Swap back to 3000 for R2C2
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

        if (dispatch && intl) {
          socket.on('display_message', (message) => {
            dispatch(setDisplayScreen(DisplayScreenOptions.Home));
            if (DisplayMessageOptions(intl)[message]) {
              return dispatch(setDisplayMessage(DisplayMessageOptions(intl)[message]));
            }

            return dispatch(setDisplayMessage(message));
          });

          socket.on('navigation_goals', ({ goals }) => {
            dispatch(setNavigationLocations(goals));
          });

          socket.on('display_confirm', ({ confirm_text }) => {
            dispatch(setDisplayScreen(DisplayScreenOptions.Home));
            if (DisplayMessageOptions(intl)[confirm_text]) {
              dispatch(setDisplayMessage(DisplayMessageOptions(intl)[confirm_text]));
              return dispatch(setIsConfirmationNeeded(true));
            }

            dispatch(setDisplayMessage(confirm_text));
            return dispatch(setIsConfirmationNeeded(true));
          });
        }
      };

      initializeSocketConnection();
    }
  }, [dispatch]);

  return returnSocket;
}
