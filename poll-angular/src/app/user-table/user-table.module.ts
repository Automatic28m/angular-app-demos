import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTableRoutingModule } from './user-table-routing.module';
import { UserTableComponent } from './user-table.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    UserTableComponent
  ],
  imports: [
    CommonModule,
    UserTableRoutingModule,
    AgGridModule
  ]
})
export class UserTableModule { }
