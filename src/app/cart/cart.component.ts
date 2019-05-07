import { Router } from '@angular/router';
import { Order } from './../models/order';
import { OrderService } from './../service/order.service';
import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  detailList;
  total = 0;
  order : Order;
  constructor(private cartSer:CartService, private orderSer:OrderService,private route:Router) { }

  ngOnInit() {
    this.order = new Order();
    let tmp = this.cartSer.getCart();
    if(tmp) {
      this.detailList = tmp;
      this.detailList.forEach(element => {
        this.total += element.total;
      });
    }
  }
  down(detail) {
    detail.quantity -= 1;
    this.updateView();
  }
  up(detail) {
    detail.quantity += 1;
    this.updateView();
  }
  removeItem(detail) {
    this.cartSer.removeFromCart(detail);
    this.detailList = this.cartSer.getCart();
    this.updateView();
  }
  updateView() {
    this.total = 0;
    this.cartSer.updateCart(this.detailList);
    this.detailList = this.cartSer.getCart();
    this.detailList.forEach(element => {
      this.total += element.total;
    });
  }

  checkOut() {
    let order = this.order;
    let details = this.cartSer.getCart();
    order.detail = details;
    this.orderSer.create(order).subscribe(result => {
      if(result == 200) {
        alert("Sucessfully placed an order");
        this.route.navigateByUrl("/");
        this.cartSer.clearCart();
      }
      if(result == 202) {
        alert("Sorry, some of the product you purchase is out of stock");
      }

    });
  }
}
