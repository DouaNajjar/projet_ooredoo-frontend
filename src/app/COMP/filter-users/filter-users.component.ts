import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { DisplayUsersComponent } from '../display-users/display-users.component';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-filter-users',
  standalone: true,
  imports: [DisplayUsersComponent],
  templateUrl: './filter-users.component.html',
  styleUrl: './filter-users.component.css'
})
export class FilterUsersComponent implements OnInit{

  // governorateService:=inject();
  governorate!:any[];

  ngOnInit(): void {

  }

  
}
