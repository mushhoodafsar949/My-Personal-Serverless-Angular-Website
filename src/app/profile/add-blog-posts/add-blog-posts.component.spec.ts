import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogPostsComponent } from './add-blog-posts.component';

describe('AddBlogPostsComponent', () => {
  let component: AddBlogPostsComponent;
  let fixture: ComponentFixture<AddBlogPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBlogPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBlogPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
