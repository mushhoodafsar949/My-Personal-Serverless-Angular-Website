import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerverificationComponent } from './buyerverification.component';

describe('BuyerverificationComponent', () => {
  let component: BuyerverificationComponent;
  let fixture: ComponentFixture<BuyerverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerverificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
