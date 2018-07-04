import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material';
import {AppRoutingModule } from './/app-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material'
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ProfessorComponent } from './professor/professor.component';
import { StudentComponent } from './student/student.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { TemplatesComponent } from './templates/templates.component';
import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';
import { CompileQuestionnaireComponent } from './compile-questionnaire/compile-questionnaire.component';
import { QuestionnaireResultsComponent } from './questionnaire-results/questionnaire-results.component';

import {UserDataService} from './services/user-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfessorComponent,
    StudentComponent,
    CourseDetailComponent,
    TemplatesComponent,
    NewQuestionnaireComponent,
    CompileQuestionnaireComponent,
    QuestionnaireResultsComponent
  ],
  imports: [
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
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
