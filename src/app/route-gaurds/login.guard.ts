import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  //private authService: AuthService;

  constructor(private authService: AuthService, private router: Router){
    //this.authService = authService;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      // if user has logged in return true

      // if user has not logged in return false
      if(!this.authService.loggedIn){
        this.router.navigate(['login'])
      }

      return this.authService.loggedIn;
  }
  
}
