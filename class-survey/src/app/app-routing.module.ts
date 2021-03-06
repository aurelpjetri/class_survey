import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {ProfessorComponent} from './professor/professor.component';
import {StudentComponent} from './student/student.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';
import {TemplatesComponent} from './templates/templates.component';
import {NewQuestionnaireComponent} from './new-questionnaire/new-questionnaire.component';
import {CompileQuestionnaireComponent} from "./compile-questionnaire/compile-questionnaire.component";
import {QuestionnaireResultsComponent} from "./questionnaire-results/questionnaire-results.component"
import{MapsComponent} from "./maps/maps.component";

const routes: Routes = [
  // check cookies for login
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // --------
  { path: 'login', component: LoginComponent },
  { path: 'professor', component: ProfessorComponent},
  { path: 'student', component: StudentComponent},
  { path: 'course', component: CourseDetailComponent},
  { path: 'templates', component: TemplatesComponent},
  { path: 'create', component: NewQuestionnaireComponent},
  { path: 'compile', component: CompileQuestionnaireComponent},
  { path: 'questionnaire/statistic', component: QuestionnaireResultsComponent},
  {path: 'map', component: MapsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppRoutingModule { }
