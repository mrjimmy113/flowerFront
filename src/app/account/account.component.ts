import { AccService } from './../service/acc.service';
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../service/modal.service';
import { UltisService } from '../service/ultis.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  itemList;
  isSort = "";
  currentPage = 1;
  maxPage;
  searchTerm = "";
  constructor(private itemSer: AccService,
    private modalSer: ModalService,
    private ultisSer: UltisService) { }

  ngOnInit() {
    this.itemList = new Array<Account>();
    this.getAll();
  }
  sort(property) {
    if (this.isSort == property) {
      this.itemList.sort(this.ultisSer.sortByPropertyNameDSC(property));
      this.isSort = "";
    } else {
      this.itemList.sort(this.ultisSer.sortByPropertyNameASC(property));
      this.isSort = property;
    }
  }
  loadPage(pageNum) {
    this.currentPage = pageNum;
    this.itemSer
      .searchWithPage(this.searchTerm, pageNum)
      .subscribe(result => (this.itemList = result));
  }
  search() {
    this.itemSer.search(this.searchTerm).subscribe(result => {
      this.itemList = result.list;
      this.maxPage = result.maxPage;
    });
  }
  getAll() {
    this.itemSer.search("").subscribe(result => {
      this.itemList = result.list;
      this.maxPage = result.maxPage;
    });
  }
  makeRole(username, role) {
    this.itemSer.setRole(username,role).subscribe(result => {
      if(result == 200) this.getAll();
      if(result == 400 || result == 500) alert("Error");
    });
  }
  delete(id) {
    if(confirm("Do you really want to delete this")) {
      this.itemSer.delete(id).subscribe(result => {
        if(result == 200) this.getAll();
        if(result == 400 || result == 500) alert("Error");
      })
    }
  }

}
