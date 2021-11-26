import {Component, OnInit} from '@angular/core';
import {GoogleAnalyticsService} from "../../services/google-analytics.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private googleAnalyticsService: GoogleAnalyticsService) {
  }

  ngOnInit(): void {
  }

  onClick(event: any): void {
    this.googleAnalyticsService.emitEvent("navigation", {url: event.target.href});
  }
}
