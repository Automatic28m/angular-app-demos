import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{
  constructor(private apiService:ApiService) {}

  user!: any;
  loading: boolean = true;

  ngOnInit(): void {
    this.apiService.getUser().subscribe(
      (resp) => {
        this.user = resp;
        console.log(this.user);
        
      },(err) => {
        console.error(err);
        this.loading = false;
      },() => {
        setTimeout(() => {
          this.loading = false;
        }, 2000)
      }
    )
  }

}
