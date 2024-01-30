import { Routes } from '@angular/router';

//import components
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PassParamComponent } from './pass-param/pass-param.component';

export const routes: Routes = [
    { path: '', redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
    { path: 'first-component', title:'first-component-with-title' ,component: FirstComponent },
    { path: 'pass-param-component/:id', component: PassParamComponent},
    { path: 'second-component', component: SecondComponent },
    { path: '**', component: PageNotFoundComponent },
];
