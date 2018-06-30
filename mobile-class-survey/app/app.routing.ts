import { LoginComponent } from "./login/login.component"
import { ProfessorComponent } from './professor/professor.component';

export const routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "professor", component: ProfessorComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ProfessorComponent
];
