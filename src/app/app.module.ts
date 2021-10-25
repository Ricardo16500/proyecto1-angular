import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pestania2Component } from './pestania2/pestania2.component';
import { Pestania1Component } from './pestania1/pestania1.component';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Pestania2Component,
    Pestania1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'framework', component: Pestania2Component},
      {path: 'home', component: Pestania1Component},
      {path: '', redirectTo: '/home', pathMatch: 'full'},

    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
