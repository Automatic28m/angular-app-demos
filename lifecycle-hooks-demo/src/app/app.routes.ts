import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LifeCycleExampleComponent } from './life-cycle-example/life-cycle-example.component';

export const routes: Routes = [
    {path: "home-component", component: HomeComponent},
    {path: "hook-component", component: LifeCycleExampleComponent}
];
