import { BannerService } from './../service/banner.service';
import { NgForm } from '@angular/forms';
import { ModalService } from './../service/modal.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner-save',
  templateUrl: './banner-save.component.html',
  styleUrls: ['./banner-save.component.css']
})
export class BannerSaveComponent implements OnInit {
  @Output() outputs = new EventEmitter<any>();
  requestStatus;
  maxFileSize = 500000;
  isOverSize = false;
  dump;
  previewImage;
  tmp;
  constructor(private modalSer:ModalService, private service:BannerService) { }

  ngOnInit() {
    this.initNewBanner();
  }

  initNewBanner() {
    this.requestStatus = 0;
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
        this.isOverSize = false;
      }
    }else {
      this.previewImage = null;
    }
  }
  onSubmit(form:NgForm) {
    if (this.requestStatus == 200) {
      this.initNewBanner();
      this.requestStatus = 0;
      form.resetForm();
    } else {
      this.requestStatus = 1;
      const fd = new FormData();
      fd.append("file", this.tmp);
      this.service.create(fd).subscribe(result => this.requestStatus = result);
    }
  }

}
