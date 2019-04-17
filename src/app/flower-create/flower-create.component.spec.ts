import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerCreateComponent } from './flower-create.component';

describe('FlowerCreateComponent', () => {
  let component: FlowerCreateComponent;
  let fixture: ComponentFixture<FlowerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
