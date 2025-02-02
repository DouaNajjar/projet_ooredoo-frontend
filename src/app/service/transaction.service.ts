import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from '../classes/status';
import { PaymentType } from '../classes/payment-type';

const BASE_URL = 'http://localhost:8081/transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }
  readonly http: HttpClient = inject(HttpClient)
  filterTransactions(
    cin_client: string | null,
    id_offer: string | null,
    status: string | null,
    paymentType: PaymentType | null, 
    client_type: ClientTypes | null, 
    kit_code: string | null,
    shop_name: string | null, 
    // transactionDateDebut: Date | null, 
    // transactionDateFin: Date | null,
    clientFirstname: string | null, 
    clientLastname: string | null, 
    userName: string | null
  ): Observable<any[]> {

    let params = new HttpParams();

    if (cin_client) params = params.set("clientCin", cin_client);
    if (id_offer) params = params.set("id_offer", id_offer);
    if (status) params = params.set("status", status);
    if (paymentType) params = params.set("paymentType", paymentType);
    if (client_type) params = params.set("clientType", client_type);
    if (kit_code) params = params.set("kit_code", kit_code);
    if (shop_name) params = params.set("shopCdDist", shop_name);
    if (clientFirstname) params = params.set("clientFirstname", clientFirstname);
    if (clientLastname) params = params.set("clientLastname", clientLastname);
    if (userName) params = params.set("userName", userName);
    // if (transactionDateDebut) params = params.set("transactionDateDebut", transactionDateDebut.toISOString());
    // if (transactionDateFin) params = params.set("transactionDateFin", transactionDateFin.toISOString());
    console.log("THIS IS THE QUORY DATA", `${BASE_URL}/filter`, { params });
    return this.http.get<any[]>(`${BASE_URL}/filter`, { params });
  }
}
