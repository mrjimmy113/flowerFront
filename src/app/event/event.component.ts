import { EventSaveComponent } from './../event-save/event-save.component';
import { EventService } from './../service/event.service';
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  eventList;
  constructor(private eventSer:EventService, private modalSer: ModalService) { }

  ngOnInit() {
    this.eventSer.findAll().subscribe(result => {this.eventList = result; console.log(result)});
  }
  openCreate() {
    this.modalSer.init(EventSaveComponent, null,null);
  }
  openEdit(event) {
    this.modalSer.init(EventSaveComponent,event,[]);
  }
  delete(id) {
    this.eventSer.delete(id).subscribe();
  }

}
