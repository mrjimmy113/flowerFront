import { CartService } from './../service/cart.service';
import { Product } from './../models/product';
import { OrderDetail } from './../models/orderDetail';
import { ModalService } from './../service/modal.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() inputs;
  product : Product;
  constructor(private modalSer:ModalService, private cartSer:CartService) { }

  ngOnInit() {
    this.product = this.inputs;
  }
  closeModal() {
    this.modalSer.destroy();
  }
  addToCart(){
    let orderDetail = new OrderDetail();
    orderDetail.quantity = 1;
    orderDetail.unit = this.product.price;
    orderDetail.product = this.product;
    orderDetail.total = Number(orderDetail.unit) * Number(orderDetail.quantity);
    this.cartSer.addToCart(orderDetail);
  }

}
