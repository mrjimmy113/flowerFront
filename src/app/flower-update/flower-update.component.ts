import { EventService } from './../service/event.service';
import { FlowerService } from "./../service/flower.service";
import { ModalService } from "./../service/modal.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-flower-update",
  templateUrl: "./flower-update.component.html",
  styleUrls: ["./flower-update.component.css"]
})
export class FlowerUpdateComponent implements OnInit {
  @Input() inputs;
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
    private modalSer: ModalService,
    private flowerSer: FlowerService,
    private eventSer: EventService
  ) {}

  ngOnInit() {
    this.eventSer.findAll().subscribe(result => this.eventList = result);
    this.flower = this.inputs;
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
  onSubmit() {
    this.requestStatus = 1;
    const fd = new FormData();
    fd.append("file", this.tmp);
    fd.append("dto", JSON.stringify(this.flower));
    this.flowerSer.update(fd).subscribe(result => {
      this.modalSer.destroy();
    });
  }
}
