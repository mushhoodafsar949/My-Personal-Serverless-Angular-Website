import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-my-navbar',
  templateUrl: './my-navbar.component.html',
  styleUrls: ['./my-navbar.component.css']
})
export class MyNavbarComponent implements OnInit {

  constructor( private dialog: MatDialog,private loginsheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  clickme(){
    this.loginsheet.open(LoginComponent);}

}
