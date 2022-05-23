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
import { LoginComponent } from './components/admin-login/login.component';
import { CandidateFormComponent } from './components/candidate-form/candidate-form.component';
import { CandidateTableComponent } from './components/candidate-table/candidate-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HrForm } from './components/hr-form/hr-form.components';
import { HrService } from './services/hr.services';
import { InterviewService } from './services/interview.service';
import { PannelService } from './services/pannel.service';
import { LoginService } from './services/login.service';
import { LoggingInterceptor } from './logging.interceptor';
import { TechinterviewComponent } from './components/techinterview/techinterview.component';

import { HrLoginComponent } from './components/hr-login/hr-login.components';


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
    LoginComponent,
<<<<<<< HEAD
    TechinterviewComponent
=======
    HrLoginComponent,
    HrForm
>>>>>>> 66e704aff71ed851b97261b29b40205094122e77
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [InterviewService, PannelService, LoginService, HrService,
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }],

  bootstrap: [AppComponent]
})
export class AppModule { }
