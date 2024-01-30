import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrl: './comp3.component.css'
})
export class Comp3Component implements OnInit {

  inputMessage!: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.dataEmitter.subscribe((value) => {
      this.inputMessage = value;
    })
  }
}
