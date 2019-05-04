import { EventService } from './../service/event.service';
import { ModalService } from "./../service/modal.service";
import { FlowerService } from "./../service/flower.service";
import { Flower } from "./../models/flower";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-flower-create",
  templateUrl: "./flower-create.component.html",
  styleUrls: ["./flower-create.component.css"]
})
export class FlowerCreateComponent implements OnInit {
  @Output() outputs = new EventEmitter<any>();
  requestStatus;
  flower;
  tmp;
  maxFileSize = 500000;
  isOverSize = false;
  dump;
  previewImage;
  eventList;
  constructor(
    private flowerSer: FlowerService,
    private modalSer: ModalService,
    private eventSer: EventService
  ) {}

  ngOnInit() {
    this.eventSer.findAll().subscribe(result => this.eventList = result);
    this.initNewFlower();
  }

  initNewFlower() {
    this.requestStatus = 0;
    this.flower = new Flower();
  }

  closeModal() {
    this.outputs[0]();
    this.modalSer.destroy();
  }
  onSubmit(flowerForm: NgForm) {
    if (this.requestStatus == 201) {
      this.initNewFlower();
      this.requestStatus = 0;
      flowerForm.resetForm();
    } else {
      this.requestStatus = 1;
      const fd = new FormData();
      fd.append("file", this.tmp);
      fd.append("dto", JSON.stringify(this.flower));
      this.flowerSer.create(fd).subscribe(result => {
        this.requestStatus = result;
      });
    }
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
    }else {
      this.previewImage = null;
    }
  }
}
