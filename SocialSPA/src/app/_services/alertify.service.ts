import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})

export class AlertifyService {

  constructor() { }


  success(message: string, time: number): void {
    alertify.success(message, time);
  }

  error(message: string, time: number): void {
    alertify.error(message, time);
  }

  warning(message: string, time: number): void {
    alertify.warning(message, time);
  }

}
