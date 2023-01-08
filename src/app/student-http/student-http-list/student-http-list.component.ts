import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { StudentHttpService } from 'src/app/services/student-http.service';

import { Student } from '../student';


@Component({
  selector: 'app-student-http-list',
  templateUrl: './student-http-list.component.html',
  styleUrls: ['./student-http-list.component.css']
})
export class StudentHttpListComponent implements OnInit {

  filterData: string = '';

  allStudents: Student[] = []; // the data for this array will come from the StudentService class

 
  constructor(private studentHttpService: StudentHttpService) {}


  loadData(){
    this.studentHttpService.fetchAllStudents().subscribe({
      next: (response)=> { this.allStudents = response; },
      error: (err)=> {console.log(err.message);}
     })
  }

  ngOnInit(): void {
    this.loadData();
  }

  addStudent(){
    
  }

  deleteStudent(studId: number){
    // use confirm to confirm deletion
    this.studentHttpService.deleteStudent(studId).subscribe({
      next: (response)=>{
        this.loadData(); // get a fresh list of student data from back end after deleting
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }
}
