import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrl: './admin-edit-user.component.scss'
})
export class AdminEditUserComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  //Variables
  id: string = "";
  user: any = "";
  updateData: any = "";
  roles: string[] = ["ROLE_USER", "ROLE_ADMIN", "ROLE_MODERATOR"];
  selectedRoles: string[] = [];


  reactiveForm: FormGroup = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    roles: new FormControl(null, [Validators.required]),
  })

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.loadData();
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
    // console.log(this.selectedRoles);  
    
    this.update();
  }

  loadData() {
    this.apiService.getUserById(this.id).subscribe(
      (resp) => {
        this.user = resp;
        // console.log(this.user);

        // console.log(this.user.roles);

        for (var i = 0; i < this.user.roles.length; i++) {
          // this.role.push(this.user.roles.name[i]);
          // console.log(this.user.roles[i].name);
          this.selectedRoles.push(this.user.roles[i].name);
        }

        this.reactiveForm.patchValue({
          id: resp.id,
          username: resp.username,
          email: resp.email,
          roles: this.selectedRoles,
        })

      }, (err) => {
        console.error(err);
      }, () => {
        // console.log(this.user.roles.length);

        // for (var i = 0; i < this.user.roles.length; i++) {
        //   // this.role.push(this.user.roles.name[i]);
        //   console.log(this.user.roles[i]);
        // }
      }
    )
  }

  isRoleSelected(role: string): boolean {
    return this.user.roles.some((userRole: { name: string; }) => userRole.name === role);
  }

  onCheckChange(role: any) {

    const index = this.selectedRoles.indexOf(role);

    if (index !== -1) {
      // Role is in the array, so remove it
      this.selectedRoles.splice(index, 1);
      // console.log("Removed " + role);
    } else {
      // Role is not in the array, so add it
      this.selectedRoles.push(role);
      // console.log("Add " + role);
    }

    this.reactiveForm.patchValue({
      roles: this.selectedRoles,
    })

    console.log(this.selectedRoles);
  }

  update() {
    this.apiService.updateUser(this.reactiveForm.value).pipe(
      concatMap(respFromUpdateUser => {
        alert(respFromUpdateUser.message);
        var updateRoles = {
          "roles": this.selectedRoles,
        }
        return this.apiService.updateUserRoles(this.id, updateRoles);
      })
    ).subscribe(
      respFromUpdateUserRoles => {
        alert(respFromUpdateUserRoles.message);
      },
      err => {
        alert(err);
      },
      () => {
        // location.reload();
      }
    );
  }
}