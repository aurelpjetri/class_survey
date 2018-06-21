import { Injectable } from '@angular/core';

import { LoginComponent } from './login/login.component'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:Http) { }

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
     }

 /** POST: add a new hero to the server /
   addHero (hero: Hero): Observable<Hero> {
     return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
       tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
       catchError(this.handleError<Hero>('addHero'))
     );
   }
*/
}
