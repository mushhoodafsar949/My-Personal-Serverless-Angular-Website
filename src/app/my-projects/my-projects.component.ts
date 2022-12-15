import { Component, OnInit } from '@angular/core';
import { AddProjectService } from './../services/profile/add-project.service';
import { map } from 'rxjs/operators';
import  PROJECT  from 'src/app/services/profile/project';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})

export class MyProjectsComponent implements OnInit {
  proj:PROJECT=new PROJECT();
  project: any;
  submitted=false;
  myid:any;
  message:'successful' | any;

  constructor(private projectservice:AddProjectService) {
      this.projectservice.getAll().snapshotChanges().pipe(
      map((changes: any[]) =>
       changes.map(c =>
      ({ id: c.payload.doc.id, ...c.payload.doc.data() })
      )
      )
      ).subscribe(data => {
      this.project= data;
      return data;
      });

   }

  ngOnInit(): void {
  }


}

