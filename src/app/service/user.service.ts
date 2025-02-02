import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { User } from '../classes/user';
import { Adresse } from '../classes/adresse';
import { Client } from '../classes/client';
import { Role } from '../classes/role';

const URL="http://localhost:3000/users"; //jdbc:mysql://localhost:3306/springboot_db/api/Users
const BASE_URL = 'http://localhost:8081/users';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  private readonly http:HttpClient=inject(HttpClient)

  filterUser(username: any): Observable<any[]> {
    const url = `${BASE_URL}/filter?username=${username}`;
    return this.http.get<any[]>(url);
  }














  // getFilteredUsers(filters: any): Observable<any[]> {
  //   let params = new HttpParams();
  //   Object.keys(filters).forEach(key => {
  //     if (filters[key] !== null && filters[key] !== undefined) {
  //       params = params.append(key, filters[key]);
  //     }
  //   });
  //   return this.http.get<any[]>(URL, {params});
  // }

//MUST DELETE THIS LATTER BC THE FUNCTION ABOVE WILL REPLACE IT
  // getUsers(): Observable<User[]> {
  //   return this.http.get<any[]>(URL).pipe(
  //     map(data => data.map(user => {

  //       const adresseData = user.info.adresse;
  //       const adresse = new Adresse(adresseData.houseNumber,adresseData.street,adresseData.neighborhood,adresseData.city,adresseData.postalCode,adresseData.governorate,adresseData.country);
  
  //       const clientData = user.info;
  //       const client = new Client(clientData.id,clientData.firstname,clientData.lastname,adresse);
  
  //       const roleData = user.role;
  //       const role = new Role(roleData.id,roleData.name);        

  //       return new User(user.id, client, user.password, role);
  //     }))
  //   );
  // }
  

  // addUser(user:User):Observable<User>{  return this.http.post<User>(URL,user);}
  // deleteUser(id:Number){return this.http.delete(URL+"/"+id);}
  // updateUser(id:number, user:User):Observable<User>{return this.http.put<User>(URL+"/"+ id, user);}
  
  // getUserById(id: Number): Observable<User> {return this.http.get<User>(URL+"/"+id);}
  // getUserByFullName(firstname: string, lastname: string): Observable<User | null> {
  //   return this.getUsers().pipe(
  //     map((data: any[]) => {
  //       let users = data.map((user) => {
  //         let adresseData = user.info.adresse;
  //         let adresse = new Adresse(adresseData.houseNumber,adresseData.street,adresseData.neighborhood,adresseData.city,adresseData.postalCode,adresseData.governorate,adresseData.country);
  //         let clientData = user.info;
  //         let client = new Client(clientData.id,clientData.firstname,clientData.lastname,adresse);
  //         let roleData = user.role;
  //         let role = new Role(roleData.id,roleData.name);
  //         return new User(user.id, client, user.password, role);
  //       });
  
  //       let foundUser = users.find(
  //         (user) =>
  //           user.getInfo().getFirstname() === firstname &&
  //           user.getInfo().getLastname() === lastname);
  //       return foundUser || null;
  //     })
  //   );
  // }
  
  
  
}
