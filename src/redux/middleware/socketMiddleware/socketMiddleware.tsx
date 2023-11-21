import { Middleware } from 'redux';
import { io, Socket } from 'socket.io-client';
import { startConnecting, connectionEstablished, setSocket } from 'state/socket/socket.slice';
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
import { DisplayScreenOptions, DeliverStatus, IdleStatus } from 'appConstants';

const socketMiddleware: Middleware = (store) => {
  let socket: Socket;

  return (next) => (action) => {
    // if (!startConnecting.match(action)) {
    //   return next(action);
    // }

    if (startConnecting.match(action) && !store.getState().socket.isEstablishingConnection) {
      socket = io('http://localhost:3000');

      setInterval(() => {
        socket.emit('pong');
      }, 5000);

      socket.on('connect', () => {
        console.info('Socket.IO client has connected successfully.');
        store.dispatch(connectionEstablished());
        store.dispatch(setSocket(socket));
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
          store.dispatch(setUser(user));
          store.dispatch(setPasscode(''));
          store.dispatch(setGoals(goals));
          store.dispatch(setMaps(maps));
          store.dispatch(setAuthorized(true));

          if (config?.dashboard?.length) {
            store.dispatch(setDashboardOptions(config.dashboard));
          } else {
            store.dispatch(setDashboardOptions(['delivery', 'utilities']));
          }

          if (config?.delivery?.length) {
            store.dispatch(setDeliveryOptions(config.delivery));
          } else {
            store.dispatch(setDeliveryOptions(['search']));
          }

          if (config?.favorites?.length) {
            store.dispatch(setFavorites(config.favorites));
          }

          if (config?.utilities?.length) {
            store.dispatch(setUtilities(config.utilities));
          } else {
            store.dispatch(setUtilities(['open lid', 'close lid', 'go to', 'dock']));
          }

          if (config?.screen === '/favorites') {
            store.dispatch(setDisplayScreen(DisplayScreenOptions.Favorites));
          } else {
            store.dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard));
          }
        },
      );

      socket?.on('login_fail', ({ method }) => {
        if (method === 'badge') {
          console.info('Unauthorized badge');
          store.dispatch(setDisplayMessage('Unauthorized badge'));
        }
        console.info('Unauthorized pin');
        return store.dispatch(setAuthorized(false));
      });

      socket?.on('authorize_fail', ({ method }) => {
        if (method === 'badge') {
          console.info('Unauthorized badge');
          store.dispatch(setDisplayMessage('Unauthorized badge'));
        }
        console.info('Unauthorized pin');
        return store.dispatch(setAuthorized(false));
      });

      socket?.on('authorize_pass', () => {
        console.info('Authorization passed');
        store.dispatch(setNotificationMessage('Authorizing...'));
        store.dispatch(setAuthorized(true));
        return store.dispatch(setDisplayScreen(DisplayScreenOptions.Home));
      });

      socket?.on('queue_tasks_success', () => {
        console.info('Task created successfully');
        return store.dispatch(setDisplayScreen(DisplayScreenOptions.Home));
      });

      socket?.on('play_sound', ({ name }) => {
        if (name === 'shimmy') {
          store.dispatch(setPlayShimmySound(true));
        }
        console.info('Playing shimmy sound');
      });

      socket?.on('display_state', (state) => {
        if (state.refresh) {
          window.location.reload();
        }

        store.dispatch(setDisplayMessage(`Hello, I'm ${state.nickname}`));
        return store.dispatch(setDisplayState(state));
      });

      socket?.on('deliver_status', ({ status, task, auth }) => {
        store.dispatch(setTransitMessage(''));
        store.dispatch(setNotificationMessage(''));
        store.dispatch(setConfirmationMessage(''));
        store.dispatch(setTaskConfig(task.config));

        if (status === 'GO_TO_PICKUP') {
          store.dispatch(setDeliverStatus(DeliverStatus['GO_TO_PICKUP']));
          return store.dispatch(setTransitMessage(`Heading to ${task.config.pickup_location}`));
        } else if (status === 'NOTIFY_PICKUP') {
          store.dispatch(setDeliverStatus(DeliverStatus['NOTIFY_PICKUP']));
          // TODO: Adjust notify message to logic from R2C2
          return store.dispatch(setNotificationMessage(`Notify pickup placeholder text`));
        } else if (status === 'AUTHORIZE_PICKUP') {
          store.dispatch(setDeliverStatus(DeliverStatus['AUTHORIZE_PICKUP']));
          if (auth.method.includes('badge' && 'pin')) {
            store.dispatch(setNotificationMessage('Please swipe badge or enter passcode'));
            return store.dispatch(setDisplayScreen(DisplayScreenOptions.PassCode));
          } else if (auth.method.includes('badge')) {
            return store.dispatch(setNotificationMessage('Please swipe your badge'));
          }

          store.dispatch(setNotificationMessage('Please enter your passcode'));
          return store.dispatch(setDisplayScreen(DisplayScreenOptions.PassCode));
        } else if (status === 'LOAD_PACKAGE') {
          store.dispatch(setDeliverStatus(DeliverStatus['LOAD_PACKAGE']));
          return store.dispatch(
            setConfirmationMessage(task.config.pickup_message || 'Please grab your package'),
          );
        } else if (status === 'GO_TO_DROPOFF') {
          store.dispatch(setDeliverStatus(DeliverStatus['GO_TO_DROPOFF']));
          return store.dispatch(setTransitMessage(`Delivering to ${task.config.dropoff_location}`));
        } else if (status === 'NOTIFY_DROPOFF') {
          store.dispatch(setDeliverStatus(DeliverStatus['NOTIFY_DROPOFF']));
          // TODO: Adjust notify message to logic from R2C2
          return store.dispatch(setNotificationMessage(`Notify dropoff placeholder text`));
        } else if (status === 'AUTHORIZE_DROPOFF') {
          store.dispatch(setDeliverStatus(DeliverStatus['AUTHORIZE_PICKUP']));
          if (auth.method.includes('badge' && 'pin')) {
            store.dispatch(setNotificationMessage('Please swipe badge or enter your passcode'));
            return store.dispatch(setDisplayScreen(DisplayScreenOptions.PassCode));
          } else if (auth.method.includes('badge')) {
            return store.dispatch(setNotificationMessage('Please swipe your badge'));
          }

          store.dispatch(setNotificationMessage('Please enter your PIN'));
          return store.dispatch(setDisplayScreen(DisplayScreenOptions.PassCode));
        } else if (status === 'TAKE_PACKAGE') {
          store.dispatch(setDeliverStatus(DeliverStatus['TAKE_PACKAGE']));
          return store.dispatch(setConfirmationMessage(task.config.dropoff_message));
        }

        store.dispatch(setDeliverStatus(DeliverStatus['DONE']));
        return store.dispatch(setTransitMessage('Thank you, have a nice day!'));
      });

      socket?.on('go_to_location_status', ({ status }) => {
        if (status === 'ARRIVED') {
          store.dispatch(setTransitMessage(''));
          store.dispatch(setDisplayMessage('What can I help with?'));
        }
      });

      socket?.on('idle_status', ({ status }) => {
        store.dispatch(setTransitMessage(''));
        store.dispatch(setNotificationMessage(''));
        store.dispatch(setConfirmationMessage(''));
        store.dispatch(setDeliverStatus(DeliverStatus['DONE']));

        if (status === 'GO_TO_DOCK') {
          store.dispatch(setTransitMessage('Headed to dock'));
          store.dispatch(setIdleStatus(IdleStatus.GO_TO_DOCK));
        } else if (status === 'DOCKED') {
          store.dispatch(setDeliverStatus(DeliverStatus.NONE));
          store.dispatch(setIdleStatus(IdleStatus.DOCKED));
        } else if (status === 'IDLE') {
          store.dispatch(setTransitMessage(''));
          store.dispatch(setConfirmationMessage(''));
          store.dispatch(resetTaskConfig());
          store.dispatch(setDeliverStatus(DeliverStatus.NONE));
          store.dispatch(setIdleStatus(IdleStatus.IDLE));
        }
      });
    }

    next(action);
  };
};

export default socketMiddleware;
