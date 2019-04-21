import { FlowerService } from "./../service/flower.service";
import { ModalService } from "./../service/modal.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-flower-update",
  templateUrl: "./flower-update.component.html",
  styleUrls: ["./flower-update.component.css"]
})
export class FlowerUpdateComponent implements OnInit {
  @Input() inputs;
  requestStatus;
  flower;
  tmp;
  maxFileSize = 500000;
  isOverSize = false;
  dump;
  previewImage;
  constructor(
    private modalSer: ModalService,
    private flowerSer: FlowerService
  ) {}

  ngOnInit() {
    this.flower = this.inputs;
  }

  closeModal() {
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
    if (!(this.previewImage == null)) {
      const fd = new FormData();
      fd.append("file", this.tmp);
      fd.append("dto", JSON.stringify(this.flower));
      this.flowerSer.updateWithFile(fd).subscribe(result => {
        this.requestStatus = result;
      });
    }else {
      this.flowerSer.updateNoFile(this.flower).subscribe(result => {
        this.requestStatus = result;
      });
    }
  }
}
