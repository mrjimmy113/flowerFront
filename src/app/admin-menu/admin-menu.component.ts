import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
  isStuffManagementOpen = false;
  constructor() { }

  ngOnInit() {
  }

  openStuffManagement() {
    this.isStuffManagementOpen = !this.isStuffManagementOpen;
  }

}
