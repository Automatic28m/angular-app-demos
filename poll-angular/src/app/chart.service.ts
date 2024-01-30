import { Injectable } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  rolePieChartOption(responsive: boolean, legendDisplay: boolean, legendPosition: any, titleDisplay: boolean, titleText: string) {
    const pieChartOption: ChartOptions = {
      responsive: responsive,
      plugins: {
        legend: {
          display: legendDisplay,
          position: legendPosition,
        },
        datalabels: {
          formatter: (value: any, ctx: any) => {
            if (ctx.chart.data.labels) {
              const label = ctx.chart.data.labels[ctx.dataIndex];
              return `${label}: ${value}`;
            }
            return value;
          },
        },
        title: {
          display: titleDisplay,
          text: titleText,
        }
      }
    }

    return pieChartOption
  }

  rolesPieChartData(labels: string[], data: number[], label: string): any {
    const chartData = {
      labels: labels,
      datasets: [
        {
          data: data,
          label: label,
          fill: true,
        }
      ]
    };

    return chartData;
  }
}
