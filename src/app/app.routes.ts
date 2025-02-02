import { Routes } from '@angular/router';
import { LoginComponent } from './COMP/login/login.component';
import { DashboardComponent } from './COMP/dashboard/dashboard.component';
import { ErrorComponent } from './COMP/error/error.component';
import { authGuard } from './auth.guard';
import { ManageTransactionsComponent } from './COMP/manage-transactions/manage-transactions.component';
import { ManageUsersComponent } from './COMP/manage-users/manage-users.component';

export const routes: Routes = [
    {path:"login",title:"login",component:LoginComponent},
    {path:"dashboard",title:"dashboard",component:DashboardComponent,canActivate:[authGuard],
        children: [
            {path:"transactions",title:"transactions",component:ManageTransactionsComponent,canActivate:[authGuard]},
            {path:"users",title:"users",component:ManageUsersComponent,canActivate:[authGuard]},
            {path:"",redirectTo:"transactions",pathMatch:'full'},
            {path:"**",title:"error",component:ErrorComponent}
        ],
    },
    {path:"",redirectTo:"login",pathMatch:'full'},
    {path:"**",title:"error",component:ErrorComponent}
];
