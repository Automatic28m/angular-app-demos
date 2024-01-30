// src/app/item-list.component.ts

import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
})
export class ItemListComponent {
  items: string[] = [];

  constructor(private dataService: DataService) {
    this.items = this.dataService.getItems();
  }

  addItem(): void {
    const newItem = `Item ${this.items.length + 1}`;
    this.dataService.addItem(newItem);
    this.items = this.dataService.getItems();
  }

  clearItems(): void {
    this.dataService.clearItems();
    this.items = this.dataService.getItems();
  }
}
