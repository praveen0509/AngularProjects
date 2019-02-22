import { Component } from '@angular/core';
import {MainPageComponent} from './main-page/main-page.component';
import {FirstPageComponent} from './first-page/first-page.component';
import {SecondPageComponent} from './second-page/second-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

export  const RouterComponent = [MainPageComponent, FirstPageComponent, SecondPageComponent];
