import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route1Module} from "./route1/route1/route1.module";
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from "@angular/material/table";
import { HttpClientModule } from "@angular/common/http"
const routes: Routes =[

  {
    path: '',
    redirectTo: 'route2',
    pathMatch: 'full',
  }
]

@NgModule({
  declarations: [
    AppComponent,
    Route1Component,
    Route2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    Route1Module,

    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
