import { LoginComponent } from "./login/login.component"
import { ProfessorComponent } from './professor/professor.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

export const routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "professor", component: ProfessorComponent },
    { path: "course", component: CourseDetailComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ProfessorComponent,
  CourseDetailComponent
];
