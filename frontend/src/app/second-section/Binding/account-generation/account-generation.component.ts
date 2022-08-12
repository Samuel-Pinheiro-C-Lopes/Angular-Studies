import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-generation',
  templateUrl: './account-generation.component.html',
  styleUrls: ['./account-generation.component.css', '../../../app.component.css']
})
export class AccountGenerationComponent implements OnInit {
  chars: object[] = [{name: "Albion", passive:"The best: can win against almost anyone!", skill:"Win: he... wins! ^^"}]

  constructor() { }

  ngOnInit(): void {
  }

}
