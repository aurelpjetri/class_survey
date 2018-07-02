import { Component, OnInit } from '@angular/core';

import{ UserDataService} from '../services/user-data.service';
import{ TemplateDataService} from '../services/template-data.service';
import {CourseDataService} from '../services/course-data.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  private user: any;
  private course: any;
  private templates: any[];

  constructor(
    private userDataService: UserDataService,
    private templateDataService: TemplateDataService,
    private courseDataService: CourseDataService,
    private router: Router) { }

  ngOnInit() {
    this.user = this.userDataService.getData();
    this.course = this.courseDataService.getData();
    //this.templates = this.userDataService.getData().templates;

    console.log(this.userDataService);

    this.getTemplates(this.user.matriculation);

  }

  getTemplates(id:any):any{
    this.templateDataService.retrieveData(id).subscribe((response) => this.checkResponse(response))
  }

  checkResponse(response: any) :any{
    if(!(this.templateDataService.getErrorStatus()===404)){
      this.templates = response.templates;
      this.templateDataService.setTemplates(this.templates);
    }
    else{
      alert('unable to retrieve templates');
      this.templates = ['404'];
    }
  }

  changeView(temp:any){
    if(temp != undefined){
      this.templateDataService.selectTemplate(temp.id)
    }
    else{
      this.templateDataService.selectTemplate(undefined);
    }
    this.router.navigateByUrl('create')
  }

/*
  getQuestions(code: any): any{
    for(let temp of this.templates){
      if(temp.code == code){
        return temp.questions;
      }
    }
  }


  retrieveQuestion(type:any, id:any):any{

  }
*/
}
