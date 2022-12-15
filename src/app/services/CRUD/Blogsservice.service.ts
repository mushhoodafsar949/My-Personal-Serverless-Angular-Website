import BLOGS from '../CRUD/Blogs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import categoryblog from '../CRUD/Categoryblogs';
import categoryblog2 from '../CRUD/Categoryblog2';
import categoryblog3 from '../CRUD/Categoryblog2';


import Author from '../Author/author';

@Injectable({
  providedIn: 'root'
})

export class BlogsserviceService {
  private dbPath = '/Blogs';
  blogRef: AngularFirestoreCollection<BLOGS>;
  blogRef23: AngularFirestoreCollection<categoryblog>;
  blogRef33: AngularFirestoreCollection<categoryblog2>;
  blogRef53: AngularFirestoreCollection<categoryblog3>;
  blogRef43: AngularFirestoreCollection<Author>;


  constructor(private db: AngularFirestore) {
  this.blogRef = db.collection(this.dbPath);
  this.blogRef23 = db.collection(this.dbPath);
  this.blogRef33 = db.collection(this.dbPath);
  this.blogRef43 = db.collection(this.dbPath);
  this.blogRef53 = db.collection(this.dbPath);





  }
  getAll(): AngularFirestoreCollection<BLOGS> {
  return this.blogRef;
  }
  create(blog: BLOGS): any {
  return this.blogRef.add({...blog});
  }
  update(id: string, data: any): Promise<void> {
  return this.blogRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
  return this.blogRef.doc(id).delete();
  }
  }

