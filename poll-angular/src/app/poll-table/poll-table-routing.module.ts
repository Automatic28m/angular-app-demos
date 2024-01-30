import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollTableComponent } from './poll-table.component';

const routes: Routes = [{ path: '', component: PollTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PollTableRoutingModule { }
