import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerUpdateComponent } from './flower-update.component';

describe('FlowerUpdateComponent', () => {
  let component: FlowerUpdateComponent;
  let fixture: ComponentFixture<FlowerUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
