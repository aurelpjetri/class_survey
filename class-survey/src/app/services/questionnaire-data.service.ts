import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireDataService {
  private serverURL = 'http://localhost:3000/questionnaire';
  private error_status: any;
  private questionnaireData: any;

  private positionSelected: any;

  constructor(private http:HttpClient) { }


  retrieveData(id:any): Observable<any>{
    const req_path = this.serverURL+'?questionnaire='+id;
    return this.http.get<any>(req_path)
    .pipe(
      catchError(this.handleError('retrieveData', id))
    );
  }

  getErrorStatus(): any {
    return this.error_status;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      this.error_status = error.status;

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  setData(data: any):void{
    this.questionnaireData = data;
  }

  getData(): any{
    return this.questionnaireData;
  }

  postQuestionnaire(questionnaire:any): Observable<any>{
    const req_path = "http://localhost:3000/questionnaire";
    return this.http.post<any>(req_path, questionnaire, {})
    .pipe(
      catchError(this.handleError('postQuestionnaire', questionnaire))
    );
  }

  setPositionSelected(pos:any){
    this.positionSelected = pos;
  }

  getPositionSelected():any{
    return this.positionSelected;
  }

  postTemplate(template:any): Observable<any>{
    const req_path = "http://localhost:3000/template";
    return this.http.post<any>(req_path, template, {})
    .pipe(
      catchError(this.handleError('postTemplate', template))
    );
  }

  resetErrorStatus(){
    this.error_status = undefined;
  }

}
