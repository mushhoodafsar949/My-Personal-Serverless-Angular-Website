import { MyFuturePlansComponent } from './my-future-plans/my-future-plans.component';
import { MyAchivementsComponent } from './my-achivements/my-achivements.component';
import { HomeComponent } from './home/home.component';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

import { AddBlogPostsComponent } from './profile/add-blog-posts/add-blog-posts.component';
import { BlogauthorsprofileComponent } from './blogauthorsprofile/blogauthorsprofile.component';
import { BlogpageComponent } from './my-blogs/blogpage/blogpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'my-projects',component:MyProjectsComponent},
  {path:'my-services',component:MyServicesComponent},
  {path:'my-blogs',component:MyBlogsComponent},
  {path:'my-achivements',component:MyAchivementsComponent},
  {path:'my-future-plans',component:MyFuturePlansComponent},
  {path:'profile',component:ProfileComponent},

  {path:'blogposts',component:AddBlogPostsComponent},
  {path:'blogauthorsprofile',component:BlogauthorsprofileComponent},
  {path:'blogpage',component:BlogpageComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
