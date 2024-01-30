import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPollComponent } from './user-poll.component';

const routes: Routes = [{ path: '', component: UserPollComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPollRoutingModule { }
