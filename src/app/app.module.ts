import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddStudentComponent } from './add-student/add-student.component';

const myRoutes:Routes = [
  {
    path:"",
    component:StudentEntryComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    NavbarComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
