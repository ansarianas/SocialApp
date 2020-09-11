import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appName = 'Social';
  imagePath = 'https://angular.io/assets/images/logos/angular/angular.png';
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  login(): void {
    this.authService.login(this.model).subscribe(() => {
      console.log('Successfully Logged In');
    }, (error) => {
      console.log('Unsuccessfull Login');
      console.log(error);
    });
  }

  logout(): void {
    console.log('Successfully Logged Out');
    localStorage.removeItem('token');
  }
}
