import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthService } from '../service/login-auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private login:LoginAuthService,private router:Router) { }

  ngOnInit(): void {
  }
  logOut()
  {
    this.login.clear()
    this.router.navigate([''])
  }
}
