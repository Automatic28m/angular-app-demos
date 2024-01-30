import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineChartRoutingModule } from './line-chart-routing.module';
import { LineChartComponent } from './line-chart.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    LineChartComponent
  ],
  imports: [
    CommonModule,
    LineChartRoutingModule,
    NgChartsModule
  ]
})
export class LineChartModule { }
