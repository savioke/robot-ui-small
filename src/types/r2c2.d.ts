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
  version: 2.0;
  config: {
    dropoff_location: string;
    dropoff_message: string;
  };
}
