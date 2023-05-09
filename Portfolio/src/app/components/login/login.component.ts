import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin:FormGroup;

  constructor (
    private loginservice: LoginService,
    private router:Router
    ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

//  onSubmit() {
//    this.loginservice.login(this.formLogin.value)
//      .then(() => {
//        this.router.navigate(['/sobre-mi'])
//      })
//      .catch(error => console.log(error));
//  }

}


