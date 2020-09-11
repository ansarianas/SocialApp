import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  model: any = {};

  @Output() backToHome = new EventEmitter<boolean>();

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  register(): void {
    this.authService.register(this.model).subscribe(() => {
      console.log('Successfully Registered');
    }, (error) => {
      console.log('There was an error');
      console.log(error);
    });
  }

  emitToParent(): void {
    this.backToHome.emit(false);
  }

}
