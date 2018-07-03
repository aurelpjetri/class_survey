import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {


  private course_data: any;

  private serverURL = 'http://localhost:3000/course';
  private error_status: any;

  constructor(private http:HttpClient) { }


  retrieveData(code:any): Observable<any>{
    const req_path = this.serverURL+'?code='+code;
    return this.http.get<any>(req_path)
    .pipe(
      catchError(this.handleError('retrieveData', code))
    );
  }

  getErrorStatus(): any {
    return this.error_status;
  }

  resetErrorStatus(){
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

  setData(course:any):void{
    this.course_data = course;
  }

  getData():any{
    return this.course_data;
  }

}
