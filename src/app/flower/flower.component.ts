import { FlowerUpdateComponent } from './../flower-update/flower-update.component';
import { FlowerCreateComponent } from './../flower-create/flower-create.component';
import { ModalService } from './../service/modal.service';
import { FlowerService } from './../service/flower.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {
  flowerList;
  constructor(private flowerSer:FlowerService, private modalSer: ModalService) { }

  ngOnInit() {
    this.flowerSer.findAll().subscribe(result => this.flowerList = result);
  }
  openCreate() {
    this.modalSer.init(FlowerCreateComponent, [],[]);
  }
  openEdit(flower) {
    this.modalSer.init(FlowerUpdateComponent,flower,[]);
  }

}
