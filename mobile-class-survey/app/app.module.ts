import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

import { ServerService } from './services/server.service';
import { UserDataService } from './services/user-data.service';
import { CourseDataService } from './services/course-data.service';
import { AuthenticationService } from './services/authentication.service';
import { QuestionnaireDataService } from './services/questionnaire-data.service';
import { TemplateDataService } from './services/template-data.service';
import { StatisticsDataService } from './services/statistics-data.service';
import { QuestionDataService } from './services/question-data.service';
import { SendAnswerService } from './services/send-answer.service';


@NgModule({
  imports: [
    HttpClientModule,
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
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
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
/*
Pass your application module to the bootstrapModule function located in main.ts
to start your app
*/
export class AppModule {}
