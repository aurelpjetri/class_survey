import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

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

  private new_question: any = {"type":"", "question":""};
  private q_types = ["essay", "lin", "multiple"];

  // used for multiple choice questions
  private m_choice: any;
  private multiple_answers: any[] = [];


  options: FormGroup;

  constructor(
    private userDataService: UserDataService,
    private templateDataService: TemplateDataService,
    private courseDataService: CourseDataService){}

  ngOnInit() {
    this.options = new FormGroup({
      w_max: new FormControl(0, [Validators.min(0), Validators.max(1000)]),
      lin_max: new FormControl( 7, Validators.max(100)),
      lin_min: new FormControl(1, Validators.min(0))
    });
    this.course = this.courseDataService.getData();
    this.user = this.userDataService.getData();
    this.template = this.templateDataService.getSelected();
    this.retrieveQuestions();

  }

  get w_max(){return this.options.get('w_max');}

  get lin_max(){return this.options.get('lin_max');}
  get lin_min(){return this.options.get('lin_min');}


  retrieveQuestions(){
    for(let _q of this.template.questions){
      this.templateDataService.retrieveQuestionsOfTemplate(_q.questionType, _q.questionId)
      .subscribe((response) => this.checkResponse(response));
    }
  }

  checkResponse(response: any) :any{
    if(!(this.templateDataService.getErrorStatus()===404)){
      this.questions.push(response);
    }
    else{
      alert('unable to retrieve questions');
      this.questions.push('404');
    }
  }


  removeQuestion(index:any){
    this.questions.splice(index,1);
  }

/*
  setNewQuestionType(type:any){
    this.new_question["type"] = type;
  }

  setNewQuestionText(text:any){
    this.new_question["question"] = text;
  }
*/

  addMultipleChoice(){
    if(this.m_choice != undefined){
      this.multiple_answers.push(this.m_choice);
      this.m_choice = undefined;
    }
  }

  removeMultipleChoice(ans:any){
    console.log(ans)
    this.multiple_answers.splice(this.multiple_answers.indexOf(ans),1)
  }

  addQuestion(){
    if(this.new_question.type=="essay"){
      this.new_question["max_len"] = this.w_max;
    }
    if(this.new_question.type=="lin"){
      this.new_question["max"] = this.lin_max;
      this.new_question["min"] = this.lin_min;
    }
    if(this.new_question.type=="multiple"){
      this.new_question["choices"] = this.multiple_answers;

    }
    this.questions.push(this.new_question)
    this.new_question = {"type":"", "question":""}
    this.multiple_answers = [];
    this.m_choice = undefined;
    this.options.setValue({w_max:0, lin_min:0, lin_max:7});
    console.log(this.new_question);
  }

}
