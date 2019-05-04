import { OrderDetail } from './orderDetail';
export class Order {
  orderId:Number;
  orderNo:Number;
  orderDate:Date;
  shippedDate:Date;
  shipAddress:String;
  paymentType:String;
  orderStatus:String;
  detail: OrderDetail[];
}
