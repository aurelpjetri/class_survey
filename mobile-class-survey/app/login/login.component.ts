import { Component } from "@angular/core";

import { User } from "../user"

@Component({
  selector: "app-login",
  templateUrl: "./login/login.component.html",
  styleUrls: ["./login/login.component.css"]
})
export class LoginComponent {
  matriculation: string;
  password: string;

  submit(): any {
    alert(this.matriculation)
  }
}
