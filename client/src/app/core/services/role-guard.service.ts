import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const destination = route.data['destination'];
    const userRole = localStorage.getItem('role');

    if (userRole === '1') {
      return true;
    }
    else {
      alert('You do not have permission to access this page.');
      this.router.navigate([destination]);
      return false;
    }
  }
}
