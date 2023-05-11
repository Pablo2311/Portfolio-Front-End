import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private formbuilder: FormBuilder,
    private loginservice: LoginService,
    private router:Router
  )
  {
    this.formLogin = this.formbuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password: ['',[Validators.required,Validators.minLength(5)]]
      })    
  }

  get Email() {
    return this.formLogin.get('email');
  }

  get Password() {
    return this.formLogin.get('password');
  }

  onSubmit() {
    this.loginservice.login(this.formLogin.value);
    console.log(this.formLogin.value);
    sessionStorage.setItem("token","true");
    this.router.navigate(['/sobre-mi']);
    (error: any) => {console.log(error)};
  }
}


