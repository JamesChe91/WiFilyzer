import { Component, OnInit } from '@angular/core';
import { WifiService } from './../../providers/wifi.service';

import { CurrentNetwork } from './../../interfaces/current-network';

@Component({
  selector: 'app-current-connection',
  templateUrl: './current-connection.component.html',
  styleUrls: ['./current-connection.component.scss']
})
export class CurrentConnectionComponent implements OnInit {
  bssid: string;
  ssid: string;
  address: string;
  constructor(public wifi: WifiService) { }

  ngOnInit() {
    this.getCurrentConnections();
  }
  getCurrentConnections() {
    const allData = [];
    this.wifi.getCurrentConnections().then(init => {
      if (init.length > 0) {
        console.log(init);
        this.bssid = `( ${init[0].bssid})`;
        this.ssid = init[0].ssid;
        this.callgetNetworkInterfaces(init);
      }
      else {
        this.ssid = "No se encuentra conectado a una red Wifi";
        this.address = "No se encuentra conectado a una red Wifi";
      }
    });
  }

  callgetNetworkInterfaces(current) {
    const allData = [];
    if (current.length > 0) {
      this.wifi.getNetworkInterfaces().then((data) => {
        this.address = data[0].address;
      });
    }
  }
}
