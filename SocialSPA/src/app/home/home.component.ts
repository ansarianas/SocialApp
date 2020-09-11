import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  registerMode: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  enableRegisterMode(): void {
    this.registerMode = true;
  }

  disableRegisterMode(registerMode: boolean): void {
    this.registerMode = registerMode;
  }
}
