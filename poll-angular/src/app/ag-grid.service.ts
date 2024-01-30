import { Injectable, booleanAttribute } from '@angular/core';
import { ColDef, GridApi, RowStyle, SizeColumnsToContentStrategy, SizeColumnsToFitGridStrategy, SizeColumnsToFitProvidedWidthStrategy } from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class AgGridService {

  colDefs: ColDef[] = [];
  defaultColDef!: ColDef<any, any>;
  autoSizeStrategy!: SizeColumnsToFitGridStrategy | SizeColumnsToFitProvidedWidthStrategy | SizeColumnsToContentStrategy;
  gridApi!: GridApi;

  constructor() { }

  getAgGrid(fields: any[], sortable: boolean, filter: boolean): any[] {
    this.colDefs = fields;

    this.defaultColDef = {
      sortable: sortable,
      filter: filter,
    };

    this.autoSizeStrategy = {
      type: 'fitGridWidth',
    }

    return [this.colDefs, this.defaultColDef, this.autoSizeStrategy];
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    // other initialization code
  }

  onFilterTextBoxChanged() {
    this.gridApi.setGridOption(
      'quickFilterText',
      (document.getElementById('filter-text-box') as HTMLInputElement).value
    );
  }
}
