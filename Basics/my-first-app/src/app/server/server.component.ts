import { Component, } from '@angular/core';

@Component({
selector: 'app-server',
templateUrl: './server.component.html',
styles: [`
.ONLINE { color: 'white' }
`]
})
export class ServerComponent {
serverId: number = 10;
serverStatus: string = '';

constructor(){
    this.serverStatus = Math.random()>0.5 ? 'ONLINE':'OFFLINE';
}
getStatus() {
    return this.serverStatus;
}
getColor(){
    return this.serverStatus === 'ONLINE' ? 'green' : 'red';
}
}
