import { ShowOrderDetailComponent } from './../show-order-detail/show-order-detail.component';
import { DatePipe } from '@angular/common';
import { OrderService } from './../service/order.service';
import { Component, OnInit } from "@angular/core";
import { ModalService } from '../service/modal.service';
import { UltisService } from '../service/ultis.service';

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})
export class OrderComponent implements OnInit {
  itemList;
  isSort = "";
  currentPage = 1;
  maxPage;
  from;
  to;
  constructor(
    private modalSer: ModalService,
    private ultisSer: UltisService,
    private orderSer: OrderService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    let date = new Date();
    date.setHours(23,0,0,0);
    this.from = new Date(date.getTime() - (1000 * 3600 * 24 * 30));
    this.to = this.datePipe.transform(date, 'yyyy-MM-dd');
    this.from = this.datePipe.transform(this.from, 'yyyy-MM-dd');
    this.search();
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
    this.orderSer
      .searchWithPage(this.getTime(this.from),this.getTime(this.to), pageNum)
      .subscribe(result => (this.itemList = result));
  }
  search() {
    this.orderSer.search(this.getTime(this.from), this.getTime(this.to)).subscribe(result => {
      this.itemList = result.list;
      this.maxPage = result.maxPage;
      console.log(this.itemList);
    });
  }
  getTime(dateInString) {
    let date = new Date(dateInString);
    date.setHours(23,0,0,0);
    return date.getTime();
  }
  complete(id) {
    if(confirm("Are you sure for completing this order")) {
      this.orderSer.complete(id).subscribe(result => {
        if(result == 200) {
          alert("Order has been completed");
          this.search();
        }
      });
    }
  }
  cancel(id) {
    if(confirm("Are you sure for cancelling this order")) {
      this.orderSer.cancel(id).subscribe(result => {
        if(result == 200) {
          alert("Order has been cancelled");
          this.search();
        }
      });
    }
  }
  showDetail(id) {
    this.orderSer.getDetail(id).subscribe(result =>{
      this.modalSer.init(ShowOrderDetailComponent,result,[]);
    })
  }
}
