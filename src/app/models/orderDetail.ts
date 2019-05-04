import { Product } from './product';
import { Order } from './order';
export class OrderDetail {
  orderdetailsId:Number;
  order:Order;
  product:Product;
  quantity:Number;
  unit:Number;
  total:Number;
}
