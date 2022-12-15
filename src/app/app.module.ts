import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { HomeComponent } from './home/home.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { MyAchivementsComponent } from './my-achivements/my-achivements.component';
import { MyFuturePlansComponent } from './my-future-plans/my-future-plans.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS } from '@angular/material/bottom-sheet';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

import { AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AddBlogPostsComponent } from './profile/add-blog-posts/add-blog-posts.component';
import { AddProjectsComponent } from './profile/add-projects/add-projects.component';
import { AddServiceComponent } from './profile/add-service/add-service.component';
import { DateDisplayPipe } from './pipes/date-display.pipe';
import { DatePipe } from '@angular/common';
import { BuyerverificationComponent } from './my-services/buyerverification/buyerverification.component';
import { BloggerssignupComponent } from './my-blogs/bloggerssignup/bloggerssignup.component';
import { BlogauthorsprofileComponent } from './blogauthorsprofile/blogauthorsprofile.component';
import { BlogpageComponent } from './my-blogs/blogpage/blogpage.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNavbarComponent,
    HomeComponent,
    MyProjectsComponent,
    MyServicesComponent,
    MyBlogsComponent,
    MyAchivementsComponent,
    MyFuturePlansComponent,
    ProfileComponent,
    LoginComponent,
    AddBlogPostsComponent,
    AddProjectsComponent,
    AddServiceComponent,
    DateDisplayPipe,
    BuyerverificationComponent,
    BloggerssignupComponent,
    BlogauthorsprofileComponent,
    BlogpageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatCardModule,
    FormsModule,
    MatInputModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,

  ],
  providers: [DatePipe,
    {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
