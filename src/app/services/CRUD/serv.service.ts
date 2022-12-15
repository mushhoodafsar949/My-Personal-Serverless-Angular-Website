import { map } from 'rxjs/operators';
import Serv from '../CRUD/serv';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})

export class ServService {
  [x: string]: any;
  private dbPath = '/Services';
  servRef: AngularFirestoreCollection<Serv>;
  constructor(private db: AngularFirestore) {
  this.servRef = db.collection(this.dbPath);

  }

  getAll(): AngularFirestoreCollection<Serv> {
  return this.servRef;
  }
  create(myservice: Serv): any {
  return this.servRef.add({...myservice});
  }
  update(id: string, data: any): Promise<void> {
  return this.servRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
  return this.servRef.doc(id).delete();
  }
  }



