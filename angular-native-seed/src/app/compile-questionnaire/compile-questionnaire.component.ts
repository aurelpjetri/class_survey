import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import {QuestionnaireDataService} from '../services/questionnaire-data.service';
import {QuestionDataService} from '../services/question-data.service';
import {SendAnswerService} from '../services/send-answer.service'

@Component({
  moduleId: module.id,
  selector: 'seed-compile-questionnaire',
  templateUrl: './compile-questionnaire.component.html',
  styleUrls: ['./compile-questionnaire.component.css']
})
export class CompileQuestionnaireComponent implements OnInit {
  private questionnaire: any;
  private questions: any[] = [];

  @Input() private answers: {} = {};
  @Input() private mul: {} = {};

  constructor(
    private questionnaireDataService: QuestionnaireDataService,
    private questionDataService: QuestionDataService,
    private sendAnswerService: SendAnswerService,
    private router: Router) { }

  ngOnInit() {
    this.getQuestionnaire();
    this.getQuestions();
    this.questionsSort()
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

  getQuestionnaire() {
    this.questionnaire = this.questionnaireDataService.getData();
    //this.userDataService.getData().subscribe(user => this.user = user);
  }

  control(){
    console.log('ciao')
  }

  submit(){
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

    var call = true
    var index = 0;
    for(let question of this.questions){
      if(question.max_len != undefined){
        for(let answer in this.answers){
          var a = answer.split('_')
          if(a[0] == 'essay' && a[1] == question.id){
            var numOfWords = this.answers[answer].split(' ');
            if(numOfWords.length > question.max_len){
              call = false
              alert('Too many words; used: '+numOfWords.length+', max: '+question.max_len)
            }
          }
        }
      }
    }

    if(call==true){
      var index = 0;
      for(let answer in this.answers){
        //console.log(this.answers[answer])
        this.sendAnswers(index,answer);
        index++;
      }
      this.router.navigateByUrl('/student')
    }
  }

  sendAnswers(num, questionId): void{
    var answer = this.answers[questionId]

    if(typeof answer != "object")
      answer = [answer]

    this.sendAnswerService.sendData({
          "questionnaireId": this.questionnaire.id,
          "numberOfTheQuestion": num,
          "collected": answer
    }).subscribe()
  }

}
