import { Component } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent {

  barChartData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [28, 59, 70, 12, 56, 90, 33],
        label: 'Sales Percent',
        backgroundColor: 'rgba(0,100,255,0.3)',
        borderColor: 'rgb(0,100,255)',
        fill: true,
        datalabels:{
          color: '#000000'
        },
      }
    ],
  }
}
