import { Component, OnInit, Input } from '@angular/core';

import {AuthenticationService} from '../authentication.service';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


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

  private response: any;

  constructor(private authenticationService: AuthenticationService) { }

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
      console.log('LOGIN successful')
    }
    else{
      alert('matriculation number or password invalid');
      this.mat='';
      this.pass='';
    }
  }

  

}
