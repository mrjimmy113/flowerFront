import { ItemService } from "./../service/item.service";
import { ModalService } from "./../service/modal.service";
import { Item } from "./../models/item";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-item-save",
  templateUrl: "./item-save.component.html",
  styleUrls: ["./item-save.component.css"]
})
export class ItemSaveComponent implements OnInit {
  @Input() inputs;
  @Output() outputs = new EventEmitter<any>();
  requestStatus;
  item;
  isEdit = false;
  constructor(private modalSer: ModalService, private itemSer: ItemService) {}

  ngOnInit() {
    if (this.inputs != null) {
      this.item = this.inputs;
      this.isEdit = true;
      this.requestStatus = 0;
    } else {
      this.initNewFlower();
    }
  }

  initNewFlower() {
    this.requestStatus = 0;
    this.item = new Item();
  }

  closeModal() {
    this.outputs[0]();
    this.modalSer.destroy();
  }
  onSubmit(itemForm) {
    if (this.isEdit) {
      this.requestStatus = 1;
      this.itemSer.update(this.item).subscribe(result => {
        this.requestStatus = result;
        this.modalSer.destroy();
      });
    } else {
      if (this.requestStatus == 200) {
        this.initNewFlower();
        this.requestStatus = 0;
        itemForm.resetForm();
      } else {
        this.requestStatus = 1;
        this.itemSer
          .create(this.item)
          .subscribe(result => (this.requestStatus = result));
      }
    }
  }
}
