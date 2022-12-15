import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAchivementsComponent } from './my-achivements.component';

describe('MyAchivementsComponent', () => {
  let component: MyAchivementsComponent;
  let fixture: ComponentFixture<MyAchivementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAchivementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAchivementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
