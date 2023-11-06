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
