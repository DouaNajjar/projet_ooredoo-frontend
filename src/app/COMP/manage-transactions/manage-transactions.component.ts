import { Component, inject } from '@angular/core';
import { DisplayTransactionsComponent } from '../display-transactions/display-transactions.component';
import { FilterTransactionsComponent } from '../filter-transactions/filter-transactions.component';
import { DatePipe, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../../service/transaction.service';
import { EnumService } from '../../service/enum.service';
import { ClientService } from '../../service/client.service';
import { Transaction } from '../../classes/transaction';
import { CommonModule } from '@angular/common';
import { Client } from '../../classes/client';
import { User } from '../../classes/user';
import { Offer } from '../../classes/offer';
import { Shop } from '../../classes/shop';

@Component({
  selector: 'app-manage-transactions',
  standalone: true,
  imports: [JsonPipe,FormsModule,DatePipe,CommonModule],
  templateUrl: './manage-transactions.component.html',
  styleUrl: './manage-transactions.component.css'
})
export class ManageTransactionsComponent {
  public TransactionService:TransactionService=inject(TransactionService);
  public enumService:EnumService=inject(EnumService);
  public clientService:ClientService=inject(ClientService);

  stat:any[]=[];payment:any[]=[];typeclient:any[]=[];roles:any[]=[];shops:any[]=[];//params for filter

  transactions: Transaction[] = [];//filtered transactions

//param of filter transaction
cin_client:any=null; 
id_offer:any=null;
status:any=null;
paymentType:any=null;
client_type:any=null;
kit_code:any=null;
shop_name:any=null;
transactionDateDebut:Date=new Date();
transactionDateFin:Date=new Date();
clientFirstname:any=null;
clientLastname:any=null;
userName:any=null;

  constructor() {}
  ngOnInit(): void {
    this.filter();
    this.enumService.getStatus().subscribe(data => {this.stat = data;});
    this.enumService.getClienType().subscribe(data => {this.typeclient = data;});
    this.enumService.getPaymentType().subscribe(data => {this.payment = data;});
    this.enumService.getRole().subscribe(data => {this.roles = data;});
    this.enumService.getShops().subscribe(data => {this.shops = data;});    
  }

  filter(): void { 
    // Affichage des paramètres de filtre dans la console pour vérifier
    console.log("Filter Parameters:", {
      cin_client: this.cin_client,
      id_offer: this.id_offer,
      status: this.status,
      paymentType: this.paymentType,
      client_type: this.client_type,
      kit_code: this.kit_code,
      shop_name: this.shop_name,
      clientFirstname: this.clientFirstname,
      clientLastname: this.clientLastname,
      userName: this.userName
    });
  
    // Appel au service pour récupérer les transactions filtrées
    this.TransactionService.filterTransactions(
      this.cin_client, 
      this.id_offer,
      this.status,
      this.paymentType,
      this.client_type,
      this.kit_code,
      this.shop_name,
      this.clientFirstname,
      this.clientLastname,
      this.userName,
    ).subscribe(data => {
      console.log("API Response Data:", data); // Vérification de la réponse ici
      
      // Vérification des données retournées
      if (data && Array.isArray(data) && data.length > 0) {
        this.transactions = data.map((item: any) => {
          return new Transaction(
            item.id,
            item.client as Client,  
            item.user as User,    
            item.offer as Offer,
            item.dateTransaction,
            item.status,
            item.payment_type,
            item.clientType,
            item.kit_code,
            item.shop as Shop
          );
        });
      } else {
        console.warn("No transactions returned from the API.");
      }
    }, error => {
      console.error('Error fetching transactions', error);
    });
  }
  
  resetFilter(): void{
    //reset transactions
    this.cin_client=null; 
    this.id_offer=null;
    this.status=null;
    this.paymentType=null;
    this.client_type=null;
    this.kit_code=null;
    this.shop_name=null;
    this.transactionDateDebut=new Date();
    this.transactionDateFin=new Date();
    this.clientFirstname=null;
    this.clientLastname=null;
    this.userName=null;
    this.filter();
    console.log("reseted the filter");
  }

}
