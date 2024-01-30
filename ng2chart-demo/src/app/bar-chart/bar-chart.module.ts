import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarChartRoutingModule } from './bar-chart-routing.module';
import { BarChartComponent } from './bar-chart.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BarChartComponent
  ],
  imports: [
    CommonModule,
    BarChartRoutingModule,
    NgChartsModule
  ]
})
export class BarChartModule { }
