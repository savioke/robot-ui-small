export type TaskType =
  | 'RUN_SCRIPT'
  | 'DELIVER'
  | 'MINGLE'
  | 'SUMMON'
  | 'GO_TO'
  | 'SEND_TO'
  | 'SEND_TO_DOCK'
  | 'REGISTER_RFID'
  | '';

export type DeliverStatus =
  | 'NONE'
  | 'GO_TO_PICKUP'
  | 'NOTIFY_PICKUP'
  | 'LOAD_PACKAGE'
  | 'GO_TO_DROPOFF'
  | 'NOTIFY_DROPOFF'
  | 'TAKE_PACKAGE'
  | 'SUCCESS'
  | 'FAILURE'
  | 'DONE';

export interface NavigationGoals {
  goals: NavigationGoal[];
}

export interface NavigationGoal {
  id: string;
  name: string;
  floor_name: string;
  tags: string[];
}

export interface DeliverValues {
  type: 'DELIVER';
  version: '2.0';
  config: {
    dropoff_location: string;
    dropoff_message: string;
  };
}

export interface DisplayState {
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
  config: {
    pickup_location: string;
    pickup_message: string;
    dropoff_location: string;
    dropoff_message: string;
  };
}
