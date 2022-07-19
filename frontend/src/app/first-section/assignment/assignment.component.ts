import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css', '../../app.component.css']
})
export class AssignmentComponent implements OnInit {

  displaySecret:boolean = false;
  btnsClicked:number[] = [];
  password:string = '00000'

  constructor() { 
  }

  ngOnInit(): void {
  }

  getColor() {
    return this.btnsClicked.length >= 5 ? 'blue' : 'none' 
  }

  createPassword():void {
    const n = String(this.btnsClicked.slice(-1));
    this.password = n.padStart(4, n);
  }
}
