import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../user-data.service';

import {QuesionnaireDataService} from '../quesionnaire-data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  private user: any;
  private questionnaires: any[] = [];

  constructor(private userDataService: UserDataService, private questionnaireDataService: QuesionnaireDataService) { }

  ngOnInit() {
    this.getUser()
    this.getQuestionnaireDetails();
  }

  getQuestionnaireDetails(){
    for(let id of this.user.questionnaires){
      this.questionnaireDataService.retrieveData(id).subscribe((response) => this.checkResponse(response))
    }
    console.log(this.questionnaires)
  }

  checkResponse(response: any) :any{
    if(!(this.questionnaireDataService.getErrorStatus()===404)){
        var deadline = response.deadline.split(" - ")
        delete response.deadline
        response['date'] = deadline[0]
        response['time'] = deadline[1]
        this.questionnaires.push(response);
    }
    else{
      alert('unable to read course details');
      this.questionnaires.push('404');
    }
  }

  getUser() {
    this.user = this.userDataService.getData();
    //this.userDataService.getData().subscribe(user => this.user = user);
    console.log(this.user)
  }
}
