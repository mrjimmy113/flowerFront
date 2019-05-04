import { ProductService } from './../service/product.service';
import { ProductItem } from './../models/productItem';
import { ProductFlower } from './../models/productFlower';
import { Product } from './../models/product';
import { ItemService } from "./../service/item.service";
import { FlowerService } from "./../service/flower.service";
import { EventService } from "./../service/event.service";
import { ModalService } from "./../service/modal.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"]
})
export class ProductCreateComponent implements OnInit {
  @Output() outputs = new EventEmitter<any>();
  public Editor = ClassicEditor;
  requestStatus;
  maxFileSize = 500000;
  isOverSize = false;
  dump;
  tmp;
  previewImage;
  product :Product;
  flowers : ProductFlower[];
  items : ProductItem[];
  flowerList
  itemList;
  eventList;
  searchFlowerList;
  searchItemList;
  flower: ProductFlower;
  item: ProductItem;
  flowerNameDisplay;
  itemNameDisplay;
  totalFee;
  flowerQuantity;
  constructor(
    private modalSer: ModalService,
    private eventSer: EventService,
    private flowerSer: FlowerService,
    private itemSer: ItemService,
    private productSer:ProductService
  ) {}

  ngOnInit() {
    this.initNewProduct();
    this.eventSer.findAll().subscribe(result => {this.eventList = result; console.log(result)});
    this.flowerSer.getAll().subscribe(result => {this.flowerList = result});
    this.itemSer.getAll().subscribe(result => {this.itemList = result});
  }

  initNewProduct() {
    this.requestStatus = 0;
    this.totalFee = 0;
    this.product = new Product();
    this.flowers = new Array();
    this.items = new Array();
    this.flower = new ProductFlower();
    this.item = new ProductItem();
  }

  closeModal() {
    this.outputs[0]();
    this.modalSer.destroy();
  }
  onFileChange(event) {
    if (!(event.target.value.length == 0)) {
      if (event.target.files[0].size > this.maxFileSize) this.isOverSize = true;
      else {
        this.tmp = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(this.tmp);
        reader.onload = () => (this.previewImage = reader.result);
      }
    } else {
      this.previewImage = null;
    }
  }
  //#region Item Selection
  findItem(event) {
    if (!(event.target.value.trim() == "")) {
      this.searchItemList = this.itemList.filter(item =>
        item.name.includes(event.target.value)
      );
    }
  }
  resetItem() {
    if (this.searchItemList) {
      this.itemNameDisplay = "";
    }
  }
  chooseItem(item) {
    this.itemNameDisplay = item.name;
    this.item.item = item;
    this.searchItemList = null;
  }
  addItem() {
    this.items.push(this.item);
    this.item = new ProductItem();
  }
  //#endregion

  //#region  Flower Selection
  findFlower(event) {
    if (!(event.target.value.trim() == "")) {
      this.searchFlowerList = this.flowerList.filter(flower =>
        flower.name.includes(event.target.value)
      );
    }
  }
  resetFlower() {
    if (this.searchItemList) {
      this.flowerNameDisplay = "";
    }
  }
  chooseFlower(flower) {
    this.flowerNameDisplay = flower.name;
    this.flower.flower = flower;

    this.searchFlowerList = null;
  }
  addFlower() {
    this.flower.quantity = this.flowerQuantity;
    this.flowers.push(this.flower);
    this.flowerQuantity = null;
    this.flower = new ProductFlower();
  }
  //#endregion

  onSubmit() {
    console.log("create");
    let today = new Date();
    today.setHours(0,0,0,0);
    this.product.created = today;
    this.product.flowers = this.flowers;
    this.product.items = this.items;
    let fd = new FormData();
    fd.append("file",this.tmp);
    fd.append("product", JSON.stringify(this.product));
    this.productSer.hello(fd).subscribe();
  }

}
