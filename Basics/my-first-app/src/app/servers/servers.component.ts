import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // select by attribute
  // selector: '[app-servers]',
  // select by class
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer: boolean = false;
  serverCreationStatus: string = 'No server created';
  serverName: string = 'TestServer';
  serverCreated: boolean = false;
  servers :['testServer1','testServer2'];
  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
   }

  ngOnInit() {

  }
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = "server"+ "  "  + " " +  this.serverName + "  " + "was created "
  }
  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
