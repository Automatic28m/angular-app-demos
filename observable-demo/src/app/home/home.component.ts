import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  myObservable = new Observable((observer) => {
    console.log('Observable starts');
    setTimeout(() => { observer.next('1') }, 1000)
    setTimeout(() => { observer.next('2') }, 2000)
    setTimeout(() => { observer.next('3') }, 3000)
    setTimeout(() => { observer.error(new Error('Something went wrong!')) }, 3000)
    setTimeout(() => { observer.next('4') }, 4000) 
    setTimeout(() => { observer.next('5') }, 5000)
    setTimeout(() => { observer.complete() }, 6000) //Complete
    setTimeout(() => { observer.next('6') }, 7000) //No effect
    //If a complete signal is emitted, there will no process after.

    //Conclusion***
    //next method = emit value
    //error method = emit error
    //complete method = emit complete signal from observable
  })

  ngOnInit() {
    this.myObservable.subscribe((val) => {
      console.log(val); //Do this callback function whenever "next" method's called.
    }, (error) => { //Also, but "error" method's called.
      alert(error.message);
    }, () => { //Also, but "complete" method's called. 
      alert('Observale has completed emitting all values.');
    });
  }
}
