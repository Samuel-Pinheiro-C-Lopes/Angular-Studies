import { Component } from '@angular/core';

@Component({
  selector: 'first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css', '../app.component.css']
})
export class FirstSectionComponent {
  title = 'Angular_Studies';
  show:boolean[] = [false, false, false, false, false];

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
