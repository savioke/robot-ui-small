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
  TaskConfigMapping,
  IdleStatus,
  DeliverInteruptResult,
  Auth,
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
    maps,
  }: {
    method: LoginMethod;
    user: AuthUser;
    config: SiteConfig;
    goals: string[];
    maps: string[];
  }) => void;
  login_fail: ({ method, user }: { method: LoginMethod; user: AuthUser }) => void;
  authorize_pass: () => void;
  authorize_fail: ({ method }: { method: LoginMethod }) => void;

  // Tasks
  queue_tasks_error: (string) => void;
  queue_tasks_success: () => void;
  deliver_status: ({
    status,
    task,
    auth,
  }: {
    status: DeliverStatus;
    task: Task;
    auth: Auth;
  }) => void;
  go_to_location_status: ({ status, task }: { status: GoToLocationStatus; task: Task }) => void;
  play_sound: ({ name }: { name: 'shimmy' | 'nav-start' }) => void;

  // Idle
  idle_status: ({ status }: { status: IdleStatus }) => void;

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
  authorize: (string) => void;

  // Tasks
  queue_tasks: (
    tasks:
      | TaskFormValues<TaskConfigDeliver>[]
      | TaskFormValues<TaskConfigDeliver>
      | TaskFormValues<TaskConfigGoTo>
      | TaskFormValues<TaskConfigMapping>
      | TaskFormValuesWithoutConfig,
  ) => void;
  load_package_result: ({ result }: { result: boolean }) => void;
  take_package_result: ({ result }: { result: boolean }) => void;
  mapping_done: () => void;

  deliver_interrupt: () => void;
  deliver_interrupt_result: ({ result }: { result: DeliverInteruptResult }) => void;
  screen_touched: () => void;

  // Actions
  open_lid: () => void;
  close_lid: () => void;

  // TODO: Mocking R2C2 Socket Server
  display_message: (message: string) => void;
}
