import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { AgGridService } from '../ag-grid.service';
import { Router } from '@angular/router';
import { BtnTableUserComponent } from '../btn-table-user/btn-table-user.component';
import { GridReadyEvent } from 'ag-grid-community';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent {

  usersData: any;

  constructor(private apiService: ApiService, private agGridService: AgGridService, private router: Router) { }

  //Ag Grid
  colDefs = this.agGridService.colDefs;
  defaultColDef = this.agGridService.defaultColDef;
  autoSizeStrategy = this.agGridService.autoSizeStrategy;

  field: any[] = [
    {
      field: "id",
    },
    { field: "username" },
    { field: "email" },
    {
      headerName: "Action",
      field: "id",
      cellRenderer: BtnTableUserComponent,
    }
  ]
  roleName: string = 'ROLE_USER';

  ngOnInit(): void {

    this.apiService.getUsersByRole(this.roleName).subscribe(
      (resp) => {
        this.usersData = resp.data;
        console.log(this.usersData);
      }, (err) => {
        console.error(err);
      }, () => {

      }
    )

    this.colDefs = this.agGridService.getAgGrid(this.field, true, true)[0];
    this.defaultColDef = this.agGridService.getAgGrid(this.field, true, true)[1];
    this.autoSizeStrategy = this.agGridService.getAgGrid(this.field, true, true)[2];
  }

  onGridReady(param: any) {
    this.agGridService.onGridReady(param);
  }

  onFilterTextBoxChanged() {
    this.agGridService.onFilterTextBoxChanged();
  }
}
