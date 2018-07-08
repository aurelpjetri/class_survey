import { Routes } from '@angular/router';
/**
 * Define app module routes here, e.g., to lazily load a module
 * (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
 */
import { LoginComponent } from './login/login.component';
import { ProfessorComponent } from './professor/professor.component';
import { StudentComponent } from './student/student.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';
import { TemplatesComponent } from './templates/templates.component';
import { CompileQuestionnaireComponent } from './compile-questionnaire/compile-questionnaire.component';
import { QuestionnaireResultsComponent } from './questionnaire-results/questionnaire-results.component';

export const AppRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'professor', component: ProfessorComponent },
  { path: 'student', component: StudentComponent },
  { path: 'course', component: CourseDetailComponent },
  { path: 'templates', component: TemplatesComponent },
  { path: 'create', component: NewQuestionnaireComponent },
  { path: 'compile', component: CompileQuestionnaireComponent },
  { path: 'questionnaire/statistic', component: QuestionnaireResultsComponent }
];
