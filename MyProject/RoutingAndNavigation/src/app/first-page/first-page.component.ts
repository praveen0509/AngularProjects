import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-first-page',
  template: `
    <div align="center">
    <h3>Displayed Inside First Page</h3>
    <div>{{user.id}}</div>
    <div>{{user.name}}</div>
    <div>{{user.area}}</div>
    </div>.
  `,
  styles: []
})
export class FirstPageComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  user: any;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        this.user = params;
      }
    );
  }

}
