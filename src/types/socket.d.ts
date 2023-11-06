/* eslint-disable no-unused-vars */
import type { Server as HTTPServer } from 'http';
import type { NextApiResponse } from 'next';
import type { Socket as NetSocket } from 'net';
import type { Server as IOServer } from 'socket.io';
import { NavigationGoal, NavigationGoals } from 'relay-types';
import { DeliverValues } from './r2c2';

interface SocketServer extends HTTPServer {
  io?: IOServer | undefined;
}

interface SocketWithIO extends NetSocket {
  server: SocketServer;
}

export interface NextApiResponseWithSocket extends NextApiResponse {
  socket: SocketWithIO;
}

// Event Listeners
export interface ServerToClientEvents {
  ping: () => void;
  connect: () => void;
  display_message: ({ message }: { message: string }) => void;
  disconnect: () => void;
  userServerConnection: () => void;
  userServerDisconnection: (socketId: string) => void;
  navigation_goals: ({ goals }: NavigationGoals) => void;
  display_confirm: ({
    confirm_text,
    confirm_button_text,
  }: {
    confirm_text: string;
    confirm_button_text: string;
  }) => void;
  login_pass: () => void;
  login_fail: () => void;
  // TODO: Finalize interface for sending Mingle/Deliver formValues
}

// Event Emitters
export interface ClientToServerEvents {
  pong: () => void;
  connect: () => void;
  on_disconnect: () => void;
  userServerConnection: () => void;
  userServerDisconnection: (socketId: string) => void;
  ui_request: (formValues: any) => void;
  ui_event: ({ name, context }: { name: string; context: {} }) => void;
  choice_made: ({ string }: { name: string }) => void;
  login_pin: (string) => void;
  logout: () => void;
  queue_tasks: (tasks: DeliverValues[]) => void;

  // TODO: Mocking R2C2 Socket Server
  display_message: (message: string) => void;
}
