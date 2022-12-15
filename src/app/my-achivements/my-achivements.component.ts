import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-achivements',
  templateUrl: './my-achivements.component.html',
  styleUrls: ['./my-achivements.component.css']
})
export class MyAchivementsComponent implements OnInit {
  @Input() message = '';
  constructor() { }

  ngOnInit(): void {
  }

}
