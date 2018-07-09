import { LoginComponent } from "./login/login.component"
import { ProfessorComponent } from './professor/professor.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { TemplatesComponent } from './templates/templates.component';
import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';
import { StudentComponent } from './student/student.component';
import { CompileQuestionnaireComponent } from "./compile-questionnaire/compile-questionnaire.component";
import { QuestionnaireResultsComponent } from "./questionnaire-results/questionnaire-results.component";


export const routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "professor", component: ProfessorComponent },
    { path: "course", component: CourseDetailComponent },
    { path: 'templates', component: TemplatesComponent },
    { path: "create", component: NewQuestionnaireComponent},
    { path: "student", component: StudentComponent},
    { path: "compile", component: CompileQuestionnaireComponent},
    { path: "questionnaire/statistic", component: QuestionnaireResultsComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ProfessorComponent,
  CourseDetailComponent,
  TemplatesComponent,
  NewQuestionnaireComponent,
  StudentComponent,
  CompileQuestionnaireComponent,
  QuestionnaireResultsComponent
];
