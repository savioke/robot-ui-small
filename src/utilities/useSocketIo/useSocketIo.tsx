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
  setPlayShimmySound,
} from 'state/ui/ui.slice';
import {
  setTaskConfig,
  setDisplayState,
  setDeliverStatus,
  setUser,
  setFavorites,
  setUtilities,
  setGoals,
  setMaps,
  setDashboardOptions,
  setDeliveryOptions,
  setIdleStatus,
  resetTaskConfig,
} from 'state/r2c2/r2c2.slice';
import { io, type Socket } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from 'types/socket';
import {
  DisplayMessageOptions,
  DisplayScreenOptions,
  DeliverStatus,
  IdleStatus,
} from 'appConstants';
import { IntlShape } from 'react-intl';

export default function useSocketIo(
  dispatch?: any,
  intl?: IntlShape,
  setPrimaryColor?: React.Dispatch<React.SetStateAction<string>>,
) {
  const [returnSocket, setReturnSocket] =
    React.useState<Socket<ServerToClientEvents, ClientToServerEvents>>();
  let socket: Socket<ServerToClientEvents, ClientToServerEvents>;

  React.useEffect(() => {
    if (!socket) {
      const initializeSocketConnection = () => {
        socket = io('http://localhost:3000');
        setReturnSocket(socket);

        // setInterval(() => {
        //   socket.emit('pong');
        // }, 5000);

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
          socket?.on(
            'login_pass',
            ({
              user,
              config = {
                dashboard: [],
                delivery: [],
                favorites: [],
                utilities: [],
                screen: '/dashboard',
              },
              goals = [],
              maps = [],
            }) => {
              dispatch(setUser(user));
              dispatch(setPasscode(''));
              dispatch(setGoals(goals));
              dispatch(setMaps(maps));
              dispatch(setPlayShimmySound(false));

              if (config.dashboard.length) {
                dispatch(setDashboardOptions(config.dashboard));
              } else {
                dispatch(setDashboardOptions(['delivery', 'utilities']));
              }

              if (config.delivery.length) {
                dispatch(setDeliveryOptions(config.delivery));
              } else {
                dispatch(setDeliveryOptions(['search']));
              }

              if (config.favorites.length) {
                dispatch(setFavorites(config.favorites));
              }

              if (config.utilities.length) {
                dispatch(setUtilities(config.utilities));
              } else {
                dispatch(setUtilities(['open lid', 'close lid', 'go to', 'dock']));
              }

              if (config.screen === '/favorites') {
                dispatch(setDisplayScreen(DisplayScreenOptions.Favorites));
              } else {
                dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard));
              }

              // TODO: Will we always return all login groups - or can we just return the one that first qualifies.. For now zero-indexing.
            },
          );

          socket?.on('login_fail', ({ method }) => {
            if (method === 'badge') {
              console.info('Unauthorized badge');
              dispatch(setDisplayMessage('Unauthorized badge'));
            }
            console.info('Unauthorized pin');
            return dispatch(setAuthorized(false));
          });

          socket?.on('queue_tasks_success', () => {
            console.info('Task created successfully');
            return dispatch(setDisplayScreen(DisplayScreenOptions.Home));
          });

          socket?.on('play_sound', (sound) => {
            if (sound === 'shimmy') {
              dispatch(setPlayShimmySound(true));
            }
            console.info('Playing shimmy sound');
          });

          socket?.on('display_state', (state) => {
            if (state.refresh) {
              window.location.reload();
            }

            if (state.config.primary_color && setPrimaryColor) {
              setPrimaryColor(state.config.primary_color);
            }

            dispatch(setDisplayMessage(`Hello, I'm ${state.nickname}`));
            return dispatch(setDisplayState(state));
          });

          socket?.on('deliver_status', ({ status, task }) => {
            // Reset state on every deliver_status tick
            dispatch(setTransitMessage(''));
            dispatch(setNotificationMessage(''));
            // dispatch(setConfirmationMessage(''));
            dispatch(setTaskConfig(task.config));

            if (status === 'GO_TO_PICKUP') {
              dispatch(setDeliverStatus(DeliverStatus['GO_TO_PICKUP']));
              return dispatch(setTransitMessage(`Heading to ${task.config.pickup_location}`));
            } else if (status === 'NOTIFY_PICKUP') {
              dispatch(setDeliverStatus(DeliverStatus['NOTIFY_PICKUP']));
              // TODO: Adjust notify message to logic from R2C2
              return dispatch(setNotificationMessage(`Notify pickup placeholder text`));
            } else if (status === 'LOAD_PACKAGE') {
              dispatch(setDeliverStatus(DeliverStatus['LOAD_PACKAGE']));
              return dispatch(
                setConfirmationMessage(task.config.pickup_message || 'Please grab your package'),
              );
            } else if (status === 'GO_TO_DROPOFF') {
              dispatch(setDeliverStatus(DeliverStatus['GO_TO_DROPOFF']));
              return dispatch(setTransitMessage(`Delivering to ${task.config.dropoff_location}`));
            } else if (status === 'NOTIFY_DROPOFF') {
              dispatch(setDeliverStatus(DeliverStatus['NOTIFY_DROPOFF']));
              // TODO: Adjust notify message to logic from R2C2
              return dispatch(setNotificationMessage(`Notify dropoff placeholder text`));
            } else if (status === 'TAKE_PACKAGE') {
              dispatch(setDeliverStatus(DeliverStatus['TAKE_PACKAGE']));
              return dispatch(setConfirmationMessage(task.config.dropoff_message));
            }

            dispatch(setDeliverStatus(DeliverStatus['DONE']));
            return dispatch(
              setTransitMessage(DisplayMessageOptions(intl)['Thank you, have a nice day!']),
            );
          });

          socket?.on('go_to_location_status', ({ status }) => {
            if (status === 'ARRIVED') {
              dispatch(setTransitMessage(''));
              dispatch(setDisplayMessage('What can I help with?'));
            }
          });

          socket?.on('idle_status', ({ status }) => {
            if (status === 'GO_TO_DOCK') {
              dispatch(setTransitMessage('Headed to dock'));
              dispatch(setIdleStatus(IdleStatus.GO_TO_DOCK));
            } else if (status === 'DOCKED') {
              dispatch(setDeliverStatus(DeliverStatus.NONE));
              dispatch(setIdleStatus(IdleStatus.DOCKED));
            } else if (status === 'IDLE') {
              dispatch(setTransitMessage(''));
              dispatch(setConfirmationMessage(''));
              dispatch(resetTaskConfig());
              dispatch(setDeliverStatus(DeliverStatus.NONE));
              dispatch(setIdleStatus(IdleStatus.IDLE));
            }
          });
        }
      };

      initializeSocketConnection();
    }
  }, [dispatch]);

  return returnSocket;
}
