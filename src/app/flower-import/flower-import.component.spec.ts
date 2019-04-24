import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerImportComponent } from './flower-import.component';

describe('FlowerImportComponent', () => {
  let component: FlowerImportComponent;
  let fixture: ComponentFixture<FlowerImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
