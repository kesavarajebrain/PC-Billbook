import { Injectable } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { TransactionsComponent } from "../transactions/transactions.component";
@Injectable({
  providedIn: 'root'
})
export class TransSheetService {

  constructor(private bottomSheet: MatBottomSheet) { }

  public Bar(message: string) {
      this.bottomSheet.open(TransactionsComponent, {
        data: { message: message }
      });
  }
}
