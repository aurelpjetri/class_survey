import { Component, OnInit } from '@angular/core';

import{ UserDataService} from '../services/user-data.service';
import{ TemplateDataService} from '../services/template-data.service';
import {CourseDataService} from '../services/course-data.service';

@Component({
  selector: 'app-new-questionnaire',
  templateUrl: './new-questionnaire.component.html',
  styleUrls: ['./new-questionnaire.component.css']
})
export class NewQuestionnaireComponent implements OnInit {

  private course: any;
  private user: any;
  private template: any;
  private questions: any[] = [];

  constructor(
    private userDataService: UserDataService,
    private templateDataService: TemplateDataService,
    private courseDataService: CourseDataService
  ) { }

  ngOnInit() {
    this.course = this.courseDataService.getData();
    this.user = this.userDataService.getData();
    this.template = this.templateDataService.getSelected();
    this.retrieveQuestions();

    console.log(this.course);
  }

  retrieveQuestions(){
    for(let _q of this.template.questions){
      this.templateDataService.retrieveQuestionsOfTemplate(_q.questionType, _q.questionId)
      .subscribe((response) => this.checkResponse(response));
    }
  }

  checkResponse(response: any) :any{
    if(!(this.templateDataService.getErrorStatus()===404)){
      this.questions.push(response);
      console.log(response);
    }
    else{
      alert('unable to retrieve questions');
      this.questions.push('404');
    }
  }

}
