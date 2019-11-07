import { Component, OnInit } from '@angular/core';
import { Subjects } from '../models/subjects';
import {EscuelaService} from  '../service/escuela.service';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { Student } from '../models/student';

declare var M: any;

@Component({
  selector: 'app-subjectgeneral',
  templateUrl: './subjectgeneral.component.html',
  styleUrls: ['./subjectgeneral.component.css']
})
export class SubjectgeneralComponent implements OnInit {

  registerForm: FormGroup;
  registerFromalumn: FormGroup;
  listasubjects: Subjects[];
  submitted= false;
  submitted2= false;
  newAsi: Subjects;
  newStudent: Student;


  constructor(private formBuilder: FormBuilder, private escuelaservice: EscuelaService, private router: Router) { 
  }

  ngOnInit() {
    this.cargarAsignaturas();

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],

    })

    this.registerFromalumn = this.formBuilder.group({
      name: ['', Validators.required],
      adress: ['', Validators.required],
      phones: ['', Validators.required],

    })


  }

  onSubmit(añadirFrom: NgForm) {
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.addSubject(añadirFrom);
  }
  onSubmit2(registerFromalumn: NgForm) {
    this.submitted2 = true;
  
    // stop here if form is invalid
    if (this.registerFromalumn.invalid) {
        return;
    }
    this.addStudent(registerFromalumn);
  }

addStudent(añadirstudent :NgForm){

  this.newStudent = new Student();
    this.newStudent.name =  añadirstudent.value.name;
    this.newStudent.adress =  añadirstudent.value.adress;
    this.newStudent.phones =  añadirstudent.value.phones;
  this.escuelaservice.postStudent(this.newStudent)
  .subscribe((res) => {
    this.cargarAsignaturas();
    M.toast({html: 'alumno Creada'})
    this.cargarAsignaturas();
    

}), ((error) => {
  console.log(error)});    

}



  addSubject(añadirFrom: NgForm){

    this.newAsi = new Subjects();
    this.newAsi.name = añadirFrom.value.name;
    this.escuelaservice.postSubject(this.newAsi)
    .subscribe((res) => {
      this.cargarAsignaturas();
      M.toast({html: 'Asignatura Creada'})
      this.cargarAsignaturas();
      
  
  }), ((error) => {
    console.log(error)});    

    this.cargarAsignaturas();
  }

cargarAsignaturas(){

this.escuelaservice.getSubjects()
.subscribe(res => 
  {
    this.listasubjects = res;
  })

 }

entrarasignatura(name: String){



  this.router.navigateByUrl("detall/" + `${name}`);

}

get f() { return this.registerForm.controls; }

}
