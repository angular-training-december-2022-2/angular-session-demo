
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentHttpService } from 'src/app/services/student-http.service';

import { Student } from '../student';


@Component({
  selector: 'app-student-http-list',
  templateUrl: './student-http-list.component.html',
  styleUrls: ['./student-http-list.component.css']
})
export class StudentHttpListComponent implements OnInit {

  errorMessage: string = '';
  filterData: string = '';

  allStudents: Student[] = []; // the data for this array will come from the StudentService class

 
  constructor(private studentHttpService: StudentHttpService, private router: Router) {}


  loadData(){
    this.studentHttpService.fetchAllStudents().subscribe({
      next: (response)=> { 
        this.errorMessage = '';
        this.allStudents = response; 
      },
      error: (err)=> {
        console.log(err.message);
        this.errorMessage = "Some Internal Issue. Please try later!!"
      }
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

  viewStudent(sid: number){
    // here we should programtically navigate to student-view-http route path
    // in order to programatically route , we need the Router API
    // so lets inject the Router api in the constructor of this component
    // and the use it to navigate
    this.router.navigate(['student-view-http', sid]);

  }
}
