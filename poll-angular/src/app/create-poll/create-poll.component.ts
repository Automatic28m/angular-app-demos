// import { CanDiactivateService } from './../can-diactivate.service';
import { ApiService } from './../api.service';
import { Component, DoCheck, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Poll } from '../poll';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrl: './create-poll.component.scss'
})

export class CreatePollComponent implements OnInit, DoCheck {
  pollForm!: FormGroup;
  inputChoice: string = "";
  isDisabled: boolean = true;
  isSubmit: boolean = false;

  poll: Poll = {
    title: '',
    userId: '',
    choices: [],
  }

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.pollForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      choice: new FormControl(null, [Validators.required]),
    })

    this.apiService.getUser().subscribe(
      (resp) => {
        // console.log(resp);
        this.poll.userId = resp.id;
      }, (err) => {
        console.error(err);
      }
    )
  }

  ngDoCheck(): void {
    if (this.poll.choices.length === 0) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }

  addChoice(): void {
    this.poll.choices.push(this.pollForm.value.choice);
    this.inputChoice = "";
  }

  removeChoice(index: number): void {
    this.poll.choices.splice(index, 1);
  }

  onSubmit() {
    this.poll.title = this.pollForm.value.title;
    console.log(this.poll);

    this.apiService.savePoll(this.poll).subscribe(
      (resp) => {
        console.log(resp);
        this.isSubmit = true;
        this.router.navigate(['/user']);
      }, (err) => {
        console.error(err);
      }
    )
  }

  confirm: boolean = false;

  canExit() {
    console.log(this.pollForm.value.title);
    console.log(this.poll.choices);


    // if(this.pollForm.value.title !== "" && this.pollForm.value.title !== null) {
    //   console.log(true);
    // }else {
    //   console.log(false); 
    // }

    // if(this.poll.choices.length != 0) {
    //   console.log(true);
      
    // }else {
    //   console.log(false);
      
    // }

    if(this.isSubmit){
      return true;
    }

    if ((this.pollForm.value.title !== "" && this.pollForm.value.title !== null) || this.poll.choices.length != 0 ) {
      this.confirm = confirm("You have unsave changes. Do you really want to discard theses changes?");
      if (this.confirm) {
        return true;
      } else {
        return false;
      }
      
    } else {
      return true;
    }
  }
}
