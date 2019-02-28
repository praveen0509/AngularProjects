import {Component, Injectable, OnInit} from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-body-and-sidebar',
  template: `
    <header>
      <nav class="navbar navbar-expand-sm bg-success">
        <ul class="navbar-nav row" >
          <li class="nav-item col-md-3 "  >
            <button class="text-danger" >Home</button>
          </li>
          <li class="nav-item col-md-3">
            <button class="text-danger" (click)="saveFunction()">Save</button>
          </li>
          <li class="nav-item col-md-3">
            <button class="text-danger" (click)="deleteFunction()">Delete</button>
          </li>
          <li class="nav-item col-md-3">
            <input  type="text" placeholder="search"  [(ngModel)]="searchTerm">
          </li>
        </ul>
      </nav>
    </header>


    <div  class="row">
      <div  class="col-sm-3"  style="background-color: lightblue; text-align: center">
        <h3>The static text:</h3>
            {{currentDate | date: 'short'}}<br>
        <div class="active text-info" >{{textArea}}</div>
        <!--filterSearchPipe: searchTerm-->
        <div  *ngFor="let data of saveTextArray | filterBy: searchTerm" (click)="clickedDataFunction(data)" ngModel>
           {{data}}
        </div>
      </div>
      <div  class="col-sm-9"  style="background-color: lightpink">
        <label>TextArea:</label><br>
        <textarea [(ngModel)]="textArea" (blur)="minStrFunction()" cols="100"></textarea></div>
    </div>

  `,
  styles: []
})

@Injectable()
export class BodyAndSidebarComponent implements OnInit {

  constructor(private localStorage: LocalStorage) { }

  textArea: string;
  minText = '';
  saveTextArray = new Array();
  currentDate = new Date();
  searchTerm: string;

  ngOnInit() {
    this.localStorage.setItem('userDetails', this.saveTextArray).subscribe(() => {});
  }

  minStrFunction() {
    if (this.textArea.length > 15) {
      this.minText = this.textArea.substring(0, 15) + '...';
    } else {
      this.minText = this.textArea;
    }
  }

  saveFunction() {
    this.saveTextArray.push( this.minText);
    alert('Data Saved');
  }

  clickedDataFunction(data) {
    this.textArea = data;
  }

  deleteFunction() {
    for (let i = 0; i < this.saveTextArray.length; i++) {
      if (this.saveTextArray[i] === this.textArea) {
        this.saveTextArray.splice(i, 1);
      }
    }
    this.textArea = '';
  }



}
