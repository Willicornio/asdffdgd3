import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { SubjectdetalleComponent } from './subjectdetalle/subjectdetalle.component';
import { SubjectgeneralComponent } from './subjectgeneral/subjectgeneral.component';
import {HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SubjectdetalleComponent,
    SubjectgeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],

  
  bootstrap: [AppComponent]
})
export class AppModule { }
