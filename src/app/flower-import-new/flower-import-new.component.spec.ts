import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerImportNewComponent } from './flower-import-new.component';

describe('FlowerImportNewComponent', () => {
  let component: FlowerImportNewComponent;
  let fixture: ComponentFixture<FlowerImportNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerImportNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerImportNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
