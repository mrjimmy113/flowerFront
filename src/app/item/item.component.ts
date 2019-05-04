import { ItemSaveComponent } from "./../item-save/item-save.component";
import { ItemService } from "./../service/item.service";
import { ModalService } from "./../service/modal.service";
import { Component, OnInit } from "@angular/core";
import { UltisService } from "../service/ultis.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  itemList;
  isSort = "";
  currentPage = 1;
  maxPage;
  searchTerm = "";
  constructor(
    private itemSer: ItemService,
    private modalSer: ModalService,
    private ultisSer: UltisService
  ) {}

  ngOnInit() {
    this.getAll();
  }
  openCreate() {
    this.modalSer.init(ItemSaveComponent, null, [() => this.getAll()]);
  }
  openEdit(item) {
    this.modalSer.init(ItemSaveComponent, item, [() => this.getAll()]);
  }
  delete(id) {
    this.itemSer.delete(id).subscribe(
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
    this.itemSer.findAll().subscribe(result => {
      this.itemList = result.list;
      this.maxPage = result.maxPage;
    });
  }
}
