import { Component, OnInit, Input } from '@angular/core';

import {AuthenticationService} from '../services/authentication.service';
import {UserDataService} from '../services/user-data.service';
import { Router } from '@angular/router';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && ( isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  matcher = new MyErrorStateMatcher();

  @Input() private mat: string;
  @Input() private pass: string;

  constructor(
    private authenticationService: AuthenticationService,
    private userDataService: UserDataService,
    private router: Router) { }

  ngOnInit() {
  }

  logIn(): any{
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
