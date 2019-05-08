import { element } from 'protractor';
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
  isSoldable = true;
  constructor(private modalSer:ModalService, private cartSer:CartService) { }

  ngOnInit() {
    this.product = this.inputs;
    if(this.product.price == 0) this.isSoldable = false;
    this.product.flowers.forEach(element => {
      if(element.quantity > element.flower.quantity) {
        this.isSoldable = false;
      }
    });
    this.product.items.forEach(element => {
      if(element.quantity > element.item.stock) {
        this.isSoldable = false;
      }
    })
  }
  closeModal() {
    this.modalSer.destroy();
  }
  addToCart(){
    let orderDetail = new OrderDetail();
    orderDetail.quantity = 1;
    orderDetail.unit = this.product.price;
    orderDetail.product = this.product;
    this.cartSer.addToCart(orderDetail);
    alert(`Product: ${this.product.productName} has been added to Cart`);
  }

}
