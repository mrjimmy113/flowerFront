import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSaveComponent } from './event-save.component';

describe('EventSaveComponent', () => {
  let component: EventSaveComponent;
  let fixture: ComponentFixture<EventSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
