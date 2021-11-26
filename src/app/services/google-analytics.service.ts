import {Injectable} from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() {
  }

  public emitEvent(eventName: string, eventParams: any = null) {
    if (eventParams) {
      gtag('event', eventName, eventParams)
    } else {
      gtag('event', eventName)
    }
  }
}
