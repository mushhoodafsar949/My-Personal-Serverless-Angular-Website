import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBackgroundImagesComponent } from './home.component';

describe('MyBackgroundImagesComponent', () => {
  let component: MyBackgroundImagesComponent;
  let fixture: ComponentFixture<MyBackgroundImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBackgroundImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBackgroundImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
