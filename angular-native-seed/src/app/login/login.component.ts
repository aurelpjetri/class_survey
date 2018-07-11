import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { UserDataService } from '../services/user-data.service';
import { ServerService } from '../services/server.service';

@Component({
  moduleId: module.id,
  selector: 'seed-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private error: boolean = false;

  private ip: string = '127.0.0.1';
  private port: string = '3000';

  @Input() private mat: string;
  @Input() private pass: string;

  constructor(
    private serverService: ServerService,
    private authenticationService: AuthenticationService,
    private userDataService: UserDataService,
    private router: Router) { }

  ngOnInit() { }

  login(): any {
    this.serverService.setURL(this.ip, this.port)
    var aut = {
      "matriculation": this.mat,
      "password": this.pass
    };
    this.authenticationService.login(aut).subscribe((response) =>  this.checkResponse(response))
  }

  checkResponse(response: any) :any{
    if(this.authenticationService.getErrorStatus()==undefined){
      this.error = false;
      this.userDataService.setData(response.user);

      if (response.role == 'professor'){
        this.router.navigateByUrl('/professor')
      }
      if (response.role == 'student') {
        this.router.navigateByUrl('/student')
      }
    }
    else{
      alert('Matriculation number or password invalid; error status: ' + response.status);
      this.error = true;
      this.authenticationService.resetErrorStatus();
      this.mat='';
      this.pass='';
    }
  }

}
