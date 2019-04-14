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
  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
   }

  ngOnInit() {

  }
  onCreateServer(){
    this.serverCreationStatus = "server was created"
  }

}
