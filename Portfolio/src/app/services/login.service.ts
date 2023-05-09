import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'https://portfolio-angular-8c6ad.web.app/';
  token: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login({email, password}: any) {
    this.http.post(this.uri + '/authenticate', {email: email,password: password})
        .subscribe((resp: any) => {
          this.router.navigate(['sobre-mi']);
          localStorage.setItem('auth_token', resp.token);
        });
    //return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    localStorage.removeItem('token');
    //return signOut(this.auth);
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
  
}
