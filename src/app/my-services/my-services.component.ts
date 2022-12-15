import { Component, OnInit } from '@angular/core';
import { ServService } from './../services/CRUD/serv.service';
import { map } from 'rxjs/operators';
import  Serv from 'src/app/services/CRUD/serv';
import { MatDialog } from '@angular/material/dialog';
import { BuyerverificationComponent } from './buyerverification/buyerverification.component';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {
  sv:Serv=new Serv();
  serv: any;
  submitted=false;
  myid:any;
  message:'successful' | any;

  constructor(private servService:ServService, private buyerdialog: MatDialog) {
      this.servService.getAll().snapshotChanges().pipe(
      map((changes: any[]) =>
       changes.map(c =>
      ({ id: c.payload.doc.id, ...c.payload.doc.data() })
      )
      )
      ).subscribe(data => {
      this.serv= data;
      return data;
      });

   }

  ngOnInit(): void {
  }



  clickme(i:number){
  this.submitted=true;
    this.myid=i;
    const data= {
      postnum: this.myid,
       id: this.serv[i].id,
    }

  this.servService.update(this.serv[i].id, data)
 .then(() =>this.message)
 .catch(err => console.log(err));
  }


  buynow(){
    this.buyerdialog.open(BuyerverificationComponent, { disableClose: false });
  }

}

