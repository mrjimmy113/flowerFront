import { EventSaveComponent } from "./../event-save/event-save.component";
import { EventService } from "./../service/event.service";
import { Component, OnInit } from "@angular/core";
import { ModalService } from "../service/modal.service";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.css"]
})
export class EventComponent implements OnInit {
  eventList;
  constructor(private eventSer: EventService, private modalSer: ModalService) {}

  ngOnInit() {
    this.eventList = new Array<Event>();
    this.getEvent();
  }
  openCreate() {
    this.modalSer.init(EventSaveComponent, null, [() => this.getEvent()]);
  }
  openEdit(event) {
    this.modalSer.init(EventSaveComponent, event, [() => this.getEvent()]);
  }
  delete(id) {
    if (confirm("Do you really want to delete this")) {
      this.eventSer.delete(id).subscribe(result => {
        if (result == 200) this.getEvent();
        if (result == 400 || result == 500) alert("Error");
      });
    }
  }
  getEvent() {
    this.eventSer.findAll().subscribe(result => {
      this.eventList = result;
    });
  }
}
