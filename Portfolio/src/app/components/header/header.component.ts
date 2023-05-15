import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  estaLogueado:any = '';
  email = '';
  password = '';
  form = (this.email, this.password);

  constructor (
    private loginservice:LoginService,
    private router:Router
    ) {}
  
  ngOnInit(): void {
    this.estaLogueado = sessionStorage.getItem('token');
  }

  onClick() {
    this.loginservice.logout();
    this.estaLogueado = sessionStorage.getItem('token');
  }
}
