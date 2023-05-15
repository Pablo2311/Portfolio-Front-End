import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'https://portfolio-cxxs.onrender.com';

  constructor(private http: HttpClient,
              private router: Router) {}

  login({email, password}: any) {
    this.http.put(this.url + '/login/autenticar/1', {email: email,password: password})
        .subscribe((resp: any) => {
          console.log(resp);
          if (resp) {
            sessionStorage.setItem('token', resp);
          }
          //this.router.navigate(['sobre-mi']);
          location.reload();
        });
  }

  logout() {
    console.log("logout funciona");
    sessionStorage.removeItem('token');
    location.reload();
  }
  
}
