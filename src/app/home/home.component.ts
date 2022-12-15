import { Component, ElementRef, OnInit, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   submit=false;
   num: any;
  constructor() { }

  ngOnInit(): void {
  }

  getData() {

    let a=  document.createElement('a');
    a.id='mush';
    a.href='asdada';
    a.innerHTML='aaaaaaaaaaaaaaaa';
document.getElementById("myName")?.appendChild(a);

    }
    Slide1(){
      this.submit=true;
      this.num=1;
    }
    Slide2(){
      this.submit=true;
      this.num=2;
    }
    Slide3(){
      this.submit=true;
      this.num=3;
    }
    Slide4(){
      this.submit=true;
      this.num=4;
    }
    Slide5(){
      this.submit=true;
      this.num=5;
    }
    Slide6(){
      this.submit=true;
      this.num=6;
    }
    Slide7(){
      this.submit=true;
      this.num=7;
    }
    Slide8(){
      this.submit=true;
      this.num=8;
    }
    Slide9(){
      this.submit=true;
      this.num=9;
    }
    Slide10(){
      this.submit=true;
      this.num=10;
    }
    getback(){
      this.submit=false;

    }

}
