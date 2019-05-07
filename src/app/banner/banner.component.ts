import { Banner } from './../models/banner';
import { BannerService } from "./../service/banner.service";
import { BannerSaveComponent } from "./../banner-save/banner-save.component";
import { ModalService } from "./../service/modal.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"]
})
export class BannerComponent implements OnInit {
  eventList;
  constructor(private modalSer: ModalService, private service: BannerService) {}

  ngOnInit() {
    this.eventList = new Array<Banner>();
    this.getAll();
  }

  openCreate() {
    this.modalSer.init(BannerSaveComponent, [], [() => this.getAll()]);
  }
  delete(id) {
    if (confirm("Do you really want to delete this")) {
      this.service.delete(id).subscribe(result => {
        if (result == 200) this.getAll();
        if (result == 500 || result == 400) alert("Error");
      });
    }
  }
  getAll() {
    this.service.getAll().subscribe(result => (this.eventList = result));
  }
}
