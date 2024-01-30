import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePollComponent } from './create-poll.component';
import { CanDeactivateService } from '../can-deactivate.service';

const routes: Routes = [{ path: '', component: CreatePollComponent, canDeactivate: [CanDeactivateService] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePollRoutingModule { }
