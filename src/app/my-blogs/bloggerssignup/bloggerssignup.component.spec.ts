import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggerssignupComponent } from './bloggerssignup.component';

describe('bloggerssignupComponent', () => {
  let component: BloggerssignupComponent;
  let fixture: ComponentFixture<BloggerssignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloggerssignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloggerssignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
