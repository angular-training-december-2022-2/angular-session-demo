import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  filterData: string = '';

  allStudents: Student[] = [
    {
      id: 101,
      studentName: 'Ram Mohan',
      studentTotalMarks: 358,
      studentDOB: new Date(5,5,1990),
      studentGender: 'Male'
    },
    {
      id: 102,
      studentName: 'Nithya Mahadevan',
      studentTotalMarks: 240,
      studentDOB: new Date(7,7,1992),
      studentGender: 'Female'
    },
    {
      id: 103,
      studentName: 'Rakesh Roy',
      studentTotalMarks: 427,
      studentDOB: new Date(2,2,1991),
      studentGender: 'Male'
    },
    {
      id: 104,
      studentName: 'Meena Kumari',
      studentTotalMarks: 353,
      studentDOB: new Date(7,7,1992),
      studentGender: 'Female'
    }
  ];

  constructor() { 
    console.log(JSON.stringify(this.allStudents));
  }

  ngOnInit(): void {
  }

  addStudent(){
    // let listStudent = Object.assign([], this.allStudents);
    // console.log(listStudent);
    // listStudent.push({
    //     id: 105,
    //     studentName: 'TEST',
    //     studentTotalMarks: 343,
    //     studentDOB: new Date(3,5,1992),
    //     studentGender: 'Female'
    // });
    // this.allStudents = listStudent;

    this.allStudents.push({
      id: 105,
      studentName: 'TEST',
      studentTotalMarks: 343,
      studentDOB: new Date(3,5,1992),
      studentGender: 'Female'
  });
  }

  onMouseOver(){}
}
