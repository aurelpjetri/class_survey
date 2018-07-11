import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CourseDataService } from '../services/course-data.service';
import { QuestionnaireDataService } from '../services/questionnaire-data.service';


@Component({
  moduleId: module.id,
  selector: 'seed-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  private course: any;
  private active_q: any[] = [];
  private expired_q: any[] = [];

  private act_icon: string = String.fromCharCode(0xf46d);
  private exp_icon: string = String.fromCharCode(0xf46c);
  private gps_icon: string = String.fromCharCode(0xf3c5);

  constructor(
    private courseDataService: CourseDataService,
    private questionnaireDataService: QuestionnaireDataService,
    private router: Router) { }

  ngOnInit() {
    this.course = this.courseDataService.getData();
    this.getQuestionnaires();
  }

  getQuestionnaires():void{
    for(let qid of this.course.questionnaires){
      this.questionnaireDataService.retrieveData(qid).subscribe((response) => this.checkResponse(response))
    }
  }

  checkResponse(response: any) :any{
    if(!(this.courseDataService.getErrorStatus()===404)){
      if(this.checkExpirement(response)){
        this.expired_q.push(response);
      }
      else{
        this.active_q.push(response);
      }
    }
    else{
      alert('unable to read course details');
      this.active_q.push('404');
    }
  }

  checkExpirement(quest:any): any{
    // returns TRUE if the deadline is passed
    var _deadline = quest.deadline;
    _deadline = _deadline.split(" - ");
    var day = _deadline[0].split("/");
    var time = _deadline[1].split(":");
    var deadline = new Date(day[2], (parseInt(day[1])-1), day[0], time[0], time[1]);
    return (new Date() > deadline);
  }

  creationTriggered(){
    this.router.navigateByUrl('templates');
  }

  viewResult(questionnaire, active){
    questionnaire['active'] = active
    this.questionnaireDataService.setData(questionnaire)
    this.router.navigateByUrl('/questionnaire/statistic')
  }

}
