import { FlowerUpdateComponent } from './../flower-update/flower-update.component';
import { FlowerCreateComponent } from './../flower-create/flower-create.component';
import { ModalService } from './../service/modal.service';
import { FlowerService } from './../service/flower.service';
import { Component, OnInit } from '@angular/core';
import { UltisService } from '../service/ultis.service';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {
  itemList;
  isSort = "";
  currentPage = 1;
  maxPage;
  searchTerm = "";
  constructor(
    private flowerSer: FlowerService,
    private modalSer: ModalService,
    private ultisSer: UltisService
  ) {}

  ngOnInit() {
    this.getAll();
  }
  openCreate() {
    this.modalSer.init(FlowerCreateComponent, null, [() => this.getAll()]);
  }
  openEdit(item) {
    this.modalSer.init(FlowerUpdateComponent, item, [() => this.getAll()]);
  }
  delete(id) {
    this.flowerSer.delete(id).subscribe(
      result => {
        if(result == 200) this.getAll();
        if((result == 400) || (result == 500)) alert("Error");
      }
    );
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
    this.flowerSer
      .searchWithPage(this.searchTerm, pageNum)
      .subscribe(result => (this.itemList = result));
  }
  search() {
    this.flowerSer.search(this.searchTerm).subscribe(result => {
      this.itemList = result.list;
      this.maxPage = result.maxPage;
    });
  }
  getAll() {
    this.flowerSer.findAll().subscribe(result => {
      this.itemList = result.list;
      this.maxPage = result.maxPage;
    });
  }

}
