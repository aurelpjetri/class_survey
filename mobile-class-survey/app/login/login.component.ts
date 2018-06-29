import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { Config } from '../config'

@Component({
  selector: "app-login",
  providers: [AuthenticationService],
  templateUrl: "./login/login.component.html",
  styleUrls: ["./login/login.component.css"]
})
export class LoginComponent implements OnInit {
  @Input() private mat: string;
  @Input() private pass: string;
  private config = Config;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {}

  login(): any{
    alert(Config.getURL());
    this.authenticationService.login({
      "matriculation": this.mat,
      "password": this.pass
    }).subscribe((response) =>  this.checkResponse(response))
  }

  checkResponse(response: any) :any{
    if(this.authenticationService.getErrorStatus()===200){
      console.log(response)

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
