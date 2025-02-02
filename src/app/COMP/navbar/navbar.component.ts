import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../classes/user';
import { Role } from '../../classes/role';
import { Adresse } from '../../classes/adresse';
import { City } from '../../classes/city';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  readonly userService:UserService = inject(UserService);
  test: boolean = false; 
  user:User | string = "";
  role:Role | string = "";
  adress:Adresse | string ="";
  city:City | String ="";
  ngOnInit(): void {
    let x=JSON.parse(localStorage.getItem("user") || ""); 

    let y=x.role;
    let z=x.address;
    let a=z.city;

    this.city=new City(a.id,a.name,a.governorate);
    this.adress=new Adresse(z.id,z.houseNumber,z.street,z.city);
    this.role=new Role(y.id,y.name);
    this.user=new User(x.username,x.password,this.role,x.cin,x.firstname,x.lastname,this.adress);
    console.log("user data",this.user);

    if(this.user instanceof User){
      this.test = this.user?.getRole().getName() === "admin";
    }
  }

  isAdmin(){
    console.log("is admin?",this.test);
    return this.test;}

  disconnect(){localStorage.setItem("state","disconnect");}
}

        // private username: string,
        // private password: string,
        // private role: Role,
        // CIN: Number,
        // firstname: string,
        // lastname: string,
        // address: Adresse