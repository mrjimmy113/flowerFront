import { FlowerImportNewComponent } from './../flower-import-new/flower-import-new.component';
import { ModalService } from './../service/modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flower-import',
  templateUrl: './flower-import.component.html',
  styleUrls: ['./flower-import.component.css']
})
export class FlowerImportComponent implements OnInit {

  constructor(private modalSer:ModalService) { }

  ngOnInit() {
  }

  newImport() {
    this.modalSer.init(FlowerImportNewComponent,null,null);
  }

}
