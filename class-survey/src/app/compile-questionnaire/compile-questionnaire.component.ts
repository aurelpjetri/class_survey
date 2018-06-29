import { Component, OnInit, Input } from '@angular/core';

import {QuestionnaireDataService} from '../services/questionnaire-data.service';
import {QuestionDataService} from '../services/question-data.service';
import {SendAnswerService} from '../services/send-answer.service'

@Component({
  selector: 'app-compile-questionnaire',
  templateUrl: './compile-questionnaire.component.html',
  styleUrls: ['./compile-questionnaire.component.css']
})
export class CompileQuestionnaireComponent implements OnInit {
  private questionnaire: any;
  private questions: any[] = [];

  @Input() private answers: {} = {};
  @Input() private mul: {} = {};

  constructor(private questionnaireDataService: QuestionnaireDataService,
    private questionDataService: QuestionDataService,
    private sendAnswerService: SendAnswerService) { }

  ngOnInit() {
    this.getQuestionnaire();
    this.getQuestions();
    console.log(this.questions)
  }

  getQuestions(){
    for(let q of this.questionnaire.questions){
      this.questionDataService.retrieveData(q.questionType, q.questionId).subscribe((response) => this.checkResponse(response))
    }
    //console.log(this.answers)
    //console.log(this.questions)
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

  getQuestionnaire() {
    this.questionnaire = this.questionnaireDataService.getData();
    //this.userDataService.getData().subscribe(user => this.user = user);
  }

  submit(){
    //console.log('submitted!')
    var tmp: {} = {}
    for(let item in this.mul){
      var id = item.split("-")
      //tmp[id[1]].push(id[0]);
      var founded = false
      for(let k in tmp){
        if('_'+id[1] == k){
          founded = true
        }
      }

      if(founded == false){
        tmp['_'+id[1]] = []
      }
        tmp['_'+id[1]].push([id[0], this.mul[item]])
    }
    for(let item in tmp){
      this.answers['multiple'+item] = tmp[item];
    }
    var index = 0;
    for(let answer in this.answers){
      this.sendAnswers(index,answer);
      index++;
    }

  }

  sendAnswers(num, questionId): void{
    this.sendAnswerService.sendData({
          "questionnaireId": this.questionnaire.id,
          "numberOfTheQuestion": num,
          "collected": this.answers[questionId]
    })
    console.log(this.questionnaire.id, num, this.answers[questionId])
  }
}
