import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  template: `
    <div    align="center">This is the Main Page</div><br>

      <table align="center" border="1px">
        <tr>
          <th>id</th>
          <th>name</th>
          <th>area</th>
          <th>FirstPageView</th>
          <th>SecondPageView</th>
        </tr>
        <tr *ngFor="let user of users">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.area}}</td>
          <td  align="center" ><input type="button"  value="View" (click)="displayRowFirstPage(user)"></td>
          <td align="center"><input type="button"  value="View" (click)="displayRowSecondPage(user)"></td>
        </tr>
      </table>


  `,
  styles: []
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router) { }

  users = [
    { id: 11, name: 'Mr. Nice', area: 'kp'},
    { id: 12, name: 'Narco', area: 'jntu' },
    { id: 13, name: 'Bombasto' , area: 'jdm'},
    { id: 14, name: 'Celeritas' , area: 'mp'},
    { id: 15, name: 'Magneta' , area: 'kphb'},
    { id: 16, name: 'RubberMan' , area: 'kp'},
    { id: 17, name: 'Dynama', area: 'chintal' },
    { id: 18, name: 'Dr IQ', area: 'IDPL' },
    { id: 19, name: 'Magma', area: 'kphb' },
    { id: 20, name: 'Tornado', area: 'myp' }
  ];

  ngOnInit() {  }


  displayRowFirstPage(user: any) {
    this.router.navigate(['firstPage', user], { skipLocationChange: true });
  }

  displayRowSecondPage(user: any) {
    this.router.navigate(['secondPage', user], { skipLocationChange: true });
  }
}
