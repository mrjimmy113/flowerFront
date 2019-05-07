import { Router, NavigationExtras } from '@angular/router';
import { FlowerService } from './../service/flower.service';
import { EventService } from "./../service/event.service";
import { ItemService } from "./../service/item.service";
import { BannerService } from "./../service/banner.service";
import { ProductDetailComponent } from "./../product-detail/product-detail.component";
import { ModalService } from "./../service/modal.service";
import { ProductService } from "./../service/product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  productList;
  bannerList;
  flowerList;
  eventList;
  searchFlowerId = 0;
  searchEventId = 0;
  imageList: String[];
  constructor(
    private productSer: ProductService,
    private modalSer: ModalService,
    private bannerSer: BannerService,
    private flowerSer: FlowerService,
    private eventSer: EventService,
    private route:Router
  ) {}

  ngOnInit() {
    this.bannerList = new Array<String>();
    this.imageList = new Array<String>();
    this.productSer.newestProduct().subscribe(result => {
      this.productList = result;
    });
    this.bannerSer.getAll().subscribe(result => {
      this.bannerList = result;
      result.forEach(element => {
        this.imageList.push(element.imageUrl);
      });
    });
    this.flowerSer.getAll().subscribe(result => {
      this.flowerList = result;
    })
    this.eventSer.findAll().subscribe(result => {
      this.eventList = result;
    })
  }
  showDetail(id) {
    this.productSer.getDetail(id).subscribe(result => {
      this.modalSer.init(ProductDetailComponent, result, []);
    });
  }
  search() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "event": this.searchEventId,
          "flower":this.searchFlowerId
      }
    };
    this.route.navigate(["/search"],navigationExtras);
  }
}
