import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData: any = {}
  constructor( private Router:Router) { }

  @ViewChild('loginForm') loginForm: NgForm;


  ngOnInit(): void {
  }

  hide: boolean = true;

  myFunction() {
    this.hide = !this.hide;
  }

  login() {
    if(this.loginForm.valid){
      if(this.loginData.password == 'pc17@' || this.loginData.password == 'pc1617'){
        localStorage.setItem('logged','true')
        this.Router.navigate(['/borrowers-list']);
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Incorrect Password!',
        })
      }
        console.log(this.loginData)
    }
  }

}
