import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEditUserRoutingModule } from './admin-edit-user-routing.module';
import { AdminEditUserComponent } from './admin-edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminEditUserComponent
  ],
  imports: [
    CommonModule,
    AdminEditUserRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminEditUserModule { }
