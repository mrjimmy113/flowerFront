import { Router } from '@angular/router';
import { AuthenticationService } from './../service/authentication.service';
import { Account } from './../models/account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  account : Account;
  constructor(private authSer:AuthenticationService, private route:Router) { }

  ngOnInit() {
    this.account = new Account();
  }
  onSubmit() {
    this.authSer.login(this.account).subscribe(result => {
      if(result.tokenValue == null) {
        alert("Login failed");
      }else {
        this.authSer.setToken(result);
        window.location.pathname = "/";
      }
    });

  }

}
