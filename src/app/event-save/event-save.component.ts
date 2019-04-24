import { EventService } from './../service/event.service';
import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../service/modal.service';
import { Event } from '../models/event';

@Component({
  selector: 'app-event-save',
  templateUrl: './event-save.component.html',
  styleUrls: ['./event-save.component.css']
})
export class EventSaveComponent implements OnInit {
  @Input() inputs;
  requestStatus;
  event;
  isEdit = false;
  constructor(private modalSer: ModalService, private eventSer:EventService) {}

  ngOnInit() {
    if (this.inputs != null) {
      this.event = this.inputs;
      this.isEdit = true;
      this.requestStatus = 0;
    } else {
      this.initNewFlower();
    }
  }

  initNewFlower() {
    this.requestStatus = 0;
    this.event = new Event();
  }

  closeModal() {
    this.modalSer.destroy();
  }
  onSubmit(eventForm) {
    if (this.isEdit) {
      this.requestStatus = 1;
      this.eventSer.update(this.event).subscribe(result => {
        this.requestStatus = result;
        this.modalSer.destroy();
      });
    } else {
      if (this.requestStatus == 200) {
        this.initNewFlower();
        this.requestStatus = 0;
        eventForm.resetForm();
      } else {
        this.requestStatus = 1;
        this.eventSer
          .create(this.event)
          .subscribe(result => (this.requestStatus = result));
      }
    }
  }
}
