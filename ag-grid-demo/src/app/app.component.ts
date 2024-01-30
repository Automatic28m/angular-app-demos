import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { ColDef, SizeColumnsToContentStrategy, SizeColumnsToFitGridStrategy, SizeColumnsToFitProvidedWidthStrategy } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'observable-prac-01';
  loading: boolean = true;
  data: any;
  errMsg: string = "";
  colDefs: ColDef[] = [];
  defaultColDef: ColDef<any, any> | undefined;

  constructor(private dataService: DataService) { }

  public autoSizeStrategy:
    | SizeColumnsToFitGridStrategy
    | SizeColumnsToFitProvidedWidthStrategy
    | SizeColumnsToContentStrategy = {
      type: 'fitGridWidth',
      defaultMinWidth: 100,
      columnLimits: [
        {
          colId: 'body',
          minWidth: 900,
        },
      ],
    };

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;

    this.dataService.getData().subscribe((response) => {
      this.data = response;

    }, (error) => {
      console.error('Error loading data: ', error.message);
      this.loading = false;
      this.errMsg = error.message;
    },
      () => {
        console.log("Loading success...");
        this.loading = false;

        this.colDefs = [
          { field: "userId" },
          { field: "id" },
          { field: "title" },
          { field: "body" },
        ]

        this.defaultColDef = {
          sortable: true,
          filter: true,
        };

      }
    );
  }
}
