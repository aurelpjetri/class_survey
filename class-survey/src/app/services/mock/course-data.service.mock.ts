import { Observable, of } from 'rxjs';

export class CourseDataMock {
  getData(): any{
    return {
			"code": "COUR000",
			"name": "Deep Networks",
			"cfu": 9,
			"year": "2017/18",
			"degree": "Master",
			"active": "true",
			"questionnaires": [
				"QUES000",
        "QUES003"
			]
		}
  }

  retrieveData(code:any){
    var course: any;
    if(code=="COUR000"){
      course = {
  			"code": "COUR000",
  			"name": "Deep Networks",
  			"cfu": 9,
  			"year": "2017/18",
  			"degree": "Master",
  			"active": "true",
  			"questionnaires": [
  				"QUES000",
  				"QUES003"
  			]
  		};
    }
    return of(course)
  }
}
