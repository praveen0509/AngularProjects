import { Component, OnInit } from '@angular/core';
import {EmployeeDataService} from '../employee-data.service';

@Component({
  selector: 'app-child',
  template: `
    <button (click)="onsubmit()">Increment</button>

  `,
  styles: []
})
export class ChildComponent implements OnInit {

  constructor(private employeeDataService: EmployeeDataService) { }

  user = 1;
  ngOnInit(): void {  }

  onsubmit() {
    this.user ++;
    this.employeeDataService.editUser(this.user);
  }

}
