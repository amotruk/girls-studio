import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AboutComponent} from './components/about/about.component';
import {TeamComponent} from './components/team/team.component';
import {FooterComponent} from './components/footer/footer.component';
import {ServicesComponent} from './components/services/services.component';
import {MemberComponent} from './components/team/member/member.component';
import {SliderComponent} from './components/slider/slider.component';
import {PricesComponent} from './components/prices/prices.component';
import {ScheduleComponent} from './components/schedule/schedule.component';
import {HttpClientModule} from "@angular/common/http";
import {VideoModalComponent} from './components/video-modal/video-modal.component';
import {SafePipe} from './pipes/safe.pipe';
import {ModalModule} from "ngx-bootstrap/modal";
import { MapComponent } from './components/map/map.component';
import {GoogleMapsModule} from "@angular/google-maps";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    TeamComponent,
    FooterComponent,
    ServicesComponent,
    MemberComponent,
    SliderComponent,
    PricesComponent,
    ScheduleComponent,
    VideoModalComponent,
    SafePipe,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
