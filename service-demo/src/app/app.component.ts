import { Component } from '@angular/core';
import { ItemListModule } from './item-list/item-list.module';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ItemListModule,
  ],
})

export class AppComponent {
  title = 'service-demo';
}
