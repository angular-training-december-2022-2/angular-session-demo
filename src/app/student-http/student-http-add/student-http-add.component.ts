import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentHttpService } from 'src/app/services/student-http.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-http-add',
  templateUrl: './student-http-add.component.html',
  styleUrls: ['./student-http-add.component.css']
})
export class StudentHttpAddComponent implements OnInit {

  newStudent: Student = {
    id: 0,
    studentName: '',
    studentTotalMarks: 0,
    studentDOB: new Date(),
    studentGender: ''
  }

  allMarks = [
    {id: 1, value: 100},
    {id: 2, value: 200},
    {id: 3, value: 300},
    {id: 4, value: 400},
    {id: 5, value: 500},
  ];

  allGender = [
    {id: 1, value: 'Male'},
    {id: 2, value: 'Female'},
    {id: 3, value: 'Other'}
  ]

  constructor(private studentHttpService: StudentHttpService, private router: Router) { }

  ngOnInit(): void {
  }

  sendData(templateForm: NgForm){
    console.log("form submitted...")
    console.log(templateForm);

    //lets create a student object with the form data
    this.newStudent = {
      id: 0,
      // studentName: form.value.studName,
      // studentTotalMarks: form.value.studMark,
      studentName: templateForm.value.personalData.studName,
      studentTotalMarks: templateForm.value.personalData.studMark,
      studentDOB: templateForm.value.studDOB,
      studentGender: templateForm.value.studGender
    }

    // next send the student object to service layer to add it to the backend
    this.studentHttpService.addStudent(this.newStudent).subscribe((response)=>{
      // then navigate back to student-list-http
      this.router.navigate(['student-list-http']);
    },
    (error)=>{
      console.log(error);
    });
  }

  setDefault(templateForm: NgForm){
    templateForm.setValue({
      studDOB: new Date()+'',
      studGender: 'Male',
      personalData: {
        studName: 'Default',
        studMark: 500
      }
    })
  }
}
