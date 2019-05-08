import { FlowerImportService } from "./../service/flower-import.service";
import { NgForm } from "@angular/forms";
import { FlowerImportDetail } from "./../models/flowerImportDetail";
import { FlowerImport } from "./../models/flowerImport";
import { FlowerService } from "./../service/flower.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ModalService } from "../service/modal.service";
import { Flower } from "../models/flower";

@Component({
  selector: "app-flower-import-new",
  templateUrl: "./flower-import-new.component.html",
  styleUrls: ["./flower-import-new.component.css"]
})
export class FlowerImportNewComponent implements OnInit {
  @Output() outputs = new EventEmitter<any>();
  requestStatus;
  flowerImport: FlowerImport;
  flowerList = new Array<Flower>();
  searchFlowerList;
  detail: FlowerImportDetail;
  flowerName;

  constructor(
    private modalSer: ModalService,
    private flowerSer: FlowerService,
    private importSer: FlowerImportService
  ) {}

  ngOnInit() {
    this.flowerSer.getAll().subscribe(result => (this.flowerList = result));
    this.initNewImport();
  }

  closeModal() {
    this.outputs[0]();
    this.modalSer.destroy();
  }

  initNewImport() {
    this.requestStatus = 0;
    this.flowerImport = new FlowerImport();
    this.flowerImport.total = 0;
    this.flowerImport.details = new Array<FlowerImportDetail>();
    this.detail = new FlowerImportDetail();
    this.detail.flower = new Flower();
  }
  findFlower(event) {
    if (!(event.target.value.trim() == "")) {
      this.searchFlowerList = this.flowerList.filter(flower =>
        flower.name.includes(event.target.value)
      );
    }
  }
  resetFlower() {
    if (this.searchFlowerList) {
      this.detail.flower = new Flower();
      this.flowerName = "";
    }
  }
  chooseFlower(flower) {
    this.flowerName = flower.name;
    this.detail.flower = flower;
    this.searchFlowerList = null;
  }
  onSubmit(detailForm: NgForm) {
    this.flowerImport.details.push(this.detail);
    this.flowerImport.total =
      Number(this.flowerImport.total) +
      Number(this.detail.unitPrice) * Number(this.detail.quantity);
    this.detail = new FlowerImportDetail();
    this.flowerName = "";
  }
  removeDetail(index) {
    this.flowerImport.details.splice(index, 1);
  }
  submitOrder() {
    if (confirm("Are you sure for this importing")) {
      this.requestStatus = 1;
      this.flowerImport.date = new Date();
      this.importSer.create(this.flowerImport).subscribe(result => {
        if (result == 200) {
          alert("Import Flower Successfully");
          this.closeModal();
        }
      });
    }
  }
}
