import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['../../app.component.css', './directives.component.css']
})
export class DirectivesComponent implements OnInit {
  input_1 = "";
  btn_content = "I am green! =)";

  active_button:number = 0
  constructor() { }

  ngOnInit(): void {
  }
  
  checkContent() {
    return this.btn_content.slice(-1) === ')' ? 'green': 'red'
  }

  classFinder():string {
    if (this.active_button === 1) {
      return "class_1"
    }
    if (this.active_button === 2) {
      return "class_2"
    }
    if (this.active_button === 3) {
      return "class_3"
    }
    return ''
  }
  colorReturner(){
    return this.active_button === 1 ? 'red' : this.active_button === 2 ? 'green' : 'blue'
  }
}
