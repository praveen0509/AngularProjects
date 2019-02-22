import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RecordsService } from './records.service';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
