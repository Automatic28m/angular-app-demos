import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'observable-prac-01';
  loading: boolean = true;
  data: any;
  errMsg: string = "";

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;

    this.dataService.getData().subscribe((response) => {
      this.data = response;
    }, (error) => {
      console.error('Error loading data: ', error.message);
      this.loading = false;
      this.errMsg = error.message;
    },
      () => {
        console.log("Loading success...");
        this.loading = false;
      }
    );
  }
}
