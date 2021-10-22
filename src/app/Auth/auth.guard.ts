import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginAuthService } from '../service/login-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private login:LoginAuthService,private router:Router){}
  
  canActivate():boolean
  {
    if(this.login.isLoggedIn())
    {
      return true
    }else{
      this.router.navigate(['']);
      return false;
    }
  
  }
  
}
