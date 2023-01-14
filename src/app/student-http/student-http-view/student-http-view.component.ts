import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentHttpService } from 'src/app/services/student-http.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-http-view',
  templateUrl: './student-http-view.component.html',
  styleUrls: ['./student-http-view.component.css']
})
export class StudentHttpViewComponent implements OnInit {

  // viewStudent: Student = {
  //   id: 0,
  //   studentName: '',
  //   studentTotalMarks: 0,
  //   studentDOB: new Date(),
  //   studentGender: ''
  // }

  viewStudent: Student;

  constructor(private activatedRoute: ActivatedRoute, private studentHttpService: StudentHttpService) {
    this.viewStudent = {
      id: 0,
      studentName: '',
      studentTotalMarks: 0,
      studentDOB: new Date(),
      studentGender: ''
    }
   }

  ngOnInit(): void {
    // lets extract the route parameter from the route url
    // to do this we need ActivatedRoute API, so let's inject it to the constructor of this compoenent

    let studentId = this.activatedRoute.snapshot.paramMap.get('studId');

    // now lets send the student id to the service layer to fetch the student's information
    // for this we nne StudentHttpService
    if(studentId!=null){
      this.studentHttpService.fetchAStudent(+studentId).subscribe((response)=>{
        console.log(response);
        this.viewStudent = response;
      });
    }
    
  }

}
