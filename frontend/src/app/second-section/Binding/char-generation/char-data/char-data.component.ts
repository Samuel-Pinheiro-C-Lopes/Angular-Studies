import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-char-data',
  templateUrl: './char-data.component.html',
  styleUrls: ['../../../../app.component.css', './char-data.component.css']
})
export class CharDataComponent implements OnInit {
  @Output() charCreated = new EventEmitter<{charName: string, charPassive: string, charSkill: string, charPassiveName: string, charSkillName: string}>()

  characterName: string = "";
  characterPassive: string = "";
  characterSkill: string = "";

  onCharCreated() {
    this.charCreated.emit({
      charName: this.characterName,
      charPassive: this.characterPassive,
      charSkill: this.characterSkill,
      charPassiveName: "",
      charSkillName: "",
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

  // createSheet (charName: string, charPassive: string, charSkill: string): void {
  //   console.log(charName, charPassive, charSkill)
  // }

}
