import { Component, inject, OnInit } from '@angular/core';
import { DisplayTransactionsComponent } from '../display-transactions/display-transactions.component';
import { FilterTransactionsComponent } from '../filter-transactions/filter-transactions.component';
import { DisplayUsersComponent } from '../display-users/display-users.component';
import { FilterUsersComponent } from '../filter-users/filter-users.component';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent{


}
