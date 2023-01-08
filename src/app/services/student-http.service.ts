import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student-http/student';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {

  baseUrl: string = "http://localhost:3000/students";

  constructor(private httpClient: HttpClient) { }

  // here i should consume the endpoint provided by json server

  fetchAllStudents():Observable<Student[]>{
    // here we have to place a get request to the base url
    // for this we need HttpClient
    // so HttpClient has to be injected in the constructor
    // make sure to include HttpClientModule in app.module.ts
    return this.httpClient.get<Student[]>(this.baseUrl);

  }

  fetchAStudent(studId: number): Observable<Student>{
    return this.httpClient.get<Student>(this.baseUrl+'/'+studId);
  }

  addStudent(newStudent: Student): Observable<Student>{
    return this.httpClient.post<Student>(this.baseUrl, newStudent);
  }

  updateStudent(updateStudent: Student): Observable<Student>{
    return this.httpClient.put<Student>(this.baseUrl+'/'+updateStudent.id, updateStudent);
  }

  deleteStudent(studentId: number): Observable<void>{
    return this.httpClient.delete<void>(this.baseUrl+'/'+studentId); // http://localhost:3000/students/104
  }
}
