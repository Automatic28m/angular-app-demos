import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModTableComponent } from './mod-table.component';

const routes: Routes = [{ path: '', component: ModTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModTableRoutingModule { }
