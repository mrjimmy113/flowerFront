import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderShipmentComponent } from './order-shipment.component';

describe('OrderShipmentComponent', () => {
  let component: OrderShipmentComponent;
  let fixture: ComponentFixture<OrderShipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderShipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
