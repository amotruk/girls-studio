import {Component, OnInit} from '@angular/core';
import {GoogleDriveProvider} from "../../services/google-drive-provider.service";
import {ScheduleDay} from "../../model/schedule.type";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedule: ScheduleDay[] = [];
  timeTitle: string = "";
  private days: string[] = [];

  constructor(private googleDriveProvider: GoogleDriveProvider) {
  }

  ngOnInit(): void {
    this.googleDriveProvider.getSheetData().subscribe(data => {
      this.schedule = data;
      this.days.push(this.schedule[0].name)
      this.schedule.forEach(day => this.days.push(day.name))
      this.timeTitle = this.googleDriveProvider.getTimeTitle();
    })
  }

  isToday(day: string): boolean {
    return this.days[new Date().getDay()] === day;
  }

  getHeader(): string[] {
    const result: string[] = [];
    this.schedule.forEach(day => result.push(day.name))
    return result;
  }

  getTime(): string[] {
    const result: string[] = [];
    if (this.schedule[0]) {
      this.schedule[0].entries.forEach(entry => result.push(entry.time))
    }
    return result;
  }

  getTrainings(time: string): string[] {
    const result: string[] = [];
    this.schedule.forEach(day => {
      day.entries.forEach(entry => {
        if (entry.time === time) {
          result.push(entry.name)
        }
      })
    })
    return result;
  }

  getTrainingsForDay(dayName: string): string[] {
    const result: string[] = [];
    this.schedule.forEach(day => {
      if (day.name === dayName) {
        day.entries.forEach(entry => {
          if (entry.name) {
            result.push(`${entry.time} ${entry.name}`)
          }
        })
      }
    })
    return result;
  }
}
