import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisticsDataService {
  private serverURL = 'http://localhost:3000/questionnaire/statistic';
  private error_status: any;
  //private answerData: any;

  constructor(private http:HttpClient) { }

  retrieveData(questionnaire: any, number:any): Observable<any>{
    const req_path = this.serverURL+'?questionnaire='+questionnaire+'&number='+number;
    return this.http.get<any>(req_path)
    .pipe(
      catchError(this.handleError('retrieveData', number))
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
}
