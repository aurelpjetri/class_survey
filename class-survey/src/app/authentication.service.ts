import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

//import { LoginComponent } from './login/login.component'

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private serverURL = 'http://localhost:3000/authentication';

  private error_status: any;

  constructor(private http:HttpClient) { }

  login(user: any): Observable<any> {
    this.error_status= 200;
    return this.http.post<any>(this.serverURL, user)
      .pipe(
        catchError(this.handleError('login', user))
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



/*
 login(username: string, password: string) {
         return this.http.post<any>('http://localhost:3000/authentication', { username: username, password: password })
             .map(user => {
                 // login successful if there's a jwt token in the response
                 if (user && user.token) {
                     // store user details and jwt token in local storage to keep user logged in between page refreshes
                     localStorage.setItem('currentUser', JSON.stringify(user));
                 }

                 return user;
             });
     }*/

 /** POST: add a new hero to the server /
   addHero (hero: Hero): Observable<Hero> {
     return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
       tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
       catchError(this.handleError<Hero>('addHero'))
     );
   }
*/
}
