import { Router } from '@angular/router';
import { UserAuthService } from './../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  isUserLogged: boolean = false;
  constructor(private authService: UserAuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged;
  }

  login() {
    this.authService.login('UserName', 'Password');
    this.isUserLogged = this.authService.isUserLogged;
    this.router.navigate(['/Home']);
  }

  logout() {
    this.authService.logout();
    this.isUserLogged = this.authService.isUserLogged;
  }
}
