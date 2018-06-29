import { Component, OnInit } from '@angular/core';

import {QuestionnaireDataService} from '../services/questionnaire-data.service';
import {QuestionDataService} from '../services/question-data.service';
import {SendAnswerService} from '../services/send-answer.service'

@Component({
  selector: 'app-questionnaire-results',
  templateUrl: './questionnaire-results.component.html',
  styleUrls: ['./questionnaire-results.component.css']
})
export class QuestionnaireResultsComponent implements OnInit {
  private questionnaire: any;
  private questions: any[] = [];

  constructor(private questionnaireDataService: QuestionnaireDataService,
    private questionDataService: QuestionDataService,
    private sendAnswerService: SendAnswerService) { }

  ngOnInit() {
    this.getQuestionnaire();
    this.getQuestions();
    //this.questionsSort()
  }

  getQuestionnaire() {
    this.questionnaire = this.questionnaireDataService.getData();
    //this.userDataService.getData().subscribe(user => this.user = user);
  }

  getQuestions(){
    for(let q of this.questionnaire.questions){
      this.questionDataService.retrieveData(q.questionType, q.questionId).subscribe((response) => this.checkResponse(response))
    }
  }

  checkResponse(response: any) :any{
    if(!(this.questionDataService.getErrorStatus()===404)){
        if(response.min != undefined){
          var range: any[] = [];
          for(var i = response.min; i <= response.max; i++){
            range.push(i);
          }
          /*delete response.min;
          delete response.max;*/
          response['range'] = range;
        }

        this.questions.push(response);
        //this.questions[index] = response

    }
    else{
      alert('unable to read course details');
      this.questions.push('404');
    }
  }

  questionsSort(){
      var orderedQuestions = []
      for(let question of this.questionnaire.questions){
        for(let questionData of this.questions){
          if(question.questionType == 'lin' && questionData.min != undefined && question.questionId == questionData.id){
            orderedQuestions[question.num] = questionData
          }
          if(question.questionType == 'essay' && questionData.max_len != undefined && question.questionId == questionData.id){
            orderedQuestions[question.num] = questionData
          }
          if(question.questionType == 'multiple' && questionData.choices != undefined && question.questionId == questionData.id){
            orderedQuestions[question.num] = questionData
          }
        }
      }
      this.questions = orderedQuestions;
    }
}
