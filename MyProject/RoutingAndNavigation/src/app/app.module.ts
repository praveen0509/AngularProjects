import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {AppComponent, RouterComponent} from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RouterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'mainPage', component: MainPageComponent},
      {path: ' ', component: MainPageComponent},
      {path: 'firstPage', component: FirstPageComponent},
      {path: 'secondPage', component: SecondPageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


