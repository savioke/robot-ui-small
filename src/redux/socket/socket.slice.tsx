import { Socket } from 'socket.io-client';
import { createSlice } from 'typeDux';
import { ClientToServerEvents, ServerToClientEvents } from 'types/socket';

interface SocketState {
  isEstablishingConnection: boolean;
  isConnected: boolean;
  socket: Socket<ServerToClientEvents, ClientToServerEvents> | null;
}

export const initialState: SocketState = {
  isEstablishingConnection: false,
  isConnected: false,
  socket: null,
};

const socketSlice = createSlice({
  name: 'socketSlice',
  initialState,
  reducers: {
    startConnecting: (state) => {
      state.isEstablishingConnection = true;
    },
    connectionEstablished: (state) => {
      state.isConnected = true;
      state.isEstablishingConnection = true;
    },
    setSocket: (state, { payload }) => {
      state.socket = payload;
    },
  },
});

export const { startConnecting, connectionEstablished, setSocket } = socketSlice.actions;

export default socketSlice.reducer;
