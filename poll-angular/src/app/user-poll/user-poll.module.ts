import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPollRoutingModule } from './user-poll-routing.module';
import { UserPollComponent } from './user-poll.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UserPollRoutingModule
  ]
})
export class UserPollModule { }
