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
  setActiveSocket,
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

export default function useSocketIo({
  dispatch,
  intl,
  setPrimaryColor,
}: {
  dispatch: any;
  intl: IntlShape;
  setPrimaryColor?: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [socket, setSocket] = React.useState<Socket<
    ServerToClientEvents,
    ClientToServerEvents
  > | null>();

  React.useEffect(() => {
    if (!socket) {
      setSocket(io('http://localhost:3000'));
    }

    return () => {
      socket?.disconnect();
    };
  }, [socket]);

  React.useEffect(() => {
    if (!socket) {
      return;
    }
    setInterval(() => {
      socket.emit('pong');
    }, 5000);

    socket.on('connect', () => {
      console.info('Socket.IO client has connected successfully.');
      dispatch(setActiveSocket(true));
      socket.emit('pong');
    });

    // TODO: Disable after testing
    socket.onAny((eventName, ...args) => {
      console.info(eventName, args);
    });

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

    socket?.on('authorize_fail', ({ method }) => {
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

    socket?.on('play_sound', ({ name }) => {
      if (name === 'shimmy') {
        dispatch(setPlayShimmySound(true));
      }
      console.info('Playing shimmy sound');
    });

    socket?.on('display_state', (state) => {
      if (state.refresh) {
        window.location.reload();
      }

      if (state?.config?.primary_color && setPrimaryColor) {
        setPrimaryColor(state.config.primary_color);
      }

      dispatch(setDisplayMessage(`Hello, I'm ${state.nickname}`));
      return dispatch(setDisplayState(state));
    });

    socket?.on('deliver_status', ({ status, task, auth }) => {
      dispatch(setTransitMessage(''));
      dispatch(setNotificationMessage(''));
      dispatch(setConfirmationMessage(''));
      dispatch(setTaskConfig(task.config));

      if (status === 'GO_TO_PICKUP') {
        dispatch(setDeliverStatus(DeliverStatus['GO_TO_PICKUP']));
        return dispatch(setTransitMessage(`Heading to ${task.config.pickup_location}`));
      } else if (status === 'NOTIFY_PICKUP') {
        dispatch(setDeliverStatus(DeliverStatus['NOTIFY_PICKUP']));
        // TODO: Adjust notify message to logic from R2C2
        return dispatch(setNotificationMessage(`Notify pickup placeholder text`));
      } else if (status === 'AUTHORIZE_PICKUP') {
        if (auth.method.includes('badge' && 'pin')) {
          dispatch(setNotificationMessage('Please swipe badge or enter passcode'));
          return dispatch(setDisplayScreen(DisplayScreenOptions.PassCode));
        } else if (auth.method.includes('badge')) {
          return dispatch(setNotificationMessage('Please swipe your badge'));
        }

        dispatch(setNotificationMessage('Please enter your PIN'));
        return dispatch(setDisplayScreen(DisplayScreenOptions.PassCode));
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
      } else if (status === 'AUTHORIZE_DROPOFF') {
        if (auth.method.includes('badge' && 'pin')) {
          dispatch(setNotificationMessage('Please swipe badge or enter your passcode'));
          return dispatch(setDisplayScreen(DisplayScreenOptions.PassCode));
        } else if (auth.method.includes('badge')) {
          return dispatch(setNotificationMessage('Please swipe your badge'));
        }

        dispatch(setNotificationMessage('Please enter your PIN'));
        return dispatch(setDisplayScreen(DisplayScreenOptions.PassCode));
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
      dispatch(setTransitMessage(''));
      dispatch(setNotificationMessage(''));
      dispatch(setConfirmationMessage(''));
      dispatch(setDeliverStatus(DeliverStatus['DONE']));

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

    return () => {
      socket.off('connect');
      socket.off('login_pass');
      socket.off('login_fail');
      socket.off('queue_tasks_success');
      socket.off('play_sound');
      socket.off('display_state');
      socket.off('deliver_status');
      socket.off('go_to_location_status');
      socket.off('idle_status');
    };
  }, [socket]);

  return socket;
}
