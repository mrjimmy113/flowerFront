import { ItemSaveComponent } from './../item-save/item-save.component';
import { ItemService } from './../service/item.service';
import { ModalService } from './../service/modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemList;
  constructor(private itemSer:ItemService, private modalSer: ModalService) { }

  ngOnInit() {
    this.itemSer.findAll().subscribe(result => {this.itemList = result});
  }
  openCreate() {
    this.modalSer.init(ItemSaveComponent, null,null);
  }
  openEdit(item) {
    this.modalSer.init(ItemSaveComponent,item,[]);
  }
  delete(id) {
    this.itemSer.delete(id).subscribe();
  }
}
