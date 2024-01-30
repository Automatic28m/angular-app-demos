import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ChartService } from '../chart.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  loading: boolean = true;

  constructor(private apiService: ApiService, private chartService: ChartService) { }

  usersAmount: number = 0;
  adminsAmount: number = 0;
  modsAmount: number = 0;
  allRoleAmount: number = 0;

  pollsAmount: number = 0;
  pollLogsAmount: number = 0;

  rolesAmountPieChartData: any;
  rolesAmountPieChartOption: any;


  ngOnInit(): void {
    this.apiService.getCountUsers().pipe(
      concatMap((userAmount) => {
        this.usersAmount = userAmount;
        return this.apiService.getCountAdmins();
      }),
      concatMap((adminAmount) => {
        this.adminsAmount = adminAmount;
        return this.apiService.getCountMods();
      }),
      concatMap((modAmount) => {
        this.modsAmount = modAmount;
        return this.apiService.getCountPolls();
      }),
      concatMap((pollAmount) => {
        this.pollsAmount = pollAmount;
        return this.apiService.getCountPollLogs();
      })
    ).subscribe(
      (pollLogAmount) => {
        this.pollLogsAmount = pollLogAmount
        // Call rolesPieChart after all observables have completed
        this.rolesAmountPieChartOption = this.chartService.rolePieChartOption(true, true, 'top', true, 'Role Chart');
        console.log("Options "+this.rolesAmountPieChartOption);
        this.rolesAmountPieChartData = this.chartService.rolesPieChartData(["User", "Admin", "Mod"], [this.usersAmount, this.adminsAmount, this.modsAmount], "Each role amount");
        console.log(this.rolesAmountPieChartData);

        this.allRoleAmount = this.usersAmount + this.adminsAmount + this.modsAmount;
      },
      (err) => {
        console.error(err);
      },
      () => {
        this.loading = false;
        // All observables have completed
      }
    );
    
  }

}
