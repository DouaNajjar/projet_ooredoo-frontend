import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8081/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private http: HttpClient=inject(HttpClient);
  constructor() {}

  filterClients(CIN: any, firstname: any, lastname: any, governorateName:any, cityName:any, SIM:any): Observable<any[]> {
    const url = `${BASE_URL}/filter?CIN=${CIN}&firstname=${firstname}&lastname=${lastname}&governorateName=${governorateName}&cityName=${cityName}&SIM=${SIM}`;
    return this.http.get<any[]>(url);
  }
}
