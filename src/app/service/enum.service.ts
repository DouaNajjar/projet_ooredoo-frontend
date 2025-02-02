import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL_Client_type="http://localhost:8081/Client_type"
const URL_payment_type="http://localhost:8081/Payment_type"
const URL_status="http://localhost:8081/status"
const URL_role="http://localhost:8081/roles"
const URL_shop="http://localhost:8081/shops"

@Injectable({
  providedIn: 'root'
})
export class EnumService {

  private http: HttpClient=inject(HttpClient);
  constructor() {}

  getClienType(): Observable<any[]> {
    return this.http.get<any[]>(URL_Client_type);
  }

  getPaymentType(): Observable<any[]>{
    return this.http.get<any[]>(URL_payment_type);
  }

  getStatus(): Observable<any[]>{
    return this.http.get<any[]>(URL_status);
  }

  getRole(): Observable<any[]>{
    return this.http.get<any[]>(URL_role);
  }

  getShops(): Observable<any[]>{
    return this.http.get<any[]>(URL_shop);
  }
}
