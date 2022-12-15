import { Component, OnInit } from '@angular/core';
import { AddProjectService } from '../../services/profile/add-project.service';
import PROJECT from 'src/app/services/profile/project';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})

export class AddProjectsComponent implements OnInit {
 project:PROJECT=new PROJECT();
 submitted=false;
 basePath = '/Projects';
 downloadableURL = '';
 task: AngularFireUploadTask | any;
 datetime:any;

 constructor(private addprojectservice:AddProjectService,
  private afStorage: AngularFireStorage) {

 }
 ngOnInit(): void {
 }




 async onFileChanged1(event:any) {
  const file = event.target.files[0];
  if (file) {
     const filePath = `${this.basePath}/${Math.random()}${file.name}`;
     this.task =  this.afStorage.upload(filePath, file);
     (await this.task).ref.getDownloadURL().then((url: string) => {this.project.ImageUrl1 = url; });
     alert("Data save successfully.");
   } else {
     alert('No images selected');
     this.project.ImageUrl1 = ''; }

 }

 async onFileChanged2(event:any) {
  const file = event.target.files[0];
  if (file) {
     const filePath = `${this.basePath}/${Math.random()}${file.name}`;
     this.task =  this.afStorage.upload(filePath, file);
     (await this.task).ref.getDownloadURL().then((url: string) => {this.project.ImageUrl2 = url; });
     alert("Data save successfully.");
   } else {
     alert('No images selected');
     this.project.ImageUrl2 = ''; }

 }


 async onFileChanged3(event:any) {
  const file = event.target.files[0];
  if (file) {
     const filePath = `${this.basePath}/${Math.random()}${file.name}`;
     this.task =  this.afStorage.upload(filePath, file);
     (await this.task).ref.getDownloadURL().then((url: string) => {this.project.ImageUrl3 = url; });
     alert("Data save successfully.");
   } else {
     alert('No images selected');
     this.project.ImageUrl3 = ''; }

 }

 async onFileChanged4(event:any) {
  const file = event.target.files[0];
  if (file) {
     const filePath = `${this.basePath}/${Math.random()}${file.name}`;
     this.task =  this.afStorage.upload(filePath, file);
     (await this.task).ref.getDownloadURL().then((url: string) => {this.project.ImageUrl4 = url; });
     alert("Data save successfully.");
   } else {
     alert('No images selected');
     this.project.ImageUrl4 = ''; }

 }



 saveData():void{

 this.addprojectservice.create(this.project).then(()=>{
 alert("Data save successfully.");
 this.submitted=true;
 })
 }
 newData():void{
 this.submitted=false;
 this.project=new PROJECT();
 }



}
