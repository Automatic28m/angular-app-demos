import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { concatMap } from 'rxjs';
import { DateTimeService } from '../date-time.service';

@Component({
  selector: 'app-user-poll',
  templateUrl: './user-poll.component.html',
  styleUrl: './user-poll.component.scss'
})
export class UserPollComponent implements OnInit {


  constructor(private apiService: ApiService, private dateTimeService: DateTimeService) { }

  pollData: any;
  loading: boolean = true;

  ngOnInit(): void {
    this.loadData();
    console.log(this.pollData);
    
  }

  dateTimeConvert(dateTime: string[]): Date {
    return this.dateTimeService.dateTimeConvert(dateTime);
  }

  onDeletePoll(id: any) {
    let confirmClick: boolean = false;
    confirmClick = confirm("Are you sure to delete this poll " + id);
    if (confirmClick) {
      this.apiService.deletePoll(id).subscribe(
        () => {
          this.loadData();
        }, (err) => {
          alert('An error occurs ' + err);
        }, () => {
  
        }
      )
    } else {

    }
  }

  loadData() {
    this.apiService.getUser().pipe(
      concatMap((userData) => {
        return this.apiService.getPollByUserId(userData.id);
      })
    ).subscribe(
      (pollData) => {
        this.pollData = pollData;
        console.log(this.pollData);
      },
      (err) => {
        console.error(err);
      },
      () => {
        this.loading = false;
      }
    )
  }
}
