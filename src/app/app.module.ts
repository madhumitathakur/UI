import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InterviewFormComponent } from './components/interview-form/interview-form.component';
import { InterviewTableComponent } from './components/interview-table/interview-table.component';
import { PanelFormComponent } from './components/panel-form/panel-form.component';
import { PanelTableComponent } from './components/panel-table/panel-table.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CandidateFormComponent } from './components/candidate-form/candidate-form.component';
import { CandidateTableComponent } from './components/candidate-table/candidate-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { InterviewService } from './services/interview.service';
<<<<<<< HEAD
import { PannelService } from './services/pannel.service';
=======
import { LoginService } from './services/login.service';
>>>>>>> 74e50769c52bb7ed0cfcb55ad1167c6f86ec929f

@NgModule({
  declarations: [
    AppComponent,
    CandidateFormComponent,
    CandidateTableComponent,
    InterviewFormComponent,
    InterviewTableComponent,
    PanelFormComponent,
    PanelTableComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
<<<<<<< HEAD
  providers: [InterviewService,PannelService],
=======
  providers: [InterviewService, LoginService, { provide: HTTP_INTERCEPTORS, useClass: LoginService, multi: true }],

>>>>>>> 74e50769c52bb7ed0cfcb55ad1167c6f86ec929f
  bootstrap: [AppComponent]
})
export class AppModule { }
