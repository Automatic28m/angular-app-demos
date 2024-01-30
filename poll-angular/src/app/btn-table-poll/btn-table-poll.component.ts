import { PollTableComponent } from './../poll-table/poll-table.component';
import { ApiService } from './../api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-btn-table-poll',
  template: `
      <div class="flex gap-3">
        <a (click)="onDetail($event)" class="hover:text-accent hover:cursor-pointer">Detail</a>
        <a (click)="onDelete($event)" class="hover:text-error hover:cursor-pointer">Delete</a>
      </div>
  `,
  styles: ``
})
export class BtnTablePollComponent implements ICellRendererAngularComp {

  constructor(private router: Router, private apiService: ApiService, private component: PollTableComponent) { }

  value: any;

  agInit(params: ICellRendererParams<any, any, any>): void {
    this.value = params.value;
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }

  onDetail(event: any) {
    this.router.navigate(['/pollDetail', this.value]);
    // const rowData = this.params.data;

    // this.params.context.router.navigate(['/pollDetail', rowData.id]);
  }

  onDelete(event: any) {
    let confirmClick: boolean = false;
    confirmClick = confirm("Are you sure to delete this poll " + this.value);
    if (confirmClick) {
      this.apiService.deletePoll(this.value).subscribe(
        () => {
          this.component.loadData();
        }, (err) => {
          alert('An error occurs ' + err);
        }, () => {
  
        }
      )
    } else {

    }
  }


}
