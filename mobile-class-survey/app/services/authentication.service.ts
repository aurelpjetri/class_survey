import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private error_status: any;

  constructor(private http: HttpClient, private server: ServerService) { }

  login(user: any): Observable<any> {
    return this.http.post<any>(this.server.getURL()+'/authentication', user)
      .pipe(
        catchError(this.handleError('login', user))
      );
  }

  getErrorStatus(): any {
    return this.error_status;
  }

  resetErrorStatus(): any{
    this.error_status = undefined;
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
