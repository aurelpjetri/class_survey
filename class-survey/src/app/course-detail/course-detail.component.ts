import { Component, OnInit } from '@angular/core';

import {CourseDataService} from '../services/course-data.service';
import {UserDataService} from '../services/user-data.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  private courses: any[];
  private details: any[];

  constructor(private courseDataService: CourseDataService, private userDataService: UserDataService) { }

  ngOnInit() {
    this.courses = this.userDataService.getData().courses
    this.details = [this.courses.length];
  }

}
