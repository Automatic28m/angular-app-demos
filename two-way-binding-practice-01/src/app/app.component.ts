import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'two-way-binding-practice-01';
  msg = "Parent message";

  onClick() {
    this.msg = "Parent message";
  }
}
