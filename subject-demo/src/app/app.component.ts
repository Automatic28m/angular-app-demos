import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DataService]
})
export class AppComponent {
  title = 'subject-demo';
  showComp3:boolean = false;
  btnMsg:string = "Add a new Subscriber";
  btnStatus:boolean = true;
  
  constructor(private dataService: DataService) { }

  onClick() {
    this.showComp3 = !this.showComp3;
    console.log(this.showComp3);
    this.btnStatus = !this.btnStatus;
    if (this.btnStatus == false) {
      this.btnMsg = "Remove this Subscriber";
    } else {
      this.btnMsg = "Add a new Subscriber";
    }
  }
}
