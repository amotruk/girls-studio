import {Component, OnInit} from '@angular/core';
import {GoogleAnalyticsService} from "../../services/google-analytics.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.googleAnalyticsService.emitEvent("sign_up");
  }
}
