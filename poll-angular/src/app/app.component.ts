import { Component, DoCheck, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ApiService } from './api.service';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'poll-angular';
  chart = Chart.register(ChartDataLabels);
  user = {
    id: null,
    username: null,
    email: null,
  }
  loading: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log(this.user);
    this.apiService.getUser().subscribe(
      (resp) => {
        this.user = resp;
        console.log("Log from app.component.ts");
        console.log(this.user);


      }, (err) => {
        console.error(err);
        console.log("No user signed in");
        console.log(this.user);
        this.loading = false;

      }, () => {
        setTimeout(() => {
          this.loading = false;
        }, 2000)
      }
    )
  }
}
