import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// app
import { Config } from './common/index';
import { AppComponent } from './app.component';
import { SHARED_MODULES } from './app.common';
// material
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material'
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// component
import { LoginComponent } from './login/login.component';
import { ProfessorComponent } from './professor/professor.component';
import { StudentComponent } from './student/student.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';
import { TemplatesComponent } from './templates/templates.component';
import { MapsComponent } from './maps/maps.component'
import { CompileQuestionnaireComponent } from './compile-questionnaire/compile-questionnaire.component';
import { QuestionnaireResultsComponent } from './questionnaire-results/questionnaire-results.component';

Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;


@NgModule({
    declarations: [
      AppComponent,
      LoginComponent,
      ProfessorComponent,
      StudentComponent,
      CourseDetailComponent,
      NewQuestionnaireComponent,
      TemplatesComponent,
      MapsComponent,
      CompileQuestionnaireComponent,
      QuestionnaireResultsComponent
    ],
    imports: [
      BrowserAnimationsModule,
      HttpClientModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      MatCardModule,
      MatIconModule,
      MatToolbarModule,
      AppRoutingModule,
      MatInputModule,
      MatButtonModule,
      BrowserAnimationsModule,
      MatDividerModule,
      MatListModule,
      MatSelectModule,
      MatCheckboxModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatTabsModule,
      MatSlideToggleModule,
      ...SHARED_MODULES
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
