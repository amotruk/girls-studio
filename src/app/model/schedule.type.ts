export interface ScheduleDay {
  name: string;
  entries: ScheduleEntry[];
}

export interface ScheduleEntry {
  time: string;
  name: string;
}
