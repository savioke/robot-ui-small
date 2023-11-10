/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  setDisplayMessage,
  setDisplayScreen,
  setAuthorized,
  setTransitMessage,
  setConfirmationMessage,
  setNotificationMessage,
  setPasscode,
} from 'state/ui/ui.slice';
import {
  setTaskConfig,
  setDisplayState,
  setDeliverStatus,
  setUser,
  setFavorites,
} from 'state/r2c2/r2c2.slice';
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
        // console.log('FIX');
        socket = io('http://localhost:3000');
        setReturnSocket(socket);

        setInterval(() => {
          socket.emit('pong');
        }, 5000);

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
          socket.on('navigation_goals', ({ goals }) => {
            dispatch(setDeliverLocations(goals));
          });

          socket?.on('login_pass', ({ user, config }) => {
            dispatch(setUser(user));
            dispatch(setPasscode(''));
            if (config.length) {
              dispatch(setFavorites(config[0]?.favorites));
              if (config[0]?.screen === '/favorites') {
                dispatch(setDisplayScreen(DisplayScreenOptions.Favorites));
              } else {
                dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard));
              }
            }
            // TODO: Will we always return all login groups - or can we just return the one that first qualifies.. For now zero-indexing.

            dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard));
          });

          socket?.on('login_fail', ({ method }) => {
            if (method === 'badge') {
              console.info('Unauthorized pin');
              dispatch(setDisplayMessage('Unauthorized badge'));
            }
            console.info('Unauthorized badge');
            return dispatch(setAuthorized(false));
          });

          socket?.on('queue_tasks_success', () => {
            console.info('Task created successfully');
            return dispatch(setDisplayScreen(DisplayScreenOptions.Home));
          });

          socket?.on('display_state', (state) => {
            dispatch(setDisplayMessage(`Hello, I'm ${state.nickname}`));
            return dispatch(setDisplayState(state));
          });

          socket?.on('task_state', ({ task, state }) => {
            // TODO: Finalize task state - This may not be needed
            // dispatch(setTransitMessage(''));
            return dispatch(setDisplayState(state));
          });

          socket?.on('deliver_status', ({ status, task }) => {
            // Reset state on every deliver_status tick
            dispatch(setTransitMessage(''));
            dispatch(setNotificationMessage(''));
            dispatch(setConfirmationMessage(''));
            dispatch(setTaskConfig(task.config));

            if (status === 'GO_TO_PICKUP') {
              dispatch(setDeliverStatus('GO_TO_PICKUP'));
              return dispatch(setTransitMessage(`Heading to ${task.config.pickup_location}`));
            } else if (status === 'NOTIFY_PICKUP') {
              dispatch(setDeliverStatus('NOTIFY_PICKUP'));
              // TODO: Adjust notify message to logic from R2C2
              return dispatch(setNotificationMessage(`Notify pickup placeholder text`));
            } else if (status === 'LOAD_PACKAGE') {
              dispatch(setDeliverStatus('LOAD_PACKAGE'));
              return dispatch(
                setConfirmationMessage(DisplayMessageOptions(intl)['Please load your package']),
              );
            } else if (status === 'GO_TO_DROPOFF') {
              dispatch(setDeliverStatus('GO_TO_DROPOFF'));
              return dispatch(setTransitMessage(`Delivering to ${task.config.dropoff_location}`));
            } else if (status === 'NOTIFY_DROPOFF') {
              dispatch(setDeliverStatus('NOTIFY_DROPOFF'));
              // TODO: Adjust notify message to logic from R2C2
              return dispatch(setNotificationMessage(`Notify dropoff placeholder text`));
            } else if (status === 'TAKE_PACKAGE') {
              dispatch(setDeliverStatus('TAKE_PACKAGE'));
              return dispatch(
                setConfirmationMessage(DisplayMessageOptions(intl)['Please take your package']),
              );
            }

            dispatch(setDeliverStatus('DONE'));
            return dispatch(
              setTransitMessage(DisplayMessageOptions(intl)['Thank you, have a nice day!']),
            );
          });
        }
      };

      initializeSocketConnection();
    }
  }, [dispatch]);

  return returnSocket;
}
