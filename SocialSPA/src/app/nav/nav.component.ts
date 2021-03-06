import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  imagePath = 'https://angular.io/assets/images/logos/angular/angular.png';
  model: any = {};
  username: string;

  constructor(private authService: AuthService, private alertifyService: AlertifyService, private router: Router) { }

  ngOnInit(): void { }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  login(): void {
    this.authService.login(this.model).subscribe(() => {
      this.alertifyService.success('Logged In Successfully', 1);
    }, (error) => this.alertifyService.error(error, 1),
      () => this.router.navigate(['connections']));
  }

  logout(): void {
    if (localStorage.getItem('token')) {
      this.alertifyService.success('Logged Out Successfully', 1);
      localStorage.removeItem('token');
      this.router.navigate(['']);
      this.model.username = '';
      this.model.password = '';
    }
  }
}
