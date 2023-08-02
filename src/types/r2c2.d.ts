export interface NavigationGoals {
  goals: NavigationGoal[];
}

export interface NavigationGoal {
  id: string;
  name: string;
  containing_map: string;
  tags: string[];
}
