import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSaveComponent } from './banner-save.component';

describe('BannerSaveComponent', () => {
  let component: BannerSaveComponent;
  let fixture: ComponentFixture<BannerSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
