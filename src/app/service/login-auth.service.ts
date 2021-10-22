import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor() { }

  public setEmail(login:any)
  {
    sessionStorage.setItem('login', JSON.stringify( login));
  }

  public getEmail()
  {
    return sessionStorage.getItem('login')
  }

  public clear() {
    sessionStorage.clear();
  }

  public isLoggedIn() {
    
    return this.getEmail() 
  }
}
