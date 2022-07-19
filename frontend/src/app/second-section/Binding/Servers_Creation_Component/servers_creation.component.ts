import { Component } from "@angular/core";

@Component({
    selector: 'servers-creation-component',
    templateUrl: 'servers_creation.component.html',
    styleUrls: ['servers_creation.component.css', '../../../app.component.css'] ,
})
export class Servers_Creation_Component {
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