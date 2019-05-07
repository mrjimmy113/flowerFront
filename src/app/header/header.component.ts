import { Router } from '@angular/router';
import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name = null;
  constructor(private authSer:AuthenticationService, private route:Router) { }

  ngOnInit() {
    let token = this.authSer.getToken();
    if(token != null) {
      this.name = token.name.toString();
    }
  }
  logout() {
    this.authSer.logout();
    window.location.pathname = "/";
  }

}
