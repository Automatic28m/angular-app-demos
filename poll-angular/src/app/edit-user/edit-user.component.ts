import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  //Variables
  id: string = "";
  user: any = "";
  updateData: any = "";
  role: [] = [];


  reactiveForm: FormGroup = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  })

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.loadData();
  }

  onSubmit() {
    console.log(this.reactiveForm.value);

    this.apiService.updateUser(this.reactiveForm.value).subscribe(
      (resp) => {
        alert(resp.message);
        // if (resp.status == "200") {
        //   location.reload();
        // }
        location.reload();
        // this.loadData();
      }, (err) => {
        alert(err);
      }, () => {
      }
    )
  }


  loadData() {
    this.apiService.getUserById(this.id).subscribe(
      (resp) => {
        this.user = resp;
        console.log(this.user);
        this.reactiveForm.patchValue({
          id: resp.id,
          username: resp.username,
          email: resp.email,
        })
      }, (err) => {
        console.error(err);
      }, () => {
        // console.log(this.user.roles.length);

        for (var i = 0; i < this.user.roles.length; i++) {
          // this.role.push(this.user.roles.name[i]);
          console.log(this.user.roles[i]);
        }
      }
    )
  }
}
