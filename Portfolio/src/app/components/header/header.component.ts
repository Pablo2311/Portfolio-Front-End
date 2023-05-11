import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  email = '';
  password = '';
  form = (this.email, this.password);

  constructor (
    private loginservice:LoginService,
    private router:Router
    ) {}
  
  onClick() {
    this.loginservice.logout()
  //    .then(() => {
  //      this.router.navigate(['/sobre-mi'])
  //    })
  //    .catch(error => console.log(error));
  }
}
