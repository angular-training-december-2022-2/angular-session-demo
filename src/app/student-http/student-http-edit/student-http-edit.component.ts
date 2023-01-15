import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentHttpService } from 'src/app/services/student-http.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-http-edit',
  templateUrl: './student-http-edit.component.html',
  styleUrls: ['./student-http-edit.component.css']
})
export class StudentHttpEditComponent implements OnInit {

  editStudent: Student = {
    id: 0,
    studentName: '',
    studentTotalMarks: 0,
    studentDOB: new Date(),
    studentGender: ''
  }

  // create reactive form here
  reactiveForm: FormGroup = new FormGroup({
    rsId: new FormControl(null),
    personalData: new FormGroup({
      rsName: new FormControl(null),
      rsMark: new FormControl(null),
    }),
    rsDOB: new FormControl(null),
    rsGender: new FormControl(null),
  });


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

  constructor(private activatedRoute: ActivatedRoute, 
              private studentHttpService: StudentHttpService,
              private router: Router) { }

  ngOnInit(): void {

      // extract the route parameter
      let studId = this.activatedRoute.snapshot.paramMap.get('sId');

      if(studId!= null){
        // fetch the student record with the id -  studId
        this.studentHttpService.fetchAStudent(+studId).subscribe((response)=>{
          console.log(response);
          // now this response has to be set to the reactiveForm
          this.reactiveForm.setValue({
            rsId: response.id,
            personalData : {
              rsName : response.studentName,
              rsMark: response.studentTotalMarks,
            },
            rsDOB: response.studentDOB,
            rsGender: response.studentGender
          })
        })
      }
  }


  updateData(){
    console.log(this.reactiveForm);

    // create editStudent object and assign the reactive form data to it
    this.editStudent = {
      id: this.reactiveForm.value.rsId,
      studentName: this.reactiveForm.value.personalData.rsName,
      studentTotalMarks: this.reactiveForm.value.personalData.rsMark,
      studentGender: this.reactiveForm.value.rsGender,
      studentDOB: this.reactiveForm.value.rsDOB

    }

    // send this to the back end to be update in the DB
    this.studentHttpService.updateStudent(this.editStudent).subscribe((response)=>{
      // navigate to student-list-http
      this.router.navigate(['student-list-http']);
    })
    
  }
}
