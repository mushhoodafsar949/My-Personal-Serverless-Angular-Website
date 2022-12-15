import { Component, OnInit } from '@angular/core';
import { ServService } from '../../services/CRUD/serv.service';
import Serv from 'src/app/services/CRUD/serv';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
 sv:Serv=new Serv();
 submitted=false;

 basePath = '/Services';
 downloadableURL = '';
 task: AngularFireUploadTask | any;
 datetime:any;

 constructor(private servservice:ServService,
  private afStorage: AngularFireStorage) {

 }
 ngOnInit(): void {
 }




 async onFileChanged1(event:any) {
  const file = event.target.files[0];
  if (file) {
     const filePath = `${this.basePath}/${Math.random()}${file.name}`;
     this.task =  this.afStorage.upload(filePath, file);
     (await this.task).ref.getDownloadURL().then((url: string) => {this.sv.ImageUrl1 = url; });
     alert("Data save successfully.");
   } else {
     alert('No images selected');
     this.sv.ImageUrl1 = ''; }
 }

 async onFileChanged2(event:any) {
  const file = event.target.files[0];
  if (file) {
     const filePath = `${this.basePath}/${Math.random()}${file.name}`;
     this.task =  this.afStorage.upload(filePath, file);
     (await this.task).ref.getDownloadURL().then((url: string) => {this.sv.ImageUrl2 = url; });
     alert("Data save successfully.");
   } else {
     alert('No images selected');
     this.sv.ImageUrl2 = ''; }
 }

 async onFileChanged3(event:any) {
  const file = event.target.files[0];
  if (file) {
     const filePath = `${this.basePath}/${Math.random()}${file.name}`;
     this.task =  this.afStorage.upload(filePath, file);
     (await this.task).ref.getDownloadURL().then((url: string) => {this.sv.ImageUrl3 = url; });
     alert("Data save successfully.");
   } else {
     alert('No images selected');
     this.sv.ImageUrl3 = ''; }
 }

 async onFileChanged4(event:any) {
  const file = event.target.files[0];
  if (file) {
     const filePath = `${this.basePath}/${Math.random()}${file.name}`;
     this.task =  this.afStorage.upload(filePath, file);
     (await this.task).ref.getDownloadURL().then((url: string) => {this.sv.ImageUrl4 = url; });
     alert("Data save successfully.");
   } else {
     alert('No images selected');
     this.sv.ImageUrl4 = ''; }
 }




 saveData():void{
  const today= Timestamp.fromDate(new Date());
  this.sv.Time= today;
 this.servservice.create(this.sv).then(()=>{
 alert("Data save successfully.");
 this.submitted=true;
 });
 }

 newData():void{
 this.submitted=false;
 this.sv=new Serv();
 }



}
