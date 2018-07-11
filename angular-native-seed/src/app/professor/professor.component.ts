import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UserDataService } from '../services/user-data.service';
import { CourseDataService } from '../services/course-data.service';

@Component({
  moduleId: module.id,
  selector: 'seed-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  private user: any;
  private active_courses: any[] = [];
  private expired_courses: any[] = [];

  private uni_icon: string = String.fromCharCode(0xf19c);

  constructor(
    private userDataService: UserDataService,
    private courseDataService: CourseDataService,
    private router: Router) { }

  ngOnInit() {
    this.getUser();
    this.getCoursesDetails();
  }

  getCoursesDetails(){
    for(let code of this.user.courses){
      this.courseDataService.retrieveData(code).subscribe((response) => this.checkResponse(response))
    }
  }

  checkResponse(response: any): any{
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

  getUser() {
    this.user = this.userDataService.getData();
  }

  selectedCourse(selected: any): void{
    this.courseDataService.setData(selected);
    this.router.navigateByUrl('/course');
  }

}
