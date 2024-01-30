import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-btn-table-user',
  template: `
    <div class="flex gap-3">
      <a (click)="onEdit($event)" class="hover:text-accent hover:cursor-pointer">Edit</a>
      <!-- <a (click)="onDelete($event)" class="hover:text-error hover:cursor-pointer">Delete</a> -->
    </div>
  `,
  styles: ``
})
export class BtnTableUserComponent implements ICellRendererAngularComp {

  constructor(private router: Router) { }

  value: any;

  agInit(params: ICellRendererParams<any, any, any>): void {
    this.value = params.value;
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }

  onEdit(event: any) {
    this.router.navigate(['/adminEditUser', this.value]);
  }

  // onDelete(event: any) {
    
  // }

}
