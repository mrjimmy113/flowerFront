import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemImportNewComponent } from './item-import-new.component';

describe('ItemImportNewComponent', () => {
  let component: ItemImportNewComponent;
  let fixture: ComponentFixture<ItemImportNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemImportNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemImportNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
