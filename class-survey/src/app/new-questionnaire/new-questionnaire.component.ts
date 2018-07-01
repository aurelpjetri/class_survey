import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

import{ UserDataService} from '../services/user-data.service';
import{ TemplateDataService} from '../services/template-data.service';
import {CourseDataService} from '../services/course-data.service';
import {QuestionnaireDataService} from '../services/questionnaire-data.service';

import { Router } from '@angular/router';


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

  // for the creation of a new question
  private new_question = {"type":"", "question":""};
  private q_types = ["essay", "lin", "multiple"];

  // for activation and deadline input
  private activation: any = {"date":"", "hh":"", "mm":""}
  private deadline: any = {"date":"", "hh":"", "mm":""}

  private title: any = "";

  private gps_flag: boolean = false;


  // used for multiple choice questions
  private m_choice: any;
  private multiple_answers: any[] = [];


  options: FormGroup;

  constructor(
    private userDataService: UserDataService,
    private templateDataService: TemplateDataService,
    private courseDataService: CourseDataService,
    private questionnaireDataService: QuestionnaireDataService,
    private router: Router){}

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
    if(this.template!=undefined){
      for(let _q of this.template.questions){
        this.templateDataService.retrieveQuestionsOfTemplate(_q.questionType, _q.questionId)
        .subscribe((response) => this.checkResponse(response));
      }
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
    //clean
    this.new_question = {"type":"", "question":""}
    this.multiple_answers = [];
    this.m_choice = undefined;
    this.options.setValue({w_max:0, lin_min:0, lin_max:7});

  }

  /*

  {
    "id": "QUES000",
    "title": "Course evaluation",
    "gps": "43.7985599,11.2526804",
    "deadline": "05/07/2018 - 10:00",
    "activation": "05/06/2018 - 10:30",
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
  }

  */

  getNewId(){
    var min = 10;
    var max = 100
    return Math.random() * (max - min) + min;
  }

  saveQuestionnaire(){
      var activation = this.activation.date.getDate()+"/"+this.activation.date.getMonth()+"/"+this.activation.date.getFullYear()+" - "+this.activation.hh+":"+this.activation.mm;
      var deadline = this.deadline.date.getDate()+"/"+this.deadline.date.getMonth()+"/"+this.deadline.date.getFullYear()+" - "+this.deadline.hh+":"+this.deadline.mm;

      var questionnaire = {
        "id": "QUES"+this.getNewId(),
        "title": this.title,
        "deadline": deadline,
        "activation": activation,
        "professor": this.user.name,
        "course": this.course.id,
// TBD what to pass if the gps is set to required in the creation form
        "gps": this.gps_flag,
        "questions":[]
      }

      for(let q of this.questions){

        var _question = {"question": q.question};

        if( q.type == "lin"){
          _question["questionType"] = "lin";
          _question["min"] = this.lin_min;
          _question["max"] = this.lin_max;
        }
        if(q.type == "multiple"){
          _question["questionType"] = "multiple";
          _question["choices"] = this.multiple_answers;
        }
        if(q.type == "essay"){
          _question["questionType"] = "essay";
          _question["max_len"] = this.w_max;
        }

        questionnaire.questions.push(_question);
      }

      this.questionnaireDataService.postQuestion(questionnaire).subscribe((response) => this.checkPostResponse(response))

      this.router.navigateByUrl('/course');
  }

  checkPostResponse(response: any): any{
    if(this.questionnaireDataService.getErrorStatus()===200){
      this.userDataService.setData(response.user);
      //console.log(response)

    }
    else{
      alert('posting failed; error status: '+this.questionnaireDataService.getErrorStatus());

    }
  }

}
