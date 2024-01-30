import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollTableRoutingModule } from './poll-table-routing.module';
import { PollTableComponent } from './poll-table.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    PollTableComponent
  ],
  imports: [
    CommonModule,
    PollTableRoutingModule,
    AgGridModule
  ]
})
export class PollTableModule { }
