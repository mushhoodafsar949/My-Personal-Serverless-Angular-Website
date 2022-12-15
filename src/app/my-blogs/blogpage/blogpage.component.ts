import { Component, OnInit } from '@angular/core';
import { BlogsserviceService } from '../../services/CRUD/Blogsservice.service';
import { map } from 'rxjs/operators';
import BLOGS from 'src/app/services/CRUD/Blogs';
import { MatDialog } from '@angular/material/dialog';
import { BloggerssignupComponent } from '../bloggerssignup/bloggerssignup.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})
export class BlogpageComponent implements OnInit {
  blog: any;
  myblogs:any;
  submitted=false;
  myid:any;
  mynewid:any;
  message:'successful' | any;
  message1: any;
  offspiner=false;
  console= console;
  miniblog:any;
  constructor(private blogservice:BlogsserviceService,
    private Signupdialog: MatDialog,
    private route: ActivatedRoute) {
      this.message1 = this.route.snapshot.paramMap.get('message') || '';
      console.log("message1: ", this.message1);
      //this.myblogs= JSON.parse(localStorage.getItem('Blogpageid')!);

      this.blogservice.blogRef.doc(this.message1).get().subscribe(data => {
        this.blog=  data.data();
        this.blogservice.blogRef53.ref.where('AuthorName' , '==',data.data()?.AuthorName).limit(10)
        .get().then((querySnapshot) => {
          this.miniblog=querySnapshot.docs.map((doc) => {
            this.offspiner=true;
          return { id1: doc.id, ...doc.data() };
          });
          }) .catch(function(error) {
          console.log("Error getting documents: ", error);
          });
        return data.data();
      });


   }

  ngOnInit(): void {
  }


  signup(){
   this.Signupdialog.open(BloggerssignupComponent);
  }


}
