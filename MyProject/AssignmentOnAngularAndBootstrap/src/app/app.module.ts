import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FilterPipeModule} from 'ngx-filter-pipe';
import { AppComponent } from './app.component';
import { BodyAndSidebarComponent } from './body-and-sidebar/body-and-sidebar.component';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from './filetrPipe.pipe';
import { LocalStorage } from '@ngx-pwa/local-storage';

@NgModule({
  declarations: [
    AppComponent,
    BodyAndSidebarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FilterPipeModule,
    LocalStorage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
