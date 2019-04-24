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
  constructor(private authSer:AuthenticationService) { }

  ngOnInit() {
    this.account = new Account();
  }
  onSubmit() {
    this.authSer.login(this.account).subscribe(result => {
      this.authSer.setToken(result.tokenValue);
    });

  }

}
