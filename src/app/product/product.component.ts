import { ProductEditComponent } from './../product-edit/product-edit.component';
import { Product } from './../models/product';
import { ProductService } from './../service/product.service';
import { UltisService } from './../service/ultis.service';
import { ProductCreateComponent } from './../product-create/product-create.component';
import { ModalService } from './../service/modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  itemList;
  isSort = "";
  currentPage = 1;
  maxPage;
  searchTerm = "";
  choosenProduct : Product;
  constructor(private modalSer:ModalService, private ultisSer:UltisService, private productSer:ProductService) { }

  ngOnInit() {
    this.getAll();
  }
  openCreate() {
    this.modalSer.init(ProductCreateComponent, [],[() => this.getAll()]);
  }
  openEdit(product) {
    this.modalSer.init(ProductEditComponent, product,[() => this.getAll()]);
  }
  sort(property) {
    if (this.isSort == property) {
      this.itemList.sort(this.ultisSer.sortByPropertyNameDSC(property));
      this.isSort = "";
    } else {
      this.itemList.sort(this.ultisSer.sortByPropertyNameASC(property));
      this.isSort = property;
    }
  }
  loadPage(pageNum) {
    this.currentPage = pageNum;
    this.productSer
      .searchWithPage(this.searchTerm, pageNum)
      .subscribe(result => (this.itemList = result));
  }
  search() {
    this.productSer.search(this.searchTerm).subscribe(result => {
      this.itemList = result.list;
      this.maxPage = result.maxPage;
    });
  }
  loadDetail(product) {
    this.choosenProduct = product;
    this.productSer.getDetail(product.productId).subscribe(result => console.log(result));

  }
  delete(id) {
    if(confirm("Are you sure for deleting this product")) {
      this.productSer.delete(id).subscribe(result => {
        if(result == 200) this.getAll();
      });
    }
  }
  getAll() {
    this.productSer.search(this.searchTerm).subscribe(result => {
      this.itemList = result.list;
      this.maxPage = result.maxPage;
    });
  }

}
