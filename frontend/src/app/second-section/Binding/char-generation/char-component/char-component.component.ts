import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-component',
  templateUrl: './char-component.component.html',
  styleUrls: ['./char-component.component.css']
})
export class CharComponentComponent implements OnInit {
  @Input("characterData") character?: {name?: string, passive?: string, skill?: string, passiveName?: string, skillName?: string}

  constructor() { }

  ngOnInit(): void {
  }

}
