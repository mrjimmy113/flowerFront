import { ProductItem } from './productItem';
import { ProductFlower } from './productFlower';
import { Event } from './event';
export class Product {
  productId:Number;
  productName:String;
  productDescription:String;
  imageUrl:String;
  imageName:String;
  price:Number;
  created:Date;
  event: Event;
  flowers: ProductFlower[];
  items: ProductItem[];
}
