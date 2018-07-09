import { Observable, of } from 'rxjs';

export class QuestionnaireDataMock {
  retrieveData(id:any): Observable<any>{

    var questionnaire: any;
    if(id=="QUES000"){
      questionnaire = {
  			"id": "QUES000",
  			"title": "Course evaluation",
  			"gps": "43.7985599,11.2526804",
  			"deadline": "05/07/2017 - 10:00",
  			"activation": "05/06/2017 - 10:30",
  			"courseId": "COUR000",
  			"professor": "Mario Rossi",
  			"questions": [
  				{
  					"questionType": "lin",
  					"questionId": 0,
  					"num": 0
  				},
  				{
  					"questionType": "essay",
  					"questionId": 0,
  					"num": 1
  				}
  			]
  		};
    }
    if(id=="QUES003"){
      questionnaire = {
  			"id": "QUES003",
  			"title": "About course language",
  			"gps": "false",
  			"deadline": "20/08/2018 - 24:00",
  			"activation": "01/03/2018 - 00:00",
  			"courseId": "COUR000",
  			"professor": "Lucilla Toscano",
  			"questions": [
  				{
  					"questionType": "multiple",
  					"questionId": 0,
  					"num": 0
  				},
  				{
  					"questionType": "multiple",
  					"questionId": 1,
  					"num": 1
  				}
  			]
  		};
    }
    return of( questionnaire )
  }

  getErrorStatus(){
    return undefined
  }
}
