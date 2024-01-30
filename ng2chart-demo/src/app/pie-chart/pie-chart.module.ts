import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PieChartRoutingModule } from './pie-chart-routing.module';
import { PieChartComponent } from './pie-chart.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    PieChartComponent
  ],
  imports: [
    CommonModule,
    PieChartRoutingModule,
    NgChartsModule,
  ]
})
export class PieChartModule { }
