export type TaskType =
  | 'RUN_SCRIPT'
  | 'DELIVER'
  | 'MINGLE'
  | 'SUMMON'
  | 'GO_TO'
  | 'SEND_TO'
  | 'SEND_TO_DOCK'
  | 'REGISTER_RFID'
  | 'RUN_MAPPING'
  | '';

export type DeliverStatus =
  | 'NONE'
  | 'GO_TO_PICKUP'
  | 'NOTIFY_PICKUP'
  | 'AUTHORIZE_PICKUP'
  | 'LOAD_PACKAGE'
  | 'GO_TO_DROPOFF'
  | 'NOTIFY_DROPOFF'
  | 'AUTHORIZE_DROPOFF'
  | 'TAKE_PACKAGE'
  | 'SUCCESS'
  | 'FAILURE'
  | 'DONE';

export type GoToLocationStatus = 'NONE' | 'GO_TO' | 'ARRIVED';

export type IdleStatus = 'NONE' | 'GO_TO_DOCK' | 'DOCKED';

export type UtilityActions = 'open lid' | 'close lid' | 'go to' | 'dock' | 'map' | 'all';

export type DeliverInteruptResult = 'cancel_task' | 'take_package' | 'resume';

export interface TaskConfig {
  pickup_location: string;
  pickup_message: string;
  dropoff_location: string;
  dropoff_message: string;
}

export interface NavigationGoals {
  goals: NavigationGoal[];
}

export interface NavigationGoal {
  id: string;
  name: string;
  floor_name: string;
  tags: string[];
}

export interface TaskFormValues<T> {
  type: TaskType;
  version: '2.0';
  config: T;
}

export interface TaskConfigDeliver {
  dropoff_location: string;
  dropoff_message: string;
}

export interface TaskConfigGoTo {
  destination: string;
  transit_message: string;
}

export interface TaskConfigMapping {
  name: string;
  override_existing: boolean;
}

export interface TaskFormValuesWithoutConfig {
  type: TaskType;
  version: string;
}

export interface DisplayState {
  refresh: boolean;
  hostname: string;
  nickname: string;
  connected: boolean;
  battery: {
    voltage: number;
    percent: number;
    level: string;
    chargingDock: boolean;
    chargingPlug: boolean;
  };
}

export interface Task {
  id: string;
  siteId: string;
  robotId: string;
  initiator: string;
  type: TaskType;
  version: string;
  cancelledBy: string;
  state: string;
  status: DeliverStatus;
  queuedAt: number;
  updatedAt: number;
  startedAt: number;
  robotName: string;
  robotNickname: string;
  robotHostname: string;
  inorbitToken: string;
  config: TaskConfig;
}

export type LoginMethod = 'pin' | 'badge';

export interface AuthUser {
  id: string;
  org: string;
}

export interface Favorite {
  dropoff_location: string;
  dropoff_message: string;
}

export interface SiteConfig {
  auth: {
    org?: string[];
    user?: string[];
    method?: string[];
    group?: string[];
  };
  favorites: Favorite[];
  name: string;
  screen: '/favorites' | '/dashboard';
  utilities: UtilityActions[];
  dashboard: string[];
  delivery: string[];
}
