/* eslint-disable no-unused-vars */
import type { Server as HTTPServer } from 'http';
import type { NextApiResponse } from 'next';
import type { Socket as NetSocket } from 'net';
import type { Server as IOServer } from 'socket.io';
import { NavigationGoal, NavigationGoals } from 'relay-types';
import {
  DeliverStatus,
  DeliverValues,
  DisplayState,
  Task,
  LoginMethod,
  AuthUser,
  SiteConfig,
} from './r2c2';

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
  disconnect: () => void;
  userServerConnection: () => void;
  userServerDisconnection: (socketId: string) => void;
  navigation_goals: ({ goals }: NavigationGoals) => void;

  // Authorization
  login_pass: ({
    method,
    user,
    config,
  }: {
    method: LoginMethod;
    user: AuthUser;
    config: SiteConfig;
  }) => void;
  login_fail: ({ method, user }: { method: LoginMethod; user: AuthUser }) => void;

  // Tasks
  queue_tasks_error: (string) => void;
  queue_tasks_success: () => void;
  deliver_status: ({ status, task }: { status: DeliverStatus; task: Task }) => void;
  // TODO: Audit and adjust task_state as needed
  task_state: ({ task, state }: { task: Task; state: DeliverStatus }) => void;

  // Display State
  display_state: (state: DisplayState) => void;
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

  // Authorization
  login_pin: (string) => void;
  logout: () => void;

  // Tasks
  queue_tasks: (tasks: DeliverValues[]) => void;
  load_package_result: ({ result }: { result: boolean }) => void;
  take_package_result: ({ result }: { result: boolean }) => void;

  // Actions
  open_lid: () => void;
  close_lid: () => void;

  // TODO: Mocking R2C2 Socket Server
  display_message: (message: string) => void;
}
