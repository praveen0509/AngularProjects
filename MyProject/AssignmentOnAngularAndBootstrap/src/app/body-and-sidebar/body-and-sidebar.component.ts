import { Component, OnInit } from '@angular/core';

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
            <input  type="text" name="search" placeholder="search"  (click)="searchFunction()" ngModel>
          </li>
        </ul>
      </nav>
    </header>


    <div  class="row">
      <div  class="col-sm-3"  style="background-color: lightblue; text-align: center">
        <h3>The static text:</h3>
        <h5></h5>
        <div>

            {{textArea}}
        </div>
        <div  *ngFor="let data of saveTextArray" (click)="clickedDataFunction(data)" ngModel>
         {{data}}</div>


      </div>
      <div  class="col-sm-9"  style="background-color: lightpink; text-align: center">
        <label>TextArea:</label><br>
        <textarea [(ngModel)]="textArea" (blur)="minStrFunction()" ></textarea></div>
    </div>

  `,
  styles: []
})
export class BodyAndSidebarComponent implements OnInit {

  constructor() { }

  textArea: string;
  minText = '';
  saveTextArray = new Array();
  currentDate = new Date();
  ngOnInit() {
  }

  minStrFunction() {
    if (this.textArea.length > 15) {
      this.minText = this.textArea.substring(0, 15) + '...';
    } else {
      this.minText = this.textArea;
    }
  }

  saveFunction() {
    this.saveTextArray.push( this.minText + this.currentDate);
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
  }


  searchFunction() {

  }

}
