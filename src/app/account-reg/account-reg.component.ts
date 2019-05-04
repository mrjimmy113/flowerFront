import { AccService } from './../service/acc.service';
import { Account } from './../models/acc';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-reg',
  templateUrl: './account-reg.component.html',
  styleUrls: ['./account-reg.component.css']
})
export class AccountRegComponent implements OnInit {
  account = new Account();
  confirmPassword;
  isAccountExisted = true;
  haveNotChecked = true;
  constructor(private service:AccService, private route:Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.account.role ="USER";
    this.service.create(this.account).subscribe(result => {
      if(result == 200) {
        alert("Account Created");
        this.route.navigateByUrl("/");
      }
    });
  }
  checkUsername(username) {
    this.haveNotChecked = false;
    this.service.checkUsername(this.account.username).subscribe(result => {
      this.isAccountExisted = result;
    })

  }
  checkUsernameAgain() {
      if(!this.haveNotChecked) {
        this.haveNotChecked = true;
      }
  }

}
