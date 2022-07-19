import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Studies';
  show:boolean[] = [false, false, false, false];

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
