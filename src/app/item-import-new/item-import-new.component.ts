import { ItemImportService } from './../service/item-import.service';
import { ItemService } from './../service/item.service';
import { ItemImportDetail } from './../models/itemImportDetail';
import { ItemImport } from './../models/itemImport';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../models/item';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-item-import-new',
  templateUrl: './item-import-new.component.html',
  styleUrls: ['./item-import-new.component.css']
})
export class ItemImportNewComponent implements OnInit {
  @Output() outputs = new EventEmitter<any>();
  requestStatus;
  itemImport: ItemImport;
  itemList = new Array<Item>();
  searchItemList;
  detail: ItemImportDetail;
  itemName;

  constructor(
    private modalSer: ModalService,
    private itemSer: ItemService,
    private importSer:ItemImportService
  ) {}

  ngOnInit() {
    this.itemSer.getAll().subscribe(result => (this.itemList = result));
    this.initNewImport();
  }

  closeModal() {
    this.outputs[0]();
    this.modalSer.destroy();
  }

  initNewImport() {
    this.requestStatus = 0;
    this.itemImport = new ItemImport();
    this.itemImport.total = 0;
    this.itemImport.details = new Array<ItemImportDetail>();
    this.detail = new ItemImportDetail();
    this.detail.item = new Item();
  }
  findItem(event) {
    if (!(event.target.value.trim() == "")) {
      this.searchItemList = this.itemList.filter(flower =>
        flower.name.includes(event.target.value)
      );
    }
  }
  resetItem() {
    if (this.searchItemList) {
      this.detail.item = new Item();
      this.itemName = "";
    }
  }
  chooseItem(item) {
    this.itemName = item.name;
    this.detail.item = item;
    this.searchItemList = null;
  }
  onSubmit() {
    this.itemImport.details.push(this.detail);
    this.itemImport.total = Number(this.itemImport.total) + (Number(this.detail.unitPrice) * Number(this.detail.quantity));
    this.detail = new ItemImportDetail();
    this.itemName = "";
  }
  removeDetail(index) {
    this.itemImport.details.splice(index, 1);
  }
  submitOrder() {
    this.itemImport.date = new Date();
    this.importSer.create(this.itemImport).subscribe(result => console.log(result));
  }
}
