import { Component } from '@angular/core';
import { SizerComponent } from './sizer/sizer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SizerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'two-way-binding-demo';
  fontSizePx = 16;
}
