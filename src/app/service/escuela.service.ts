import {HttpClient} from '@angular/common/http'
import { Student } from '../models/student';
import { Subjects } from '../models/subjects';
import { Observable } from 'rxjs';
import { Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})


export class EscuelaService {

studentNew: any;
subjectNew: any;
students: Student[];
subjects: Subjects[];

readonly URL_API = 'http://localhost:3000/api/escuela';

constructor(private http: HttpClient){}

getSubjects():Observable<Subjects []>{
    return this.http.get<Subjects []>(this.URL_API);
}

getStudents():Observable<Student []>{
    return this.http.get<Student []>(this.URL_API + '/allstudents');
}

postStudent(student: Student){
    return this.http.post(this.URL_API + '/student', student);
}

postSubject(subject: Subjects){
    return this.http.post(this.URL_API + '/subject', subject);
}

getSubject(name: String):Observable<Subjects>{
    return this.http.get<Subjects>(this.URL_API +'/subject'+ `/${name}`);
}

getStudent(name: String):Observable<Student>{
    return this.http.get<Student>(this.URL_API +'/student'+ `/${name}`);
}

añadirStudent(_id: String, student: Student){
    return this.http.put(this.URL_API+`/${_id}` ,student);
}

  

}