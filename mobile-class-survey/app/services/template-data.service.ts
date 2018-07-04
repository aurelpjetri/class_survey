import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { Config } from '../config'

@Injectable({
  providedIn: 'root'
})
export class TemplateDataService {

  private templates: any[];
  private selected: any;

  private error_status: any;


  constructor(private http:HttpClient) { }

  retrieveData(id:any): Observable<any>{
    const req_path = Config.getURL()+'/template?matriculation='+id;
    return this.http.get<any>(req_path)
    .pipe(
      catchError(this.handleError('retrieveData', id))
    );
  }

  getErrorStatus(): any {
    return this.error_status;
  }

  resetErrorStatus(): void {
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
    if(code!=undefined){
      for(let temp of this.templates){
        if(temp.id == code){
          this.selected = temp;
        }
      }
    }
    else{
      this.selected = undefined;
    }

  }

  getSelected(){
    return this.selected;
  }

  setTemplates(templates: any[]):void{
    this.templates = templates;
  }

  retrieveQuestionsOfTemplate(type: any, id: any): Observable<any>{
    const req_path = Config.getURL() + '/question?type='+type+'&id='+id;
    return this.http.get<any>(req_path)
    .pipe(
      catchError(this.handleError('retrieveQuestionsOfTemplate', [type, id]))
    );
  }

  removeTemplate(prof:any, temp_id:any): Observable<any>{
    return this.http.delete<any>(Config.getURL()+'/template?professor='+prof+'&id='+temp_id)
    .pipe(
      catchError(this.handleError('removeTemplate', [prof, temp_id]))
    );
  }

}
