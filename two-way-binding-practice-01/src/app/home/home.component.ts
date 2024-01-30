import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private messageService:MessageService) {}

  @Input() msg: string | undefined;
  @Output() msgChange = new EventEmitter<string>();
  onClick() {
    this.msg = this.messageService.changeMsg("Child message");
    this.msgChange.emit(this.msg);
  }
}
