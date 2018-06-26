import { Component, OnInit } from '@angular/core';

import {UserDataService} from '../services/user-data.service';
import {CourseDataService} from '../services/course-data.service';


@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  private user: any;
  private active_courses: any[] = [];
  private expired_courses: any[] = [];


  constructor(private userDataService: UserDataService, private courseDataService: CourseDataService) { }

  ngOnInit() {
    this.getUser();
    //this.courses = [this.user.courses.length];
    this.getCoursesDetails();
    console.log(this.active_courses);
    console.log(this.expired_courses);
  }

  getCoursesDetails(){
    for(let code of this.user.courses){
      this.courseDataService.retrieveData(code).subscribe((response) => this.checkResponse(response))
    }

    /*
    for(var _i = 0; _i < this.courses.length; _i++){
      this.courseDataService.retrieveData(this.user.courses[_i]).subscribe((response) => this.checkResponse(response, _i))
    }
    */
  }

  checkResponse(response: any) :any{
    if(!(this.courseDataService.getErrorStatus()===404)){
      if (response.active==="false"){
        this.expired_courses.push(response);
      }
      else{
        this.active_courses.push(response);
      }
    }
    else{
      alert('unable to read course details');
      this.active_courses.push('404');
    }
  }

/*
  checkResponse(response: any, index: any) :any{
    if(!(this.courseDataService.getErrorStatus()===404)){
      this.courses[index] = response;
    }
    else{
      alert('unable to read course details');
      this.courses[index] = '404';
    }
  }
*/

  getUser() {
    this.user = this.userDataService.getData();
    //this.userDataService.getData().subscribe(user => this.user = user);
    console.log(this.user)
  }

}
