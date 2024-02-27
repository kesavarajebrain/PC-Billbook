import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { NgForm } from '@angular/forms';
import { BorrowersListComponent } from "../borrowers-list/borrowers-list.component";
import { CommonService } from "../Services/common.service";
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from "@angular/router";
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  displayedColumns: string[] = ['slno', 'dueDate', 'dueAmount'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  totalDues: number;
  afterNew: boolean = false;

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  @ViewChild('transactionForm') transactionForm: NgForm;
  borrowerData: any
  dueAmount: string;
  transactionData: any = {}
  Amount: String;
  transactionTotal: number = 0;
  balenceDue: Number;
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any, private bottomSheetRef: MatBottomSheetRef<BorrowersListComponent>, private Service: CommonService, private spinner: NgxSpinnerService,private Router:Router) {
  }

  ngOnInit(): void {
    if (this.data) {
      this.borrowerData = this.data.message;
      this.afterNew = true;
      this.getLatestTransactions()
      // this.borrowerData.transactions.forEach(x => this.transactionTotal += x.dueAmount);
      // this.totalDues = this.transactionTotal;
    }
  }

  saveTransaction() {
    this.transactionData.userId = this.borrowerData._id
    if (this.transactionForm.valid) {
      this.spinner.show()
      this.Service.saveTransaction(this.transactionData).subscribe(data => {
        this.spinner.hide()
        Swal.fire({
          icon: 'success',
          title: 'Saved successfully',
          showConfirmButton: false,
          timer: 1500
        })
        this.transactionForm.reset()
        this.afterNew = false;
        this.getLatestTransactions();
        (err => {
          console.log(err)
        })
      })
    }
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getLatestTransactions() {
    var formatData = {
      _id: this.borrowerData._id
    }
    this.Service.getLatestTransactions(formatData).subscribe(data => {
      this.dataSource = new MatTableDataSource(data[0].transactions);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      if (this.afterNew) {
        data[0].transactions.forEach(x => this.transactionTotal += x.dueAmount);
        this.totalDues = this.transactionTotal;
      }
      (err => {
        console.log(err)
      })
    })
  }

  delBorrower() {
    Swal.fire({
      title: 'Do you want delete?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        var formatData = {
          _id: this.borrowerData._id
        }
        this.Service.deleteBorrower(formatData).subscribe(data => {
          Swal.fire({
            icon: 'success',
            title: 'Deleted Successfully',
            showConfirmButton: false,
            timer: 1000
          });
          this.Router.navigate(['/borrower'])
          console.log(data);
          (err => {
            console.log(err)
          })
        })
      }
    })
  }
}
