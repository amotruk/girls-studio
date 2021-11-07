import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { HeadComponent } from './components/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MastheadComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    ServicesComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
