import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModTableRoutingModule } from './mod-table-routing.module';
import { ModTableComponent } from './mod-table.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    ModTableComponent
  ],
  imports: [
    CommonModule,
    ModTableRoutingModule,
    AgGridModule
  ]
})
export class ModTableModule { }
