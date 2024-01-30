import { Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-life-cycle-example',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-example.component.html',
  styleUrl: './life-cycle-example.component.css'
})
export class LifeCycleExampleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() inputMessage: string | undefined;

  message: string = 'Initial message';

  // ngOnChanges hook
  ngOnChanges() {
    console.log('ngOnChanges - Input property changed');
  }

  // ngOnInit hook
  ngOnInit() {
    console.log('ngOnInit - Component initialized');
  }

  // ngDoCheck hook
  ngDoCheck() {
    console.log('ngDoCheck - Change detection triggered');
  }

  // ngAfterContentInit hook
  ngAfterContentInit() {
    console.log('ngAfterContentInit - Content initialized');
  }

  // ngAfterContentChecked hook
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked - Content checked');
  }

  // ngAfterViewInit hook
  ngAfterViewInit() {
    console.log('ngAfterViewInit - View initialized');
  }

  // ngAfterViewChecked hook
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked - View checked');
  }

  // ngOnDestroy hook
  ngOnDestroy() {
    console.log('ngOnDestroy - Component destroyed');
  }

  changeMessage() {
    this.message = 'Updated message';
  }
}
