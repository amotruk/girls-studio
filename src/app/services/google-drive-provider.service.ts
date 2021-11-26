import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from "rxjs";
import {ScheduleDay} from "../model/schedule.type";

@Injectable({
  providedIn: 'root'
})
export class GoogleDriveProvider {
  private timeTitle: string = 'ВРЕМЯ';

  constructor(public http: HttpClient) {
  }

  public getSheetData(): Observable<ScheduleDay[]> {
    const url = `https://opensheet.vercel.app/1xRxAMGfozTBcUp2_33_O8V_HqaAovrhRoUDCk_EoU54/schedule`;
    return this.http.get(url).pipe(map(response => this.transform(response)));
  }

  public getTimeTitle(): string {
    return this.timeTitle;
  }

  private transform(response: Object): ScheduleDay[] {
    const result: ScheduleDay[] = [];
    const array: any[] = <[]>response;
    this.timeTitle = Object.keys(array[1])[0]

    Object.keys(array[1]).slice(1)
      .forEach(key => result.push({name: key, entries: []}));

    array.forEach((entry:any) => {
      const time: string = entry[this.timeTitle];
      if (time) {
        result.forEach(day => day.entries.push(({time: time, name: entry[day.name]})))
      }
    })

    return result;
  }
}
