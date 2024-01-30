import { Component, OnDestroy, OnInit } from '@angular/core';
import {  ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent implements OnInit, OnDestroy {


  // pieChartPlugins = [DatalabelsPlugin];

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

  // pieChartPlugins = [ChartDataLabels];

  pieChartOption: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      },
      title:{
        display:true,
        text: 'Pie Chart Demo'
      }
      

    }
  }


  pieChartData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [28, 59, 70, 12, 56, 90, 33],
        label: 'Sales Percent',
        // borderColor: 'rgb(0,100,255)',
        // tension: 0.1,
        fill: true
        
      }
    ]
  }
}
