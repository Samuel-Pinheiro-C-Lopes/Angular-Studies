import { Component } from "@angular/core";

@Component({
    selector: 'app-servers-creation',
    templateUrl: 'servers-creation.component.html',
    styleUrls: ['servers-creation.component.css', '../../../app.component.css'] ,
})
export class ServersCreationComponent {
    serverElements?: object[] = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];

    constructor() { }

    onServerAdded(serverData: {serverName:string, serverContent: string}) {
        this?.serverElements?.push({
            type: 'server',
            name: serverData.serverName,
            content: serverData.serverContent
        });
    }
    
      onBlueprintAdded(blueprintData: {serverName:string, serverContent: string}) {
        this?.serverElements?.push({
            type: 'blueprint',
            name: blueprintData.serverName,
            content: blueprintData.serverContent
        });
    }

}