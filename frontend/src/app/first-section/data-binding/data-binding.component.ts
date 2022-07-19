import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css', '../../app.component.css']
})
export class DataBindingComponent implements OnInit {
  strings_interpolating: string[] = ['text content ;)', 'text content ;)'];
  allowResetData: boolean = false;
  text: string = '';
  paragraphText:string = '';
  paragraphText2:string = '';

  paragraphChanger(event: Event) {
    this.paragraphText2 = (<HTMLInputElement>event.target).value
  };

  constructor() { }

  ngOnInit(): void {
  }

}
