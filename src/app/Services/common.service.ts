import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

import { environment } from "../../environments/environment.prod";
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private BaseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  addBorrower(data) {
    return this.http.post<any>(this.BaseUrl + "addBorrower", data, {
    });
  }

  borrowersList() {
    return this.http.get<any>(this.BaseUrl + "borrowersList", {
    });
  }

  saveTransaction(data) {
    return this.http.post<any>(this.BaseUrl + "saveTransaction",data, {
    });
  }

  getLatestTransactions(data){
    return this.http.post<any>(this.BaseUrl + "getLatestTransactions",data, {
    });
  }

  deleteBorrower(data){
    return this.http.post<any>(this.BaseUrl + "deleteBorrower",data, {
    });
  }
}
