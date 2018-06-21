import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() private mat: string;
  @Input() private pass: string;


  constructor() { }

  ngOnInit() {
  }

  logIn(): any{
    return{
      "matriculation": this.mat,
      "password": this.pass
      };
    //usa il servizio di login
  }

}
