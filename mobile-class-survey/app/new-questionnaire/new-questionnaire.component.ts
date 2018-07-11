import { Component, OnInit } from '@angular/core';

import { DatePicker } from "ui/date-picker";
import { Switch } from "ui/switch";

import { isEnabled, enableLocationRequest, getCurrentLocation } from "nativescript-geolocation";

import { UserDataService } from '../services/user-data.service';
import { TemplateDataService } from '../services/template-data.service';
import { CourseDataService } from '../services/course-data.service';
import { QuestionnaireDataService } from '../services/questionnaire-data.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-new-questionnaire',
  templateUrl: './new-questionnaire/new-questionnaire.component.html',
  styleUrls: ['./new-questionnaire/new-questionnaire.component.css']
})
export class NewQuestionnaireComponent implements OnInit {

  private save_icon: string = String.fromCharCode(0xf055);
  private trash_icon: string = String.fromCharCode(0xf2ed);

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
  private lat: any;
  private lon: any;

  private public_flag: boolean = false;

  // used for lin and essay
  private max_words: number;
  private min: number;
  private max: number;


  // used for multiple choice questions
  private m_choice: any;
  private multiple_answers: any[] = [];

  constructor(
    private userDataService: UserDataService,
    private templateDataService: TemplateDataService,
    private courseDataService: CourseDataService,
    private questionnaireDataService: QuestionnaireDataService,
    private router: Router){}

  ngOnInit() {
    this.course = this.courseDataService.getData();
    this.user = this.userDataService.getData();

    this.template = this.templateDataService.getSelected();
    this.retrieveQuestions();

    this.setInitialPos();
  }

  onPickerLoaded(args) {
        let datePicker = <DatePicker>args.object;

        var today = new Date();

        datePicker.minDate = new Date(2010, 0, 1);
        datePicker.maxDate = new Date(2045, 11, 15);

        datePicker.date = new Date();


        this.activation.hh = today.getHours();
        this.deadline.hh = today.getHours()+1;
        this.activation.mm = today.getMinutes();
        this.deadline.mm = today.getMinutes();
    }

  setInitialPos(){
    var position = getCurrentLocation({}).then(
      (position) => {
        this.lat = position.latitude;
        this.lon = position.longitude;
      }
    ).catch((e) => console.warn(`ERROR(${e.code}): ${e.message}`));

  }

  openQuestion(type) {
    this.new_question.type = type;
  }

  retrieveQuestions(){
    if(this.template!=undefined){
      for(let _q of this.template.questions){
        this.templateDataService.retrieveQuestionsOfTemplate(_q.questionType, _q.questionId)
        .subscribe((response) => this.checkResponse(response, _q.questionType));
      }
    }
  }

  checkResponse(response: any, type:any) :any{
    if(!(this.templateDataService.getErrorStatus()===404)){
      var tmp = response;
      tmp["type"] = type;
      this.questions.push(tmp);
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
    //NOTE riprova con validator
    if(this.new_question.type=="essay"){
      this.new_question["max_len"] = this.max_words;
    }
    if(this.new_question.type=="lin"){
      this.new_question["max"] = this.max;
      this.new_question["min"] = this.min;
    }
    if(this.new_question.type=="multiple"){
      this.new_question["choices"] = this.multiple_answers;

    }
    this.questions.push(this.new_question)
    //clean
    this.new_question = {"type":"", "question":""}
    this.multiple_answers = [];
    this.m_choice = undefined;

    //---- NOTE
    this.max_words = undefined;
    this.max = undefined;
    this.min = undefined;

  }

  getNewId(){
    var min = 10;
    var max = 100
    return Number(Math.random() * (max - min) + min);
  }

  saveQuestionnaire(){
      var activation;
      var deadline;

      try {
        activation = this.activation.date.getDate()+"/"+(this.activation.date.getMonth()+1)+"/"+this.activation.date.getFullYear()+" - "+this.activation.hh+":"+this.activation.mm;
        deadline = this.deadline.date.getDate()+"/"+(this.deadline.date.getMonth()+1)+"/"+this.deadline.date.getFullYear()+" - "+this.deadline.hh+":"+this.deadline.mm;
      } catch(error) {
        alert("define activation and deadline")
        return
      }


      var questionnaire = {
        "id": "QUES"+this.getNewId(),
        "title": this.title,
        "deadline": deadline,
        "activation": activation,
        "professor": this.user.name,
        "course": this.course.code,
        // TBD what to pass if the gps is set to required in the creation form
        "public": this.public_flag,
        "questions": []
      }

      if (this.gps_flag){
        //var _pos = this.questionnaireDataService.getPositionSelected();
        questionnaire["gps"] = this.lat+","+this.lon;
      }
      else{
        questionnaire["gps"] = "false";
      }

      for(let q of this.questions){

        var _question = {"question": q.question};

        if( q.type == "lin"){
          _question["questionType"] = "lin";

          _question["min"] = q.min;
          _question["max"] = q.max;
        }
        if(q.type == "multiple"){
          _question["questionType"] = "multiple";
          _question["choices"] = q.choices;
        }
        if(q.type == "essay"){
          _question["questionType"] = "essay";
          _question["max_len"] = q.max_len;
        }

        questionnaire.questions.push(_question);
      }

      this.questionnaireDataService.resetErrorStatus();
      this.questionnaireDataService.postQuestionnaire(questionnaire).subscribe((response) => this.checkPostResponse(response));

  }

  checkPostResponse(response: any): any{

    if(this.questionnaireDataService.getErrorStatus()==undefined){
      this.router.navigateByUrl('/course');
    }
    else{
      alert('posting failed; error status: '+ this.questionnaireDataService.getErrorStatus());
    }

  }

  createTemplate(){
    var template = {
      "id": "TEMP"+this.getNewId(),
      "creator": this.user.name,
      "public": this.public_flag,
      "questions": []
    }

    for(let q of this.questions){

      var _question = {"question": q.question};

      if( q.type == "lin"){
        _question["questionType"] = "lin";

        _question["min"] = q.min;
        _question["max"] = q.max;
      }
      if(q.type == "multiple"){
        _question["questionType"] = "multiple";
        _question["choices"] = q.choices;
      }
      if(q.type == "essay"){
        _question["questionType"] = "essay";
        _question["max_len"] = q.max_len;
      }

      template.questions.push(_question);
    }

    this.questionnaireDataService.resetErrorStatus();
    this.questionnaireDataService.postTemplate(template).subscribe((response) => this.checkPostResponse(response));
  }

}
