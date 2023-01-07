import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from './student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  filterData: string = '';

  allStudents: Student[] = []; // the data for this array will come from the StudentService class

  // studentService: StudentService; // commented out because studentService is made private in constructor injection


  // we have moved this data store to the StudentService class
  // allStudents: Student[] = [
  //   {
  //     id: 101,
  //     studentName: 'Ram Mohan',
  //     studentTotalMarks: 358,
  //     studentDOB: new Date(5,5,1990),
  //     studentGender: 'Male'
  //   },
  //   {
  //     id: 102,
  //     studentName: 'Nithya Mahadevan',
  //     studentTotalMarks: 240,
  //     studentDOB: new Date(7,7,1992),
  //     studentGender: 'Female'
  //   },
  //   {
  //     id: 103,
  //     studentName: 'Rakesh Roy',
  //     studentTotalMarks: 427,
  //     studentDOB: new Date(2,2,1991),
  //     studentGender: 'Male'
  //   },
  //   {
  //     id: 104,
  //     studentName: 'Meena Kumari',
  //     studentTotalMarks: 353,
  //     studentDOB: new Date(7,7,1992),
  //     studentGender: 'Female'
  //   }
  // ];

  constructor(private studentService: StudentService) { 
    //this.studentService = new StudentService(); // here the developer has created the StudentService object
                                                  // which should not be the case
                                                  // we have to tell the framework to create the object and give it to us
                                                  // developer will only use the object and not create it

    //this.studentService = studentService; // we can further simplify this step
                                          // by making the parameter private
  }

  ngOnInit(): void {
    this.allStudents = this.studentService.fetchAllStudents();
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
