import { AfterViewInit, Component, ViewChild , OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from "../Services/common.service";
import {  TransSheetService } from "../Services/trans-sheet.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-borrowers-list',
  templateUrl: './borrowers-list.component.html',
  styleUrls: ['./borrowers-list.component.scss']
})
export class BorrowersListComponent implements  OnInit {

  displayedColumns: string[] = ['slno','borrowerName', 'loanAmount','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private Service:CommonService, private SheetService:TransSheetService,private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.spinner.show()
    this.Service.borrowersList().subscribe(data=>{
      this.spinner.hide()
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    (err=>{
      console.log(err)
    }))
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  showBottomSheet(data){
    this.SheetService.Bar(data);
  }
}

