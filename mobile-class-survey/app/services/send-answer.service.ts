import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

//import { LoginComponent } from './login/login.component'

import { HttpClient } from '@angular/common/http';

import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class SendAnswerService {

  private error_status: any;

  constructor(private http:HttpClient) { }

  sendData(data: any): Observable<any> {
    this.error_status= 200;
    return this.http.post<any>(Config.getURL()+ '/question/answer', data)
      .pipe(
        catchError(this.handleError('sendQuestion', data))
      );
  }

  getErrorStatus(): any {
    return this.error_status;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error.status); // log to console instead
      this.error_status = error.status;


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
