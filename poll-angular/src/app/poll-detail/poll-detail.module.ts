import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollDetailRoutingModule } from './poll-detail-routing.module';
import { PollDetailComponent } from './poll-detail.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    PollDetailComponent
  ],
  imports: [
    CommonModule,
    PollDetailRoutingModule,
    NgChartsModule
  ]
})
export class PollDetailModule { }
