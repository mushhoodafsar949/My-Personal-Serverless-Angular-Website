import { AddBlogPostsComponent } from './../../profile/add-blog-posts/add-blog-posts.component';
import { BloggerssignupComponent } from 'src/app/my-blogs/bloggerssignup/bloggerssignup.component';
import Author from '../Author/author';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})

export class AuthorService {

  private dbPath = '/Author';
  authorRef: AngularFirestoreCollection<Author>;
  constructor(private db: AngularFirestore) {
  this.authorRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Author> {
  return this.authorRef;
  }
  create(author: Author): any {
  return this.authorRef.add({...author});
  }
  update(id: string, data: any): Promise<void> {
  return this.authorRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
  return this.authorRef.doc(id).delete();
  }
  }

