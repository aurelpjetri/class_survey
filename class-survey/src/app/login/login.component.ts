import { Component, OnInit, Input } from '@angular/core';

import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() private mat: string;
  @Input() private pass: string;

  private esito: any;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  logIn(): any{

    this.authenticationService.login({
      "matriculation": this.mat,
      "password": this.pass
    }).subscribe(response => this.esito = response);

    console.log('fatto')

    //usa il servizio di login
  }

}
