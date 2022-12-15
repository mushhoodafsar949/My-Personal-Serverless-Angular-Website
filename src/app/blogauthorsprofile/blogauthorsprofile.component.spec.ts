import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogauthorsprofileComponent } from './blogauthorsprofile.component';

describe('BlogauthorsprofileComponent', () => {
  let component: BlogauthorsprofileComponent;
  let fixture: ComponentFixture<BlogauthorsprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogauthorsprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogauthorsprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
