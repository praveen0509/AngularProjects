import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-second-page',
  template: `

    <div align="center">
      <h3>Displayed Inside Second Page</h3>
      <div>{{user.id}}</div>
      <div>{{user.name}}</div>
      <div>{{user.area}}</div>
    </div>.
  `,
  styles: []
})
export class SecondPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {

  }
  user: any;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.user = params);
  }

}
