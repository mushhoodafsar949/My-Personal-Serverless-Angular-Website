import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFuturePlansComponent } from './my-future-plans.component';

describe('MyFuturePlansComponent', () => {
  let component: MyFuturePlansComponent;
  let fixture: ComponentFixture<MyFuturePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFuturePlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFuturePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
