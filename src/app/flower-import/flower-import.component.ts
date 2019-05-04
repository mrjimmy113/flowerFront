import { FlowerImportService } from './../service/flower-import.service';
import { FlowerImportNewComponent } from './../flower-import-new/flower-import-new.component';
import { ModalService } from './../service/modal.service';
import { Component, OnInit } from '@angular/core';
import { UltisService } from '../service/ultis.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-flower-import',
  templateUrl: './flower-import.component.html',
  styleUrls: ['./flower-import.component.css']
})
export class FlowerImportComponent implements OnInit {
  itemList;
  isSort = "";
  currentPage = 1;
  maxPage;
  from;
  to;
  constructor(private modalSer:ModalService, private ultisSer:UltisService, private importSer:FlowerImportService, private datePipe:DatePipe) { }

  ngOnInit() {
    let date = new Date();
    date.setHours(23,0,0,0);
    this.from = new Date(date.getTime() - (1000 * 3600 * 24 * 30));
    this.to = this.datePipe.transform(date, 'yyyy-MM-dd');
    this.from = this.datePipe.transform(this.from, 'yyyy-MM-dd');
    this.search();
  }

  newImport() {
    this.modalSer.init(FlowerImportNewComponent,null,[() => this.search()]);
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
    this.importSer
      .searchWithPage(this.getTime(this.from),this.getTime(this.to), pageNum)
      .subscribe(result => (this.itemList = result));
  }
  search() {
    this.importSer.search(this.getTime(this.from), this.getTime(this.to)).subscribe(result => {
      this.itemList = result.list;
      this.maxPage = result.maxPage;
    });
  }
  getTime(dateInString) {
    let date = new Date(dateInString);
    date.setHours(23,0,0,0);
    return date.getTime();
  }

}
