import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrwerComponent } from './borrwer.component';

describe('BorrwerComponent', () => {
  let component: BorrwerComponent;
  let fixture: ComponentFixture<BorrwerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrwerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
