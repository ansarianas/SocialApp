import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {
  data: any;
  values: any;
  count: number;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.getValues();
  }

  getValues(): void {
    const apiUrl = 'http://localhost:5000/api/value/';
    this.http.get(apiUrl).subscribe(response => {
      this.data = response;
      this.values = this.data.data;
      this.count = this.data.count;
    }, this.error, this.completed);
  }

  error(err): void {
    console.log('Error Occured While Making An API Call ' + err.message);
  }

  completed(): void {
    console.log('Http Call Completed');
  }

}
