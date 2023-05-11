import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
import { Router } from '@angular/router';
//import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8080';
  token: boolean = false;

  constructor(private http: HttpClient,
              private router: Router) {}

  login({email, password}: any) {
    this.http.put(this.url + '/login/autenticar/1', {email: email,password: password})
        .subscribe((resp: any) => {
          //this.router.navigate(['sobre-mi']);
          localStorage.setItem('token', resp.token);
        });
  //  return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    localStorage.removeItem('token');
    //return signOut(this.auth);
  }

  public get logIn(): boolean {
    return this.token;
  }
  
}
