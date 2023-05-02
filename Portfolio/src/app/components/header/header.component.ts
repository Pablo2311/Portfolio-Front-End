import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor (
    private loginservice:LoginService,
    private router:Router
    ) {}

  
  
  onClick() {
    this.loginservice.logout()
      .then(() => {
        this.router.navigate(['/sobre-mi'])
      })
      .catch(error => console.log(error));
  }
}
