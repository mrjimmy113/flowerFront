import { ModalService } from './../service/modal.service';
import { Component, OnInit, Input } from '@angular/core';
import { OrderDetail } from '../models/orderDetail';

@Component({
  selector: 'app-show-order-detail',
  templateUrl: './show-order-detail.component.html',
  styleUrls: ['./show-order-detail.component.css']
})
export class ShowOrderDetailComponent implements OnInit {
  @Input() inputs;
  details : Array<OrderDetail>;
  constructor(private modalSer:ModalService) { }

  ngOnInit() {
    this.details = this.inputs;
  }

  closeModal() {
    this.modalSer.destroy();
  }

}
