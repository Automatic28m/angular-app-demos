import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { DateTimeService } from '../date-time.service';
import { concatMap, of } from 'rxjs';
import { Location } from '@angular/common';


@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.scss'
})
export class PollComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private dts: DateTimeService,
    private location: Location
  ) { }


  loading: boolean = true;
  id!: string;
  user!: any;

  poll: any;

  pollVote = {
    choice_id: "",
    poll_id: "",
    user_id: "",
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.checkCreator();
    this.checkVoted(this.id);
  }

  onSubmitVote(choice: any) {
    console.log(choice);
    this.pollVote.choice_id = choice.id;
    this.pollVote.poll_id = this.id;
    this.pollVote.user_id = this.user.id;
    console.log("Poll vote ", this.pollVote);
    this.apiService.votePoll(this.pollVote).subscribe(
      (resp) => {
        alert(resp.message);
      },(err) => {
        console.error(err);
      }, () => {

      }
    );
  }

  dateTimeConvert(dateTime: string[]): Date {
    return this.dts.dateTimeConvert(dateTime);
  }

  checkCreator(): void {
    this.apiService.getPoll(this.id).pipe(
      concatMap((poll) => {
        this.poll = poll;
        return this.apiService.getUser();
      }),
      concatMap((user) => { //Check creator of this poll
        this.user = user;

        if (this.user.id === this.poll.user.id) {
          alert("Can not vote your own poll.");
          this.location.back();
        }

        return of(null);
      })
    ).subscribe(
      () => { },
      (err) => {
        console.error(err.message);
      },
      () => {
        this.loading = false;
      }
    )
  }

  checkVoted(id: string): any {
    return this.apiService.checkVoted(id).subscribe(
      (resp) => {
        console.log(resp);
        if(resp.status == '403'){
          alert(resp.message)
          this.location.back();
        }
      },(err) => {
        console.error(err);
      },() => {

      }

    );
  }
}
