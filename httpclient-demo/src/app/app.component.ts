import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'httpclient-demo';
  public results: any;
  public errMessage: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`https://jsonplaceholder.typicode.com/us`).subscribe(
      data => {
        console.log(data);
        this.results = data;
      },
      err => {
        this.errMessage = err.message;
        console.log('An error occurs : ',err.message);
      })
  }
}