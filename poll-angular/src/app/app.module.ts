import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { AgGridModule } from 'ag-grid-angular';
import { BtnTablePollComponent } from './btn-table-poll/btn-table-poll.component';
import { AdminGuardService } from './admin-guard.service';
import { BtnTableUserComponent } from './btn-table-user/btn-table-user.component';
import { CheckSignInService } from './check-sign-in.service';
import { RouterModule } from '@angular/router';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { CanDeactivateService } from './can-deactivate.service';

@NgModule({
  declarations: [
    AppComponent,
    BtnTablePollComponent,
    BtnTableUserComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    AgGridModule,
  ],
  providers: [DatePipe, AdminGuardService, CheckSignInService, CanDeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
