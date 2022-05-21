import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { PannelService } from './services/pannel.service';

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
  providers: [InterviewService,PannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
