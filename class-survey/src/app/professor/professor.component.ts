import { Component, OnInit } from '@angular/core';

import {UserDataService} from '../user-data.service';
import {CourseDataService} from '../course-data.service';


@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  private user: any;
  private courses_details: any[];

  constructor(private userDataService: UserDataService, private courseDataService: CourseDataService) { }

  ngOnInit() {
    this.getUser();
    //this.courses_details = [this.user.courses.length];
    this.courses_details = [];
    this.getCoursesDetails();
    console.log(this.courses_details);
  }

  getCoursesDetails(){
    for(let code of this.user.courses){
      this.courseDataService.retrieveData(code).subscribe((response) => this.checkResponse(response))
    }

    /*
    for(var _i = 0; _i < this.courses_details.length; _i++){
      this.courseDataService.retrieveData(this.user.courses[_i]).subscribe((response) => this.checkResponse(response, _i))
    }
    */
  }

  checkResponse(response: any) :any{
    if(!(this.courseDataService.getErrorStatus()===404)){
      this.courses_details.push(response);
    }
    else{
      alert('unable to read course details');
      this.courses_details.push('404');
    }
  }

/*
  checkResponse(response: any, index: any) :any{
    if(!(this.courseDataService.getErrorStatus()===404)){
      this.courses_details[index] = response;
    }
    else{
      alert('unable to read course details');
      this.courses_details[index] = '404';
    }
  }
*/

  getUser() {
    this.user = this.userDataService.getData();
    //this.userDataService.getData().subscribe(user => this.user = user);
    console.log(this.user)
  }

}
