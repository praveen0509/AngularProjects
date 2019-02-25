import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor() { }

  private subject = new BehaviorSubject<number>(1);
  cast = this.subject.asObservable();

  editUser(newUser) {
    this.subject.next(newUser);
  }

  getValue(): Observable<any> {
    return this.subject;
  }

}
