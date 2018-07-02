import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Config } from '../config'

import { UserDataService } from '../services/user-data.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: "app-login",
  templateUrl: "./login/login.component.html",
  styleUrls: ["./login/login.component.css"]
})
export class LoginComponent implements OnInit {
  @Input() private mat: string;
  @Input() private pass: string;
  private config = Config;

  constructor(
    private authenticationService: AuthenticationService,
    private userDataService: UserDataService,
    private router: Router) { }

  ngOnInit() {}

  login(): any{
    this.authenticationService.login({
      "matriculation": this.mat,
      "password": this.pass
    }).subscribe((response) =>  this.checkResponse(response))
  }

  checkResponse(response: any) :any{
    if(this.authenticationService.getErrorStatus()===200){
      this.userDataService.setData(response.user);

      if (response.role == 'professor'){
        this.router.navigateByUrl('/professor')
      }
      if (response.role == 'student') {
        this.router.navigateByUrl('/student')
      }
    }
    else{
      alert('matriculation number or password invalid');
      this.mat='';
      this.pass='';
    }
  }

}