import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  model: any = {};

  @Output() backToHome = new EventEmitter<boolean>();

  constructor(private authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit(): void { }

  register(registerForm: NgForm): void {
    this.authService.register(this.model).subscribe(() => {
      this.alertifyService.success('Registration Successfully', 1);
      registerForm.reset();
    }, (error) => this.alertifyService.error(error, 1));
  }

  emitToParent(): void {
    this.backToHome.emit(false);
  }
}
