import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


import { AppComponent } from './app.component';
import { TestRouteComponent } from './test-route/test-route.component';

const MAIN_ROUTES: Routes = [{
    path: "test", component: TestRouteComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    TestRouteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MAIN_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
