import { Product } from './../models/product';
import { ProductDetailComponent } from './../product-detail/product-detail.component';
import { ModalService } from './../service/modal.service';
import { EventService } from './../service/event.service';
import { FlowerService } from './../service/flower.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  productList;
  flowerList;
  eventList;
  searchFlowerId = 0;
  searchEventId = 0;
  currentPage = 1;
  maxPage = 1;
  constructor(
    private productSer: ProductService,
    private flowerSer: FlowerService,
    private eventSer: EventService,
    private modalSer:ModalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productList = new Array<Product>();
    this.route.queryParams.subscribe(params => {
      this.searchEventId = params["event"];
      this.searchFlowerId = params["flower"];
      this.productSer.searchBy(this.searchEventId,this.searchFlowerId).subscribe(result => {
        this.productList = result.list;
        this.maxPage = result.maxPage;
      })
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
    this.productSer.searchBy(this.searchEventId,this.searchFlowerId).subscribe(result => {
      this.productList = result.list;
      this.maxPage = result.maxPage;
    })
  }
  loadPage(pageNum) {
    this.currentPage = pageNum;
    this.productSer.searchByPage(this.searchEventId,this.searchFlowerId,pageNum).subscribe(result => {
      this.productList = result;
    })
  }

}
