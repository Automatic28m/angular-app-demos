import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { AgGridService } from '../ag-grid.service';
import { Router } from '@angular/router';
import { BtnTablePollComponent } from '../btn-table-poll/btn-table-poll.component';
import { DateTimeService } from '../date-time.service';
import { GridApi, RowStyle } from 'ag-grid-community';

@Component({
  selector: 'app-poll-table',
  templateUrl: './poll-table.component.html',
  styleUrl: './poll-table.component.scss'
})
export class PollTableComponent {

  pollData: any;

  constructor(private apiService: ApiService, private agGridService: AgGridService, private router: Router, private dts: DateTimeService) { }

  //Ag Grid
  colDefs = this.agGridService.colDefs;
  defaultColDef = this.agGridService.defaultColDef;
  autoSizeStrategy = this.agGridService.autoSizeStrategy;
  gridApi!: GridApi;

  field: any[] = [
    {
      field: "id",
    },
    { field: "title" },
    {
      field: "dateTimeCreated",
      valueFormatter: (params: { value: string[]; }) => this.dts.dateTimeConvert(params.value),
    },
    {
      headerName: 'Action',
      field: "id",
      cellRenderer: BtnTablePollComponent,
    }
  ]
  
  loadData() {
    this.apiService.getPolls().subscribe(
      (resp) => {
        this.pollData = resp;
        console.log(this.pollData);
      }, (err) => {
        console.error(err);
      }, () => {

      }
    )
  }

  ngOnInit(): void {

    this.loadData();

    this.colDefs = this.agGridService.getAgGrid(this.field, true, true)[0];
    this.defaultColDef = this.agGridService.getAgGrid(this.field, true, true)[1];
    this.autoSizeStrategy = this.agGridService.getAgGrid(this.field, true, true)[2];
  }

  onGridReady(params: any) {
    this.agGridService.onGridReady(params);
  }

  onFilterTextBoxChanged() {
    this.agGridService.onFilterTextBoxChanged();
  }
}
