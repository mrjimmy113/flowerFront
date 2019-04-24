import { ItemImportNewComponent } from './../item-import-new/item-import-new.component';
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-item-import',
  templateUrl: './item-import.component.html',
  styleUrls: ['./item-import.component.css']
})
export class ItemImportComponent implements OnInit {

  constructor(private modalSer:ModalService) { }

  ngOnInit() {
  }

  newImport() {
    this.modalSer.init(ItemImportNewComponent,null,null);
  }

}
