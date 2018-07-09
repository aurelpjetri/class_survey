import { Observable, of } from 'rxjs';

export class QuestionnaireDataMock {
  retrieveData(id:any): Observable<any>{
    var questionnaire = {
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
    return of( questionnaire )
  }

  getErrorStatus(){
    return undefined
  }
}
