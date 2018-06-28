import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import{MatToolbarModule} from '@angular/material';
import {AppRoutingModule } from './/app-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ProfessorComponent } from './professor/professor.component';
import { StudentComponent } from './student/student.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { TemplatesComponent } from './templates/templates.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfessorComponent,
    StudentComponent,
    CourseDetailComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
