import { Component, OnInit } from '@angular/core';
// import { setTimeout } from 'timers';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css', '../../app.component.css']
})
export class EventBindingComponent implements OnInit {
  phpCreated:boolean = false;
  paragrapher:string = "This paragrapher was created!";
  text_1:string = "";
  online:boolean = true
  text_2:string = ""
  status:string = "online"

  constructor() { 

  }

  
  // @ViewChild("btns") btns: ElementRef;
  // deleteButtons() {
  //   console.log(this.btns.nativeElement)
  // }


  ngOnInit(): void {
  }

  createPhp(event: Event):void {
    // setTimeout(():void => {
    //   (<HTMLButtonElement>event.target).insertAdjacentHTML('afterend', `
    //   <p>I've been created!</p>`)     
    // }, 500)
    (<HTMLButtonElement>event.target).insertAdjacentHTML('afterend', `
    <p>I've been created!</p>`)
    console.log(event)
  }

  checkStatus():string {
    if (this.online) {
      this.text_1 = `We are online! Server Name:`;
      this.status = 'online';
      return 'rgba(36, 163, 36, 0.932)';
      }else {
      this.text_1 = `We are offline, hence there're no servers to show!`;
      this.status = 'offline';
      this.text_2 = '';
      return 'rgb(124, 22, 8)'
      }
  }
  onServerName(event:Event) {
    this.text_2 =  (<HTMLInputElement>event.target).value
  }
}
