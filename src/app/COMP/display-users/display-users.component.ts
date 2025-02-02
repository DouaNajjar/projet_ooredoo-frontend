import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../classes/user';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-display-users',
  standalone: true,
  imports: [NgClass],
  templateUrl: './display-users.component.html',
  styleUrl: './display-users.component.css'
})
export class DisplayUsersComponent implements OnInit{
  // readonly UserService:UserService=inject(UserService);
  // readonly router:Router=inject(Router);
  // users!:User[]

  ngOnInit(): void {
  //   this.UserService.getUsers().subscribe(data=>{
  //     this.users=data;
  //     console.log(this.users);
  //   })
   }

  // onDelete(id:number){
  //   this.UserService.deleteUser(id);
  //   console.log("deleted");
  //   this.router.navigate(["/dashboard/users"]);
  // }

  // sendToEdit(id:number){}
}
