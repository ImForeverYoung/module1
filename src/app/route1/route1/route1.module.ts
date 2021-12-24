import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route1Component} from "../route1.component";
import {Route2Component} from "../../route2/route2.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes=[
  {
    path: 'route1',
    component: Route1Component,

  },
  {
    path: 'route2',
    component: Route2Component,

  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class Route1Module { }
