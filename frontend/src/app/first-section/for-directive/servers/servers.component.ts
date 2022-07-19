import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css', '../../../app.component.css']
})
export class ServersComponent implements OnInit {

  serverName:string = 'test_server'
  serverStatus:string = ''

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  ngOnInit(): void {
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red'
  }

}
