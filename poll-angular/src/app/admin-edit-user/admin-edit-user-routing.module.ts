import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEditUserComponent } from './admin-edit-user.component';

const routes: Routes = [{ path: '', component: AdminEditUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEditUserRoutingModule { }
