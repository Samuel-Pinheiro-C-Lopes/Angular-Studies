import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-data',
  templateUrl: './char-data.component.html',
  styleUrls: ['../../../../app.component.css', './char-data.component.css']
})
export class CharDataComponent implements OnInit {

  characterName: string = "";
  characterPassive: string = "";
  characterSkill: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  // createSheet (charName: string, charPassive: string, charSkill: string): void {
  //   console.log(charName, charPassive, charSkill)
  // }

}
