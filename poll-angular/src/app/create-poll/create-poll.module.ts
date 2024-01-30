import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePollRoutingModule } from './create-poll-routing.module';
import { CreatePollComponent } from './create-poll.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreatePollComponent
  ],
  imports: [
    CommonModule,
    CreatePollRoutingModule,
    ReactiveFormsModule
  ],
})
export class CreatePollModule { }
