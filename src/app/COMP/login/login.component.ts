import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { User } from '../../classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  userForm!: FormGroup
  user!: User
  readonly fb: FormBuilder = inject(FormBuilder)
  readonly userService: UserService = inject(UserService)
  readonly router: Router = inject(Router)

  ngOnInit(): void {
    this.userForm = this.fb.nonNullable.group({
      username: ["", [Validators.required, Validators.maxLength(40), Validators.pattern("^[a-zA-Z]+_[a-zA-Z]+$")]],//^[A-Za-z_-]+$
      password: ["", [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/)]]//^(?=.*[!@#$%^&*()_+=[\]{};:',.<>?\\/-]).*[A-Za-z_-]+.*$
    })
    localStorage.setItem("state", "disconnected");
    localStorage.setItem("user", "");
  }

  get username() { return this.userForm.get('username'); }
  get password() { return this.userForm.get('password'); }

  UsernameIsInvalidPattern() {
    return this.userForm.get('username')?.errors?.['pattern'];
  }

  PasswordIsInvalidPattern() {
    return this.userForm.get('password')?.errors?.['pattern'];
  }

  onSubmit() {
    this.router.navigate(["/dashboard"]);
    this.userService.filterUser(this.username?.value).subscribe(
      data => {
        if (data && data.length > 0) {
          const userData = data[0];  
  
          this.user = new User(
            userData.username,  
            userData.password,  
            userData.role,      
            userData.CIN,       
            userData.firstname, 
            userData.lastname,  
            userData.address    
          );
  
          console.log(this.user.getUsername());
          console.log(this.user);
  
          if (this.password?.value == this.user.getPassword() && this.username?.value == this.user.getUsername()) {
            localStorage.setItem("state", "connected");
            localStorage.setItem("user", JSON.stringify(this.user));
            this.router.navigate(["/dashboard"]);
          } 
          else {
            localStorage.setItem("state", "disconnected");
            alert("Wrong login info.");
          }
        } else {
          localStorage.setItem("state", "disconnected");
          alert("Account doesn't exist.");
        }
      },
      error => {
        console.error("Error fetching user:", error);
      }
    );
  }
  
  

  // splitFirstAndLastName(fullname: string){
  //   let [firstname, lastname] = fullname.split('_');
  //   return [firstname, lastname];
  // }

  // onSubmit(){
  //   this.router.navigate(["/dashboard"]);
  //   let [firstname,lastname]=this.splitFirstAndLastName(this.userForm.get("username")?.value);

  //   this.userService.getUserByFullName(firstname, lastname).subscribe(user => {
  //       if (user) {
  //         localStorage.setItem("state","connected");
  //         localStorage.setItem("user",JSON.stringify(user));
  //         this.router.navigate(["/dashboard"]);
  //       } 
  //       else {
  //         localStorage.setItem("state","disconnected");
  //         alert("account doesnt exist.");
  //       }
  //     } 
  //     ,error => {
  //       console.error("Error fetching user:", error);
  //     });
  // }
  }

