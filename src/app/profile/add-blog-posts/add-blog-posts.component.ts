import { Component, OnInit } from '@angular/core';
import { BlogsserviceService } from '../../services/CRUD/Blogsservice.service';
import BLOGS from 'src/app/services/CRUD/Blogs';
import Author from 'src/app/services/Author/author';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { map, mergeAll, switchMap } from 'rxjs/operators';
import { Firestore, Timestamp, where } from '@angular/fire/firestore';
import { BloggerssignupComponent } from 'src/app/my-blogs/bloggerssignup/bloggerssignup.component';
import { AuthorService } from 'src/app/services/Author/author.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { merge, Subject } from 'rxjs';

@Component({
  selector: 'app-add-blog-posts',
  templateUrl: './add-blog-posts.component.html',
  styleUrls: ['./add-blog-posts.component.css'],
})
export class AddBlogPostsComponent implements OnInit {
  authorref: AngularFirestoreDocument<Author>;
  blog: BLOGS = new BLOGS();
  submitted = false;
  basePath = '/Blogs';
  AuthorbasePath = '/AuthorProfilePics';
  downloadableURL = '';
  task: AngularFireUploadTask | any;
  datetime: any;
  author: Author= new Author();
  SecondcompletePassage = false;
  ThirdcompletePassage = false;
  FourthcompletePassage = false;
  FifthcompletePassage = false;
  ExtraThings = false;
  authr: any;
  myid:any;
  mynewid:any;
  message: 'successful' |any;
  email: ''|any;
  UserEmail:any;
  localstoredemail:any;


  constructor(
    private blogsservice: BlogsserviceService,
    private authorservice: AuthorService,
    private afStorage: AngularFireStorage,
    private blocompo: BloggerssignupComponent,
    private db: AngularFirestore
  ) {
   this.UserEmail= BloggerssignupComponent.userEmail;
   if (this.UserEmail !=null) {
    localStorage.setItem('AuthorEmail', JSON.stringify(this.UserEmail));
    this.localstoredemail= JSON.parse(localStorage.getItem('AuthorEmail')!);
  } else {
    this.localstoredemail= JSON.parse(localStorage.getItem('AuthorEmail')!);
  }


this.authorref= authorservice.authorRef.doc(this.localstoredemail);

 this.authorref.get().subscribe(data => {
    this.blog.AuthorName= data.data()?.AuthorName;
    this.blog.AuthorTitle= data.data()?.AuthorTitle;
    this.blog.AuthorExpertise= data.data()?.AuthorExpertise;
    this.blog.AuthorLocation= data.data()?.AuthorLocation;
    this.blog.AuthorDateofjoining= data.data()?.AuthorDateofjoining;
    this.blog.AuthorEmail= data.data()?.AuthorEmail;
    this.blog.AuthorprofileImgUrl= data.data()?.AuthorprofileImgUrl;
    this.blog.AuthorTwitterLink= data.data()?.AuthorTwitterLink;
    this.blog.AuthorFacebookLink= data.data()?.AuthorFacebookLink;
    this.blog.AuthorWhatsappLink= data.data()?.AuthorWhatsappLink;
    this.blog.AuthorLinkedinLink= data.data()?.AuthorLinkedinLink;
    this.blog.AuthorStackoverflowLink= data.data()?.AuthorStackoverflowLink;
    this.blog.AuthorGithubLink=data.data()?.AuthorGithubLink;
    this.blog.AuthorYoutubeLink= data.data()?.AuthorYoutubeLink;
    this.mynewid= data.id;
    this.author.uploaded= data.data()?.uploaded;
    console.log("Data for",this.mynewid, "has been successfully loaded!");

    const Data1={
      AuthorName: data.data()?.AuthorName,
      AuthorTitle:  data.data()?.AuthorTitle,
      AuthorExpertise: data.data()?.AuthorExpertise,
      AuthorLocation: data.data()?.AuthorLocation,
      AuthorDateofjoining: data.data()?.AuthorDateofjoining,
      AuthorEmail: data.data()?.AuthorEmail,
      AuthorprofileImgUrl: data.data()?.AuthorprofileImgUrl,
      AuthorTwitterLink: data.data()?.AuthorTwitterLink,
      AuthorFacebookLink: data.data()?.AuthorFacebookLink,
      AuthorWhatsappLink: data.data()?.AuthorWhatsappLink,
      AuthorLinkedinLink: data.data()?.AuthorLinkedinLink,
      AuthorStackoverflowLink: data.data()?.AuthorStackoverflowLink,
      AuthorGithubLink: data.data()?.AuthorGithubLink,
      AuthorYoutubeLink: data.data()?.AuthorYoutubeLink,
      uploaded: data.data()?.uploaded
    }

    this.blogsservice.blogRef.ref
    .where('AuthorEmail', '==', this.localstoredemail)
  .get().then((querySnapshot) => {
querySnapshot.docs.map((doc) => {
  console.log(doc.id,"here");
  this.blogsservice.blogRef43.doc(doc.id).set(Data1, {
    merge:true
  }).then(() => {
    console.log(this.localstoredemail,"updated successfuly");
  })

    });
  }).catch(function(error) {
    console.log("Error getting documents: ", error);
});




    return data;
    });








  }



  ngOnInit(): void {
  }

  async onFileChanged(event: any) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `${this.basePath}/${Math.random()}${file.name}`;
      this.task = this.afStorage.upload(filePath, file);
      (await this.task).ref.getDownloadURL().then((url: string) => {
        this.blog.ImageUrl = url;
      });
      alert('Data save successfully.');
    } else {
      alert('No images selected');
      this.blog.ImageUrl = '';
    }
  }

  async onFileChanged1(event: any) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `${this.basePath}/${Math.random()}${file.name}`;
      this.task = this.afStorage.upload(filePath, file);
      (await this.task).ref.getDownloadURL().then((url: string) => {
        this.blog.ImageUrl1 = url;
      });
      alert('Data save successfully.');
    } else {
      alert('No images selected');
      this.blog.ImageUrl1 = '';
    }
  }

  async onFileChanged2(event: any) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `${this.basePath}/${Math.random()}${file.name}`; // path at which image will be stored in the firebase storage
      this.task = this.afStorage.upload(filePath, file); // upload task
      (await this.task).ref.getDownloadURL().then((url: string) => {
        this.blog.ImageUrl2 = url;
      }); // <<< url is found here
      alert('Data save successfully.');
    } else {
      alert('No images selected');
      this.blog.ImageUrl2 = '';
    }
  }

  async onFileChanged3(event: any) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `${this.basePath}/${Math.random()}${file.name}`; // path at which image will be stored in the firebase storage
      this.task = this.afStorage.upload(filePath, file); // upload task
      (await this.task).ref.getDownloadURL().then((url: string) => {
        this.blog.ImageUrl3 = url;
      }); // <<< url is found here
      alert('Data save successfully.');
    } else {
      alert('No images selected');
      this.blog.ImageUrl3 = '';
    }
  }

  async onFileChanged4(event: any) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `${this.basePath}/${Math.random()}${file.name}`; // path at which image will be stored in the firebase storage
      this.task = this.afStorage.upload(filePath, file); // upload task
      (await this.task).ref.getDownloadURL().then((url: string) => {
        this.blog.ImageUrl4 = url;
      }); // <<< url is found here
      alert('Data save successfully.');
    } else {
      alert('No images selected');
      this.blog.ImageUrl4 = '';
    }
  }

  async onFileChanged5(event: any) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `${this.basePath}/${Math.random()}${file.name}`; // path at which image will be stored in the firebase storage
      this.task = this.afStorage.upload(filePath, file); // upload task
      (await this.task).ref.getDownloadURL().then((url: string) => {
        this.blog.ImageUrl5 = url;
      }); // <<< url is found here
      alert('Data save successfully.');
    } else {
      alert('No images selected');
      this.blog.ImageUrl5 = '';
    }
  }

  async onFileChanged6(event: any) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `${this.basePath}/${Math.random()}${file.name}`; // path at which image will be stored in the firebase storage
      this.task = this.afStorage.upload(filePath, file); // upload task
      (await this.task).ref.getDownloadURL().then((url: string) => {
        this.blog.ImageUrl6 = url;
      }); // <<< url is found here
      alert('Data save successfully.');
    } else {
      alert('No images selected');
      this.blog.ImageUrl6 = '';
    }
  }

  async onFileChanged7(event: any) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `${this.basePath}/${Math.random()}${file.name}`; // path at which image will be stored in the firebase storage
      this.task = this.afStorage.upload(filePath, file); // upload task
      (await this.task).ref.getDownloadURL().then((url: string) => {
        this.blog.ImageUrl7 = url;
      }); // <<< url is found here
      alert('Data save successfully.');
    } else {
      alert('No images selected');
      this.blog.ImageUrl7 = '';
    }
  }

  async onFileChanged8(event: any) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `${this.AuthorbasePath}/${Math.random()}${file.name}`; // path at which image will be stored in the firebase storage
      this.task = this.afStorage.upload(filePath, file); // upload task
      (await this.task).ref.getDownloadURL().then((url: string) => {
        this.author.AuthorprofileImgUrl = url;
      }); // <<< url is found here
      alert('Data save successfully.');
    } else {
      alert('No images selected');
      this.author.AuthorprofileImgUrl = '';
    }
  }

  saveData() {
    const today = Timestamp.fromDate(new Date());
    this.blog.datetime = today;
    this.blog.AuthorEmail=this.localstoredemail;
    console.log(this.blog.AuthorName);
    this.blogsservice.create(this.blog).then(() => {
      alert('Blog save successfully.');
      this.submitted = true;
    });

  }

  saveit(){
    const today = Timestamp.fromDate(new Date());
    this.author.AuthorDateofjoining= today;
    this.author.AuthorEmail= this.localstoredemail;
    this.author.uploaded= "true";
    this.authorref.set({...this.author}, {
      merge: true,
    }).then(() => {
      alert('Author Info save successfully.');
      this.submitted = true;
    });

  }


  newData(): void {
    this.submitted = false;
  }

  SecondcompletePassageEnable() {
    this.SecondcompletePassage = true;
  }

  SecondcompletePassageDisable() {
    this.SecondcompletePassage = false;
  }

  ThirdcompletePassageEnable() {
    this.ThirdcompletePassage = true;
  }
  ThirdcompletePassageDisable() {
    this.ThirdcompletePassage = false;
  }

  FourthcompletePassageEnable() {
    this.FourthcompletePassage = true;
  }

  FourthcompletePassageDisable() {
    this.FourthcompletePassage = false;
  }

  FifthcompletePassageEnable() {
    this.FifthcompletePassage = true;
  }

  FifthcompletePassageDisable() {
    this.FifthcompletePassage = false;
  }

  ExtraThingsEnable() {
    this.ExtraThings = true;
  }

  ExtraThingsDisable() {
    this.ExtraThings = false;
  }
}
