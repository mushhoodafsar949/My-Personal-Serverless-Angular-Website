import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatBottomSheet, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { AddBlogPostsComponent } from '../profile/add-blog-posts/add-blog-posts.component';
import { BlogsserviceService } from '../../app/services/CRUD/Blogsservice.service';
import { AuthorService } from '../services/Author/author.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-blogauthorsprofile',
  templateUrl: './blogauthorsprofile.component.html',
  styleUrls: ['./blogauthorsprofile.component.css']
})



export class BlogauthorsprofileComponent implements OnInit {

 submitted=false;
 message1: any;
 blog:any;
 author:any;
 offspiner=false;

 constructor(
  private dialog: MatDialog,
  private Signupdialog: MatDialog,
  private AddblogPostsheet: MatBottomSheet,
  public blogser: BlogsserviceService,
  private route: ActivatedRoute,
  public authser: AuthorService
  )
  {
  this.Signupdialog.closeAll();
  this.message1 = this.route.snapshot.paramMap.get('message') || '';
  console.log("message1: ", this.message1);

  blogser.blogRef.ref.where('AuthorEmail', '==',this.message1 ).get().then((querySnapshot) => {
    this.blog=querySnapshot.docs.map((doc) => {

      authser.authorRef.ref.where('AuthorName', '==' , doc.data().AuthorName).get().then((querySnapshot) => {
        this.author=querySnapshot.docs.map((doc) => {
          this.offspiner=true;
        return { id1: doc.id, ...doc.data() };
        });
      }) .catch(function(error) {
        console.log("No Result yet: ", error);
      });

    return { id1: doc.id, ...doc.data() };
    });
  }) .catch(function(error) {
    console.log("No Result yet: ", error);
});



  }

 ngOnInit(): void {
 }


 onCreatePostClick(){
  this.AddblogPostsheet.open(AddBlogPostsComponent);
 }

 deletit(i:number){
  this.blogser.delete(this.blog[i].id1).then(()=>
   {
    console.log(this.blog[i].id1,"deleted successfuly");
    window.location.reload();
  }
 );
 }

}


