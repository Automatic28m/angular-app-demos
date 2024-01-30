import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DatePipe } from '@angular/common';
import { DateTimeService } from '../date-time.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService, private dts: DateTimeService) { }

  polls: any;
  loading: boolean = true;

  ngOnInit(): void {
    this.polls = this.apiService.getPolls().subscribe(
      (resp) => {
        this.polls = resp;

      }, (error) => {
        console.error(error);
      }, () => {
        setTimeout(() => {
          this.loading = false;
        }, 2000)
      }
    )
  }


  dateTimeConvert(dateTime: string[]): Date {
    return this.dts.dateTimeConvert(dateTime);
  }
}
