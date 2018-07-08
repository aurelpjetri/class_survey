import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// nativescript
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
// app
import { Config } from './common/index';
import { AppComponent } from './app.component';
import { SHARED_MODULES } from './app.common';
// component
import { LoginComponent } from './login/login.component';
import { ProfessorComponent } from './professor/professor.component';
import { StudentComponent } from './student/student.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';
import { TemplatesComponent } from './templates/templates.component';
// provider
import { ServerService } from './services/server.service';
import { UserDataService } from './services/user-data.service';
import { CourseDataService } from './services/course-data.service';
import { AuthenticationService } from './services/authentication.service';
import { QuestionnaireDataService } from './services/questionnaire-data.service';
import { TemplateDataService } from './services/template-data.service';
import { StatisticsDataService } from './services/statistics-data.service';
import { QuestionDataService } from './services/question-data.service';
import { SendAnswerService } from './services/send-answer.service';
//import { CompileQuestionnaireComponent } from './compile-questionnaire/compile-questionnaire.component'; TODO add in declarations
//import { QuestionnaireResultsComponent } from './questionnaire-results/questionnaire-results.component'; TODO same


Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_NATIVE;


@NgModule({
    bootstrap: [
      AppComponent
    ],
    providers: [
      ServerService,
      UserDataService,
      CourseDataService,
      AuthenticationService,
      QuestionnaireDataService,
      TemplateDataService,
      StatisticsDataService,
      QuestionDataService,
      SendAnswerService
    ],
    imports: [
      HttpClientModule,
      NativeScriptModule,
      NativeScriptFormsModule,
      NativeScriptHttpModule,
      ...SHARED_MODULES
    ],
    declarations: [
      AppComponent,
      LoginComponent,
      ProfessorComponent,
      StudentComponent,
      CourseDetailComponent,
      NewQuestionnaireComponent,
      TemplatesComponent
    ],
    schemas: [
      NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
