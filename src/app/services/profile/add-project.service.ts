import PROJECT from '../profile/project';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})

export class AddProjectService {
  private dbPath = '/Projects';
  projectRef: AngularFirestoreCollection<PROJECT>;
  constructor(private db: AngularFirestore) {
  this.projectRef = db.collection(this.dbPath);

  }
  getAll(): AngularFirestoreCollection<PROJECT> {
  return this.projectRef;
  }
  create(project: PROJECT): any {
  return this.projectRef.add({...project});
  }
  update(id: string, data: any): Promise<void> {
  return this.projectRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
  return this.projectRef.doc(id).delete();
  }
  }

