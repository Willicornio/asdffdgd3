import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectdetalleComponent }from './subjectdetalle/subjectdetalle.component';
import { SubjectgeneralComponent } from './subjectgeneral/subjectgeneral.component';



const routes: Routes = [

    {path: 'general', component: SubjectgeneralComponent},
    {path: 'detall/:nameAsig', component: SubjectdetalleComponent},
    {path: '', redirectTo: 'general', pathMatch: 'full'},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }