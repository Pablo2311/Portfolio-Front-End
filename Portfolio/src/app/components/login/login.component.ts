import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formLogin:FormGroup;

  estaLogueado:any = '';
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

  ngOnInit(): void {
    this.estaLogueado = sessionStorage.getItem('token');
  }

  get Email() {
    return this.formLogin.get('email');
  }

  get Password() {
    return this.formLogin.get('password');
  }

  onSubmit() {
    console.log("login funciona");
    this.loginservice.login(this.formLogin.value);
  }
}


