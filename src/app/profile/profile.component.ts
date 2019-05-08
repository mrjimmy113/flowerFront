import { Account } from './../models/account';
import { AuthenticationService } from './../service/authentication.service';
import { AccService } from './../service/acc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  role ="";
  currentTab = 1;
  oldPass;
  newPass;
  confirmPassword;
  account = new Account();
  constructor(private accSer:AccService, private authSer:AuthenticationService) { }

  ngOnInit() {
    this.accSer.getProfile().subscribe(result => {
      this.account = result;
      console.log(result);
    })
    this.role = this.authSer.getToken().role.toString();
  }
  changeTab(num) {
    this.currentTab = num;
  }
  changeInfor() {
    this.accSer.updateProfile(this.account).subscribe(result => {
      this.account = result;
      if(this.account) alert("Successfully change Information")
    })
  }
  changePassword() {
    let fd = new FormData;
    fd.append("oldP", this.oldPass);
    fd.append("newP", this.newPass);
    this.accSer.changePass(fd).subscribe(result => {
      if(result == 200) {
        alert("Successfully change password");
        location.reload();
      }
      if(result == 202) alert("Old Password is Wrong");
      if(result == 400) alert("Error");
    })
  }

}
