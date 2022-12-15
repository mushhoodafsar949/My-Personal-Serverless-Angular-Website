
import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatBottomSheet, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AddBlogPostsComponent } from './add-blog-posts/add-blog-posts.component';
import { AddProjectsComponent } from './add-projects/add-projects.component';
import { AddServiceComponent } from './add-service/add-service.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})



export class ProfileComponent implements OnInit {

 submitted=false;

 constructor(
  private dialog: MatDialog,
  private loginsheet: MatBottomSheet,
  private AddblogPostsheet: MatBottomSheet,
  private AddProjectsheet: MatBottomSheet,
  private AddServicesheet: MatBottomSheet)
  {
  this.loginsheet.dismiss(LoginComponent);
  }

 ngOnInit(): void {
 }


 onCreatePostClick(){


  this.AddblogPostsheet.open(AddBlogPostsComponent);
 }

 onCreateProjectClick(){
  this.AddProjectsheet.open(AddProjectsComponent);
 }

 onCreateServiceClick(){
  this.AddServicesheet.open(AddServiceComponent);
 }

}


