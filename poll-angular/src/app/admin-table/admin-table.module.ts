import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTableRoutingModule } from './admin-table-routing.module';
import { AdminTableComponent } from './admin-table.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AdminTableComponent
  ],
  imports: [
    CommonModule,
    AdminTableRoutingModule,
    AgGridModule
  ]
})
export class AdminTableModule { }
