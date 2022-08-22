import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-generation',
  templateUrl: './char-generation.component.html',
  styleUrls: ['./char-generation.component.css', '../../../app.component.css']
})
export class CharGenerationComponent implements OnInit {
  chars: object[] = []

  constructor() { }

  ngOnInit(): void {
  }

  onCharCreated(char: {charName: string, charPassive: string, charSkill: string, charPassiveName: string, charSkillName: string}){
    if (char.charPassive.includes(":")){
      char.charPassiveName = char.charPassive.slice(0, char.charPassive.indexOf(":"));
      char.charPassive = char.charPassive.slice(char.charPassive.indexOf(":"));
    }
    if (char.charSkill.includes(":")){
      char.charSkillName = char.charSkill.slice(0, char.charSkill.indexOf(":"));
      char.charSkill = char.charSkill.slice(char.charSkill.indexOf(":"));
    }

    this.chars.push({
      name: char.charName,
      passive: char.charPassive,
      skill: char.charSkill,
      passiveName: char.charPassiveName,
      skillName: char.charSkillName,
     })
  }

}
