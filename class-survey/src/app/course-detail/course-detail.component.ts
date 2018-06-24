import { Component, OnInit } from '@angular/core';

import {CourseDataService} from '../course-data.service';
import {UserDataService} from '../user-data.service';

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
