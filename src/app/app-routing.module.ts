import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';


const routes: Routes = [
  { path: 'home', component: AdminHomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule { }
