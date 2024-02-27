import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from "../Services/common.service";
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-borrwer',
  templateUrl: './borrwer.component.html',
  styleUrls: ['./borrwer.component.scss']
})
export class BorrwerComponent implements OnInit {

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  constructor(private Service: CommonService, private spinner: NgxSpinnerService) { }

  @ViewChild('addBorrowerForm') addBorrowerForm: NgForm;
  loanAmount: string;
  borrowerData: any = {
    transactions: []
  }
  Amount: string;

  ngOnInit(): void {
  }

  SaveBorrower() {
    if (this.addBorrowerForm.valid) {
      this.borrowerData.createdDate = new Date();
      this.spinner.show();
      this.Service.addBorrower(this.borrowerData).subscribe((data) => {
        this.spinner.hide();
        Swal.fire({
          icon: 'success',
          title: 'Borrower saved successfully',
          showConfirmButton: false,
          timer: 1500
        })
        this.addBorrowerForm.reset(),
          (err) => {
            console.log(err);
          };
      });
    }
  }

}
