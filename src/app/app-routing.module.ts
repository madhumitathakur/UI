import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';

import { LoginComponent } from './components/admin-login/login.component';
import { CandidateFormComponent } from './components/candidate-form/candidate-form.component';
import { InterviewFormComponent } from './components/interview-form/interview-form.component';
import { PanelFormComponent } from './components/panel-form/panel-form.component';
const routes: Routes = [
  { path: 'home', component: AdminHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'interview', component: InterviewFormComponent },
  { path: 'candidate', component: CandidateFormComponent },
  { path: 'panel', component: PanelFormComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule { }
