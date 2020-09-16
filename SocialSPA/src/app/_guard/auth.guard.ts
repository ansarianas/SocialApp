import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private alertifyService: AlertifyService) { }
  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['']);
    this.alertifyService.error('Login Required', 1);
  }
}
