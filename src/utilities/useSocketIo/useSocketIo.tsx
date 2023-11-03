/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { setDisplayMessage, setIsConfirmationNeeded, setDisplayScreen } from 'state/ui/ui.slice';
import { setDeliverLocations } from 'state/deliver/deliver.slice';
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
        socket = io('http://localhost:3000');
        setReturnSocket(socket);

        socket.on('connect', () => {
          console.info('Socket.IO client has connected successfully.');
          socket.emit('pong');
        });

        socket.on('ping', () => {
          console.info('Ping: Connected to server');
          socket.emit('pong');
        });

        // TODO: Disable after testing
        socket.onAny((eventName, ...args) => {
          console.info(eventName, args);
        });

        if (dispatch && intl) {
          socket.on('display_message', ({ message }) => {
            dispatch(setIsConfirmationNeeded(false));
            if (DisplayMessageOptions(intl)[message]) {
              return dispatch(setDisplayMessage(DisplayMessageOptions(intl)[message]));
            }

            return dispatch(setDisplayMessage(message));
          });

          socket.on('navigation_goals', ({ goals }) => {
            dispatch(setDeliverLocations(goals));
          });

          socket.on('display_confirm', ({ confirm_text }) => {
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
