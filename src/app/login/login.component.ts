import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(myForm: NgForm){
   console.log(myForm);
    // here we will fetch all the users by using UserService
    this.userService.fetchAllUsers().subscribe((response)=>{
      console.log(response);
      let filterUser = response.filter((eachUser)=>{
        return (eachUser.uName==myForm.value.uName && eachUser.uPassword==myForm.value.uPassword)
      });

      if(filterUser.length!=0){
        // validation success
        //take the token from the response and store it in sessionStorage
        // handling the token in sessionStorage will be done in AuthService
        this.authService.storeToken(filterUser[0].token);
        this.authService.setLogin();
        // if validation is success, navigate to student-list-http
        this.router.navigate(['student-list-http']);
      }else{
        //  validation failed
        // else display errorMessage
        this.errorMessage = "Invalid Username/Password!";
      }
    })

    // then validates the username and password

    

   
}
}
