import { Component, OnInit } from '@angular/core';

import {QuestionnaireDataService} from '../services/questionnaire-data.service';
import {QuestionDataService} from '../services/question-data.service';

@Component({
  selector: 'app-compile-questionnaire',
  templateUrl: './compile-questionnaire.component.html',
  styleUrls: ['./compile-questionnaire.component.css']
})
export class CompileQuestionnaireComponent implements OnInit {
  private questionnaire: any;
  private questions: any[] = [];

  constructor(private questionnaireDataService: QuestionnaireDataService,
  private questionDataService: QuestionDataService) { }

  ngOnInit() {
    this.getQuestionnaire();
    this.getQuestions();
  }

  getQuestions(){
    for(let q of this.questionnaire.questions){
      this.questionDataService.retrieveData(q.questionType, q.questionId).subscribe((response) => this.checkResponse(response))
    }
    console.log(this.questions)
  }

  checkResponse(response: any) :any{
    if(!(this.questionDataService.getErrorStatus()===404)){
        this.questions.push(response);
    }
    else{
      alert('unable to read course details');
      this.questions.push('404');
    }
  }

  getQuestionnaire() {
    this.questionnaire = this.questionnaireDataService.getData();
    //this.userDataService.getData().subscribe(user => this.user = user);
  }
}
