import { Component, OnInit } from '@angular/core';

import {CourseDataService} from '../services/course-data.service';
import {QuestionnaireDataService} from '../services/questionnaire-data.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  private course: any;
  private questionnaires: any[] = [];

  constructor(
    private courseDataService: CourseDataService,
  private questionnaireDataService: QuestionnaireDataService) { }

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
      this.questionnaires.push(response);
    }
    else{
      alert('unable to read course details');
      this.questionnaires.push('404');
    }
  }

}
