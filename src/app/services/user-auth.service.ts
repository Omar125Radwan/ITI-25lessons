import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isloggedSubjrct: BehaviorSubject<boolean>;
  constructor() {
    this.isloggedSubjrct = new BehaviorSubject<boolean>(this.isUserLogged);
  }

  login(userName: string, password: string) {
    // Call Login API, and Access Token
    let userToken = '123456789';
    localStorage.setItem("token", userToken);
    this.isloggedSubjrct.next(true);
  }
  logout() {
    localStorage.removeItem("token");
    this.isloggedSubjrct.next(false);
  }

  get isUserLogged(): boolean {
    return (localStorage.getItem("token")) ? true: false;
  }

  getloggedStatus(): Observable<boolean> {
    return this.isloggedSubjrct.asObservable();
  }

}
