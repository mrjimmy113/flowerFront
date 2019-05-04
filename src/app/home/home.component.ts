import { ProductDetailComponent } from './../product-detail/product-detail.component';
import { ModalService } from './../service/modal.service';
import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList;
  constructor(private productSer:ProductService, private modalSer:ModalService) { }

  ngOnInit() {
    this.productSer.search("").subscribe(result => {
      this.productList = result.list;
    })
  }
  showDetail(id) {
    this.productSer.getDetail(id).subscribe(result => {
      this.modalSer.init(ProductDetailComponent,result,[]);
    })
  }

}
