import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.css', '../app.component.css']
})
export class SecondSectionComponent implements OnInit {

  show:boolean[] = [false, false, false];

  constructor() { }

  ngOnInit(): void {
  }

  showOnClick(num:number):void {
    this.show.forEach((_, i) => {
      if (i === num) {
        this.show[i] = true;
      }else{
        this.show[i] = false;
      }
    });
  };

}
