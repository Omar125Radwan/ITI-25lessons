import { Router } from '@angular/router';
import { UserAuthService } from './../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUserLogged: boolean;
  constructor(private authService: UserAuthService,
              private router: Router) {
    this.isUserLogged = this.authService.isUserLogged;
  }

  ngOnInit(): void {
    // this.isUserLogged = this.authService.isUserLogged;
    this.authService.getloggedStatus().subscribe(status => {
      this.isUserLogged = status;
    });
  }

  logout() {
    this.authService.logout();
    this.isUserLogged = this.authService.isUserLogged;
    this.router.navigate(['/Home']);
  }

}
