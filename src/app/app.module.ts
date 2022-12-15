import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListcarsComponent } from './listcars/listcars.component';
import { DetailcarsComponent } from './detailcars/detailcars.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ListcarsComponent,
    DetailcarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
