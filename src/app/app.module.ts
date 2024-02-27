import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material
import {MaterialExampleModule} from '../Material/angular.material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BorrowersListComponent } from './borrowers-list/borrowers-list.component';
import { BorrwerComponent } from './borrwer/borrwer.component';
import { NumberToWordsPipe } from "./pipes/number-to-words.pipe";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { CommonService } from "../app/Services/common.service";
import { TransactionsComponent } from './transactions/transactions.component';
//spinner
import { NgxSpinnerModule } from "ngx-spinner";
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { LoginComponent } from './login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    BorrowersListComponent,
    BorrwerComponent,
    NumberToWordsPipe,
    TransactionsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [CommonService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
