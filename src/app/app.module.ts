import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PastComponent } from './past/past.component';
import { routing } from './app.routing';
import { TechnicalComponent } from './technical/technical.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PastComponent,
    TechnicalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
