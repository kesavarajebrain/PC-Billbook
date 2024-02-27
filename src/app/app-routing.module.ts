import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BorrowersListComponent } from "./borrowers-list/borrowers-list.component";
import { BorrwerComponent } from "./borrwer/borrwer.component";
import { LoginComponent } from "./login/login.component";
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'borrowers-list',
    component: BorrowersListComponent

  },
  {
    path: 'borrower',
    component: BorrwerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
