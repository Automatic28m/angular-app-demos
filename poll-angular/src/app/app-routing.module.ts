import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardService } from './admin-guard.service';
import { CheckSignInService } from './check-sign-in.service';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [CheckSignInService] },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule), canActivate: [CheckSignInService] },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule), canActivate: [CheckSignInService] },
  { path: 'signout', loadChildren: () => import('./signout/signout.module').then(m => m.SignoutModule) },

  { path: 'createPoll', loadChildren: () => import('./create-poll/create-poll.module').then(m => m.CreatePollModule)},
  { path: 'poll/:id', loadChildren: () => import('./poll/poll.module').then(m => m.PollModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'pollDetail/:id', loadChildren: () => import('./poll-detail/poll-detail.module').then(m => m.PollDetailModule) },
  { path: 'userPoll', loadChildren: () => import('./user-poll/user-poll.module').then(m => m.UserPollModule) },
  { path: 'editUser/:id', loadChildren: () => import('./edit-user/edit-user.module').then(m => m.EditUserModule) },
  // Permission required
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AdminGuardService] },
  { path: 'adminTable', loadChildren: () => import('./admin-table/admin-table.module').then(m => m.AdminTableModule), canActivate: [AdminGuardService] },
  { path: 'userTable', loadChildren: () => import('./user-table/user-table.module').then(m => m.UserTableModule), canActivate: [AdminGuardService] },
  { path: 'modTable', loadChildren: () => import('./mod-table/mod-table.module').then(m => m.ModTableModule), canActivate: [AdminGuardService] },
  { path: 'pollTable', loadChildren: () => import('./poll-table/poll-table.module').then(m => m.PollTableModule), canActivate: [AdminGuardService] },
  { path: 'adminEditUser/:id', loadChildren: () => import('./admin-edit-user/admin-edit-user.module').then(m => m.AdminEditUserModule),canActivate: [AdminGuardService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
