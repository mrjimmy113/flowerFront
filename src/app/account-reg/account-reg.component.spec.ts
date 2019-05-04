import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRegComponent } from './account-reg.component';

describe('AccountRegComponent', () => {
  let component: AccountRegComponent;
  let fixture: ComponentFixture<AccountRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
