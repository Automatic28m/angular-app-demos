import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { DateTimeService } from '../date-time.service';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrl: './poll-detail.component.scss'
})
export class PollDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: ApiService, private dts: DateTimeService) { }

  loading: boolean = true;
  id!: string;
  poll: any;
  barChartData: any;
  pollResult: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    // Fetch data from both APIs
    this.apiService.getPoll(this.id).subscribe(
      (pollResp) => {
        this.poll = pollResp;
        this.processData();
      },
      (pollErr) => {
        console.error(pollErr);
      }
    );

    this.apiService.getPollResult(this.id).subscribe(
      (resultResp) => {
        this.pollResult = resultResp;
        this.processData();
        console.log(this.pollResult);

      },
      (resultErr) => {
        console.error(resultErr);
      }
    );
  }

  processData(): void {
    // Initialize arrays to store chart data
    const choiceTitles: string[] = [];
    const percentages: number[] = [];

    // Check if both responses are available
    if (this.poll && this.pollResult && this.pollResult.data && Array.isArray(this.pollResult.data.choices)) {
      const resultArray = this.pollResult.data.choices;

      // Iterate through poll choices
      this.poll.choices.forEach((choice: any) => {
        // Find the corresponding result for each choice
        const result = resultArray.find((result: any) => result.choiceId === choice.id);

        // Use percentage from result if available, otherwise default to 0
        const percentage = result ? parseFloat(result.percentage) : 0;

        // Store choice title and percentage in arrays
        choiceTitles.push(choice.title);
        percentages.push(percentage);
      });
    } else {
      this.poll.choices.forEach((choice: any) => {
        choiceTitles.push(choice.title);
      });
    }

    // Update barChartData with extracted data
    this.barChartData = {
      labels: choiceTitles,
      datasets: [
        {
          data: percentages,
          label: 'Vote percent',
          backgroundColor: 'rgba(35,175,159,1)',
          fill: true,
          datalabels: {
            color: '#ffffff'
          },
        }
      ],
    };

    // Set loading to false as the processing is complete
    this.loading = false;
  }

  dateTimeConvert(dateTime: any) {
    return this.dts.dateTimeConvert(dateTime);
  }


}
