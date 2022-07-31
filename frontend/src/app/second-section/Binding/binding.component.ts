import { Component } from "@angular/core";

@Component({
    selector: 'second-section-binding',
    templateUrl: 'binding.component.html',
    styleUrls: ['binding.component.css', '../../app.component.css'],
})
export class SecondSectionBindingComponent {
    showWindow:boolean[] = [false, false]

    constructor() {

    }

    showOnClick(num:number):void {
        this.showWindow.forEach((_, i) => {
          if (i === num) {
            this.showWindow[i] = !this.showWindow[i];
          }else{
            this.showWindow[i] = false;
          }
        });
      };

}