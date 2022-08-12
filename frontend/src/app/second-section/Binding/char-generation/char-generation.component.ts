import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-generation',
  templateUrl: './char-generation.component.html',
  styleUrls: ['./char-generation.component.css', '../../../app.component.css']
})
export class CharGenerationComponent implements OnInit {
  chars: object[] = [{name: "Albion", passive:"The best: can win against almost anyone!", skill:"Win: he... wins! ^^"}]

  constructor() { }

  ngOnInit(): void {
  }

  onCharCreated(char: {charName: string, charPassive: string, charSkill: string}){
    this.chars.push({
      name: char.charName,
      passive: char.charPassive,
      skill: char.charSkill
     })
  }

}
