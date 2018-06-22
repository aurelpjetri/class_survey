import { Component, OnInit } from '@angular/core';

import {UserDataService} from '../user-data.service';


@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

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
