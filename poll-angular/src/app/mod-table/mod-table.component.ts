import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ColDef } from 'ag-grid-community';
import { AgGridService } from '../ag-grid.service';

@Component({
  selector: 'app-mod-table',
  templateUrl: './mod-table.component.html',
  styleUrl: './mod-table.component.scss'
})
export class ModTableComponent {
  
  usersData: any;

  constructor(private apiService: ApiService, private agGridService: AgGridService) { }

  //Ag Grid
  colDefs = this.agGridService.colDefs;
  defaultColDef = this.agGridService.defaultColDef;
  autoSizeStrategy = this.agGridService.autoSizeStrategy;

  field: any[] = [
    { field: "id" },
    { field: "username" },
    { field: "email" },
  ]
  roleName: string = 'ROLE_MODERATOR';

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
