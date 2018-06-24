import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../user-data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  private user: any;

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this.user = this.userDataService.getData();
    //this.userDataService.getData().subscribe(user => this.user = user);
    console.log(this.user)
  }
}
