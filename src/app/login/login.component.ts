import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAuthService } from '../service/login-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginForm: FormGroup | any;
  constructor(private fb:FormBuilder,private route:Router,private login:LoginAuthService) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  onSubmit()
  {
    console.log("Login Data", this.loginForm.value);
    this.login.setEmail(this.loginForm.value);
    this.route.navigate(['/home']);
  }

}
