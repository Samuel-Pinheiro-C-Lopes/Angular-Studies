import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css', '../../app.component.css']
})
export class ForDirectiveComponent implements OnInit {

  servers:string[] = ['test server', 'First Server'];
  serverName:string = '';


  constructor() { }

  ngOnInit(): void {
  }

  createPHP(): void {
    this.servers.push(this.serverName);
  }

}
