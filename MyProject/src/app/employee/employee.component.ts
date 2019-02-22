import { Component, OnInit } from '@angular/core';
import {RecordsService} from '../records.service';

@Component({
  selector: 'app-employee',
  template: `

    <body>
    <h1 align="center">Employee Data</h1>

    <table class="table table-hover"  align="center"  border="1px">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
      </tr>

      <tr *ngFor="let myRecord of records" class="">
        <td>{{myRecord.id}}</td>
        <td>{{myRecord.name}}</td>
        <td>{{myRecord.email}}</td>
      </tr>
    </table>

    </body>



  `,
  styles: []
})
export class EmployeeComponent implements OnInit {

  constructor(private recordService: RecordsService) {}
  records = [];
  ngOnInit() {
    this.recordService.getData().subscribe((values: any) => {
                                                            this.records = values;
                                                      });
  }
}
