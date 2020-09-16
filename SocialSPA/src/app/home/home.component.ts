import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  registerMode: boolean;
  termsMode: boolean;

  constructor() { }

  ngOnInit(): void { }

  enableRegisterMode(): void {
    this.registerMode = true;
  }

  disableRegisterMode(registerMode: boolean): void {
    this.registerMode = registerMode;
  }

  enableTerms(): void {
    this.termsMode = true;
  }
}
