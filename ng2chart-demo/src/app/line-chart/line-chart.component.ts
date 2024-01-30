import { Component } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {

  lineChartPlugins = [ChartDataLabels];

  lineChartData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [28, 59, 70, 12, 56, 90, 33],
        label: 'Sales Percent',
        backgroundColor: 'rgba(0,100,255,0.3)',
        borderColor: 'rgba(0,100,255,0.3)',
        // tension: 0.1,
        fill: true
      }
    ]
  }
}
