import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'barChart', loadChildren: () => import('./bar-chart/bar-chart.module').then(m => m.BarChartModule) },
  { path: 'lineChart', loadChildren: () => import('./line-chart/line-chart.module').then(m => m.LineChartModule) },
  { path: 'pieChart', loadChildren: () => import('./pie-chart/pie-chart.module').then(m => m.PieChartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
