import { RootState } from 'typeDux';

export const getSocket = (state: RootState) => {
  return state.socket.socket;
};
