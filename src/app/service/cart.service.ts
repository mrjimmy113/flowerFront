import { OrderDetail } from './../models/orderDetail';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartName = "CART";
  constructor() { }

  addToCart(orderDetail : OrderDetail) {
    let oldItem = false;
    let details = JSON.parse(localStorage.getItem(this.cartName));
    if(!details) {
      details = new Array<OrderDetail>();
    }
    details.forEach(element => {
      if(element.product.productId == orderDetail.product.productId) {
        element.quantity +=1;
        oldItem = true;
        return;
      }
    });
    if(!oldItem) details.push(orderDetail);

    localStorage.setItem(this.cartName, JSON.stringify(details));
  }

  getCart(): Array<OrderDetail> {
    let details = JSON.parse(localStorage.getItem(this.cartName));
    if(details) {
      return details;
    }
    return null;
  }
  clearCart() {
    localStorage.removeItem(this.cartName);
  }
  updateCart(cart) {
    localStorage.setItem(this.cartName, JSON.stringify(cart));
  }
  removeFromCart(id) {
    let details = JSON.parse(localStorage.getItem(this.cartName));
    if (details) {
      for (let index = 0; index < details.length; index++) {
        if (details[index].product.productId == id) {
          details.splice(index, 1);
          break;
        }
      }
      if(details.length ==0 ) this.clearCart();
      else localStorage.setItem(this.cartName, JSON.stringify(details));
    }
  }


}
