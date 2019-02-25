import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmployeeDataService} from '../employee-data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-parent',
  template: `
   {{user}}
  `,
  styles: []
})
export class ParentComponent implements OnDestroy {

  user: number;
  subscription: Subscription;
  constructor(private employeeDataService: EmployeeDataService) {
    this.employeeDataService.getValue().subscribe(value => {this.user = value; });
    console.log(this.user);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
