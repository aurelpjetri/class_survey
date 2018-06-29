import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemplateDataService {

  private templates: any[];
  private selected: any;

  private serverURL = 'http://localhost:3000/template';
  private error_status: any;

  constructor(private http:HttpClient) { }

  retrieveData(id:any): Observable<any>{
    const req_path = this.serverURL+'?matriculation='+id;
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
      console.error(error.status); // log to console instead
      this.error_status = error.status;


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

/*
  getTemaplateFromCode(code: any){
    for(let temp of this.templates){
      if(temp.code == code){
        return temp;
      }
    }
  }
*/

  selectTemplate(code:any):void{
    for(let temp of this.templates){
      if(temp.id == code){
        this.selected = temp;
      }
    }
  }

  getSelected(){
    return this.selected;
  }

  setTemplates(templates: any[]):void{
    this.templates = templates;
  }

  retrieveQuestionsOfTemplate(type: any, id: any): Observable<any>{
    const req_path = 'http://localhost:3000/question'+'?type='+type+'&id='+id;
    return this.http.get<any>(req_path)
    .pipe(
      catchError(this.handleError('retrieveQuestionsOfTemplate', [type, id]))
    );
  }

}
