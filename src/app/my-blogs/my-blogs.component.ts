import   categoryblog2 from '../services/CRUD/Categoryblog2';
import { Component, OnInit } from '@angular/core';
import { BlogsserviceService } from './../services/CRUD/Blogsservice.service';
import { map } from 'rxjs/operators';
import BLOGS from 'src/app/services/CRUD/Blogs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import categoryblog from '../services/CRUD/Categoryblogs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css'],
})
export class MyBlogsComponent implements OnInit {
  bl: BLOGS= new BLOGS();
  blog: any;
  offspiner= false;
  public health:any;
  public Innovation:any;
  public Social:any;
  public Research:any;




  myblogs: any;
  myid: any;
  message: 'successful' | any;

  constructor(private blogservice: BlogsserviceService, public route: Router,
    public db: AngularFirestore) {
    this.blogservice
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes: any[]) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {

        this.blog = data;
        //this.mynewid= data.length;
        //console.log(data.length);
        //console.log(this.mynewid);
        return this.blog;
      });


      this.blogservice.blogRef23.ref
      .where('BlogCategory', '==', 'Health')
    .get().then((querySnapshot) => {
      this.health=querySnapshot.docs.map((doc) => {
      return { id1: doc.id, ...doc.data() };
      });
    }) .catch(function(error) {
      console.log("Error getting documents: ", error);
  });


  this.blogservice.blogRef23.ref
  .where('BlogCategory', '==', 'Innovation')
.get().then((querySnapshot) => {
  this.Innovation=querySnapshot.docs.map((doc) => {
  return { id1: doc.id, ...doc.data() };
  });
}) .catch(function(error) {
  console.log("Error getting documents: ", error);
});



this.blogservice.blogRef23.ref
.where('BlogCategory', '==', 'Social')
.get().then((querySnapshot) => {
this.Social=querySnapshot.docs.map((doc) => {

return { id1: doc.id, ...doc.data() };
});
}) .catch(function(error) {
console.log("Error getting documents: ", error);
});




this.blogservice.blogRef23.ref
.where('BlogCategory', '==', 'Research')
.get().then((querySnapshot) => {
this.Research=querySnapshot.docs.map((doc) => {

return { id1: doc.id, ...doc.data() };
});
}) .catch(function(error) {
console.log("Error getting documents: ", error);
});

  }

  ngOnChanges(): void{
    this.offspiner=false;
  }
  ngOnInit(): void {}
  ngAfterViewChecked(): void{
    this.offspiner=true;
  }

  Healthfunc(i: number) {
    this.myid = i;
    const data1 = {
      postnum: this.myid,
      id: this.health[i].id1,
    };
    console.log(this.health[i].id1);
   this.blogservice
      .update(this.health[i].id1, data1)
      .then(() => {
      console.log(data1.id,"updated successfuly");
    })
      .catch((err) => console.log(err));
    this.route.navigate(['/blogpage' , { message: data1.id }]);
  }



  InnovationFunc(i: number) {
    this.myid = i;
    const data1 = {
      postnum: this.myid,
      id: this.Innovation[i].id1,
    };
    console.log(this.Innovation[i].id1);
   this.blogservice
      .update(this.Innovation[i].id1, data1)
      .then(() => {
      console.log(data1.id,"updated successfuly");
    })
      .catch((err) => console.log(err));
    this.route.navigate(['/blogpage' , { message: data1.id }]);
  }


  SocialFunc(i: number) {
    this.myid = i;
    const data1 = {
      postnum: this.myid,
      id: this.Social[i].id1,
    };
    console.log(this.Social[i].id1);
   this.blogservice
      .update(this.Social[i].id1, data1)
      .then(() => {
      console.log(data1.id,"updated successfuly");
    })
      .catch((err) => console.log(err));
    this.route.navigate(['/blogpage' , { message: data1.id }]);
  }



  ResearchFunc(i: number) {
    this.myid = i;
    const data1 = {
      postnum: this.myid,
      id: this.Research[i].id1,
    };
    console.log(this.Research[i].id1);
   this.blogservice
      .update(this.Research[i].id1, data1)
      .then(() => {
      console.log(data1.id,"updated successfuly");
    })
      .catch((err) => console.log(err));
    this.route.navigate(['/blogpage' , { message: data1.id }]);
  }


}
