import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {ProfessorComponent} from './professor/professor.component';

const routes: Routes = [
  // check cookies for login
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // --------
  { path: 'login', component: LoginComponent },
  { path: 'professor', component: ProfessorComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
