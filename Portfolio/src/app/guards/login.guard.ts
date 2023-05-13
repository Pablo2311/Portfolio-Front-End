import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

 constructor (private router: Router) {}

  redirect(flag:any) {
    if (flag) {
      this.router.navigate(['/', 'sobre-mi']);
      return false;
    } else {
      return true;
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const estaLogueado = sessionStorage.getItem('token');
    this.redirect(estaLogueado);
    return this.redirect(estaLogueado);
  }
  
}
