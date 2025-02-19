import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FooterComponent } from '../footer/footer.component';
import { JsonServiceService } from '../../../core/services/json-service.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatSelectModule,
    MatFormFieldModule,FooterComponent,CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit , OnDestroy{
  users:any = [];
  selectedUser:any;
  usersSubscription!:Subscription;

  constructor(
    private jsonService: JsonServiceService
  ){

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.usersSubscription = this.jsonService.fetchUsersJson().subscribe({
      next:(res:any)=> {
        this.users = res;
        this.selectedUser = res[0];
      }
    })
  }

  selectUser(user: any) {
    this.selectedUser = user;
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
}
