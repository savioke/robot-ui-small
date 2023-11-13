/* eslint-disable no-unused-vars */
import type { Server as HTTPServer } from 'http';
import type { NextApiResponse } from 'next';
import type { Socket as NetSocket } from 'net';
import type { Server as IOServer } from 'socket.io';
import { NavigationGoal, NavigationGoals } from 'relay-types';
import {
  DeliverStatus,
  DisplayState,
  Task,
  LoginMethod,
  AuthUser,
  SiteConfig,
  TaskFormValues,
  TaskConfigDeliver,
  TaskFormValuesWithoutConfig,
  TaskConfigGoTo,
  GoToLocationStatus,
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
    goals,
  }: {
    method: LoginMethod;
    user: AuthUser;
    config: SiteConfig;
    goals: string[];
  }) => void;
  login_fail: ({ method, user }: { method: LoginMethod; user: AuthUser }) => void;

  // Tasks
  queue_tasks_error: (string) => void;
  queue_tasks_success: () => void;
  deliver_status: ({ status, task }: { status: DeliverStatus; task: Task }) => void;
  go_to_location_status: ({ status, task }: { status: GoToLocationStatus; task: Task }) => void;

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
  queue_tasks: (
    tasks:
      | TaskFormValues<TaskConfigDeliver>[]
      | TaskFormValues<TaskConfigDeliver>
      | TaskFormValues<TaskConfigGoTo>
      | TaskFormValuesWithoutConfig,
  ) => void;
  load_package_result: ({ result }: { result: boolean }) => void;
  take_package_result: ({ result }: { result: boolean }) => void;

  // Actions
  open_lid: () => void;
  close_lid: () => void;
  start_mapping: () => void;

  // TODO: Mocking R2C2 Socket Server
  display_message: (message: string) => void;
}
